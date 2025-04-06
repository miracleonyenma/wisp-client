"use client";

import { SentIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
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
          <HugeiconsIcon
            icon={SentIcon}
            className="icon h-6 w-6"
            strokeWidth={2}
          />
        </button>
      </div>
    </form>
  );
}
