import { format } from "date-fns";
import { ChatMessage as ChatMessageType } from "@/types";

interface ChatMessageProps {
  message: ChatMessageType;
  isOwn: boolean;
}

export default function ChatMessage({ message, isOwn }: ChatMessageProps) {
  // Handle system messages
  if (message.sender === "system") {
    return (
      <div className="flex justify-center">
        <div className="rounded-lg bg-gray-100 dark:bg-gray-800 px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
          {message.content}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex ${isOwn ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[75%] ${isOwn ? "order-1" : "order-2"}`}>
        <div className="flex items-end gap-2">
          {!isOwn && (
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700">
              <span className="text-sm font-bold">
                {message.sender.substring(5, 7)}
              </span>
            </div>
          )}

          <div
            className={`rounded-2xl px-4 py-2 ${
              isOwn
                ? "rounded-br-none bg-blue-500 text-white"
                : "rounded-bl-none bg-gray-200 dark:bg-gray-700"
            }`}
          >
            {!isOwn && (
              <div className="mb-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                {message.sender}
              </div>
            )}
            <div>{message.content}</div>
          </div>
        </div>

        <div
          className={`mt-1 text-xs text-gray-400 ${
            isOwn ? "text-right" : "text-left"
          }`}
        >
          {format(new Date(message.timestamp), "h:mm a")}
        </div>
      </div>
    </div>
  );
}
