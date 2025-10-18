"use client";

import { useState, useRef, useEffect } from "react";
import MessageBubble from "./MessageBubble";

interface ChatMessage {
  id: number;
  sender: "user" | "bot" | "error";
  text: string;
}

export default function Chat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      sender: "user",
      text: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage.text }),
      });

      if (!res.ok) throw new Error("API Error");

      const data = await res.json();

      const botMessage: ChatMessage = {
        id: Date.now() + 1,
        sender: "bot",
        text: data.reply,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error(error); // Ավելացվել է օգտագործման համար
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 2,
          sender: "error",
          text: "Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className="fixed bottom-4 right-4 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out"
      style={{
        width: isExpanded ? 320 : 60,
        height: isExpanded ? 500 : 60,
      }}
    >
      {isExpanded ? (
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto p-4 flex flex-col bg-white dark:bg-gray-800">
            {messages.map((msg) => (
              <MessageBubble key={msg.id} message={msg.text} sender={msg.sender} />
            ))}
            {loading && (
              <div className="text-gray-500 italic self-start mb-2">
                Bot is typing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-gray-100 dark:bg-gray-900 flex items-center space-x-2">
            <input
              type="text"
              className="flex-1 rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
            />
            <button
              onClick={sendMessage}
              className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg disabled:opacity-50"
              disabled={loading}
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full">
          {/* Small chat icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-orange-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4-.8L3 21l1.8-5.2A7.962 7.962 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
