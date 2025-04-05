"use client";

import { useState, useRef, useEffect } from "react";

interface ChatInputProps {
  onSendMessage: (content: string) => void;
  isConnected: boolean;
}

export default function ChatInput({
  onSendMessage,
  isConnected,
}: ChatInputProps) {
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus input when component mounts
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (message.trim() !== "") {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <div className="form-input cont flex-1">
        <input
          ref={inputRef}
          type="text"
          placeholder={isConnected ? "Type a message..." : "Connecting..."}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={!isConnected}
          className="w-full"
        />
        <button
          type="submit"
          className="btn primary"
          disabled={!isConnected || message.trim() === ""}
        >
          <svg
            className="icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </div>
    </form>
  );
}
