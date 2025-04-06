// app/chat/[roomId]/page.tsx
"use client";

import { useEffect, useState, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { io, Socket } from "socket.io-client";
import { ChatMessage as ChatMessageType } from "@/types";
import ChatInput from "@/components/Chat/Input";
import ChatMessage from "@/components/Chat/Message";
import { useRoomsStore } from "@/store/useRoomsStore";

export default function ChatRoom() {
  const { roomId } = useParams();
  const router = useRouter();
  const { rooms, addRoom } = useRoomsStore();
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [users, setUsers] = useState<string[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize Socket.io connection
  useEffect(() => {
    console.log("rooms", rooms);

    const SOCKET_URL =
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    const newSocket = io(SOCKET_URL);

    newSocket.on("connect", () => {
      setIsConnected(true);
      console.log("Connected to socket server");

      // check if room exists
      if (roomId && typeof roomId === "string") {
        console.log("roomId", roomId);

        const existingRoom = rooms.find((room) => room.id === roomId);
        if (existingRoom) {
          // addRoom(existingRoom);
          return newSocket.emit("joinRoom", roomId, existingRoom.userId);
        }
      }

      // Join the room
      newSocket.emit("joinRoom", roomId);
      // if no rooms with the same id, add it
      const existingRoom = rooms.find((room) => room.id === roomId);
      if (!existingRoom) {
        addRoom({ id: roomId as string, userId: newSocket?.id as string });
      }
    });

    newSocket.on("disconnect", () => {
      setIsConnected(false);
      console.log("Disconnected from socket server");
    });

    setSocket(newSocket);

    // Clean up on unmount
    return () => {
      newSocket.emit("leaveRoom", roomId);
      newSocket.disconnect();
    };
  }, [addRoom, roomId, rooms]);

  // Set up socket event listeners
  useEffect(() => {
    if (!socket) return;

    // Room users
    socket.on("roomUsers", ({ users }) => {
      setUsers(users);
    });

    // Room messages
    socket.on("roomMessages", ({ messages }) => {
      setMessages(messages);
    });

    // New user joined
    socket.on("userJoined", ({ userId }) => {
      setUsers((prevUsers) => [...prevUsers, userId]);

      // System message
      const systemMessage: ChatMessageType = {
        id: `system-${Date.now()}`,
        sender: "system",
        content: `${userId} joined the chat`,
        timestamp: Date.now(),
      };

      setMessages((prevMessages) => [...prevMessages, systemMessage]);
    });

    // User left
    socket.on("userLeft", ({ userId }) => {
      setUsers((prevUsers) => prevUsers.filter((user) => user !== userId));

      // System message
      const systemMessage: ChatMessageType = {
        id: `system-${Date.now()}`,
        sender: "system",
        content: `${userId} left the chat`,
        timestamp: Date.now(),
      };

      setMessages((prevMessages) => [...prevMessages, systemMessage]);
    });

    // New message
    socket.on("newMessage", (message: ChatMessageType) => {
      setMessages((prevMessages) => [...prevMessages, message]);

      // If this is the first message from this user and it's me, save my ID
      if (!userId && socket.id && message.sender !== "system") {
        // This approach assumes the server is sending back your messages with your ID
        // If the server assigns the ID differently, this might need adjustment
        const myMessages = messages.filter(
          (msg) => msg.sender === message.sender
        );
        if (myMessages.length === 0) {
          setUserId(message.sender);
        }
      }
    });

    // Error handling
    socket.on("error", ({ message }) => {
      console.error("Socket error:", message);
      // Maybe show a toast or notification
    });

    // Clean up listeners on unmount or when socket changes
    return () => {
      socket.off("roomUsers");
      socket.off("userJoined");
      socket.off("userLeft");
      socket.off("newMessage");
      socket.off("error");
    };
  }, [socket, messages, userId]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Setup push notifications
  useEffect(() => {
    if (!socket || !userId) return;

    // Check if push notifications are supported
    if ("serviceWorker" in navigator && "PushManager" in window) {
      // Register service worker (needs to be implemented separately)
      navigator.serviceWorker.ready.then((registration) => {
        // Request permission
        Notification.requestPermission()
          .then((permission) => {
            if (permission === "granted") {
              // Subscribe to push notifications
              return registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
              });
            }
          })
          .then((subscription) => {
            if (subscription) {
              // Send subscription to server
              socket.emit("subscribeToPush", {
                roomId,
                subscription,
              });
            }
          })
          .catch((error) => {
            console.error("Push notification error:", error);
          });
      });
    }
  }, [socket, userId, roomId]);

  const handleSendMessage = (content: string) => {
    if (!socket || content.trim() === "") return;

    socket.emit("sendMessage", {
      roomId,
      content,
    });
  };

  const handleLeaveRoom = () => {
    router.push("/");
  };

  const copyRoomId = () => {
    navigator.clipboard
      .writeText(roomId as string)
      .then(() => {
        // Show feedback (could be a toast notification)
        alert("Room ID copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy room ID:", error);
      });
  };

  useEffect(() => {
    console.log("rooms", rooms);
  }, [rooms]);

  return (
    <main className="flex flex-col h-screen">
      <div className="site-header">
        <div className="wrapper">
          <div className="flex items-center gap-2">
            <button
              className="btn sm"
              onClick={handleLeaveRoom}
              aria-label="Leave room"
            >
              <svg
                className="icon h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <h1 className="text-xl font-bold">Ephemeral Chat</h1>
          </div>

          <div className="flex items-center gap-2">
            <div className="tag">
              <span>Room: </span>
              <span className="font-mono">
                {(roomId as string).substring(0, 8)}...
              </span>
            </div>
            <button
              className="btn sm ghost"
              onClick={copyRoomId}
              aria-label="Copy room ID"
            >
              <svg
                className="icon h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Users sidebar */}
        <div className="hidden md:flex flex-col w-64 bg-gray-100 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4">
          <h2 className="text-lg font-bold mb-4">
            Active Users ({users.length})
          </h2>
          <div className="flex flex-col gap-1">
            {users.map((user) => (
              <div
                key={user}
                className={`flex items-center gap-2 p-2 rounded-lg ${
                  user === userId
                    ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
                    : ""
                }`}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700">
                  <span className="text-sm font-bold">
                    {user.substring(5, 7)}
                  </span>
                </div>
                <span className="font-medium">
                  {user}
                  {user === userId ? " (You)" : ""}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Chat area */}
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="flex flex-col gap-4">
              {/* Welcome message */}
              <div className="rounded-lg bg-gray-100 dark:bg-gray-800 p-4 text-center">
                <h2 className="text-lg font-bold">Welcome to the chat room!</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  This is an ephemeral chat room. Messages will disappear when
                  you disconnect.
                </p>
              </div>

              {/* Chat messages */}
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  message={message}
                  isOwn={message.sender === userId}
                />
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input area */}
          <div className="border-t border-gray-200 dark:border-gray-700 p-4">
            <ChatInput
              onSendMessage={handleSendMessage}
              isConnected={isConnected}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
