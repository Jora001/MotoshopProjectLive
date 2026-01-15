"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
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

  /* ===== Auto scroll ===== */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /* ===== Send message ===== */
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
      console.error(error);
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
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className="fixed bottom-4 right-4 z-50 transition-all duration-300"
      style={{
        width: isExpanded ? 320 : 64,
        height: isExpanded ? 500 : 64,
      }}
    >
      {isExpanded ? (
        /* ===== EXPANDED CHAT ===== */
        <div className="flex flex-col h-full bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
          <div className="flex-1 overflow-y-auto p-4">
            {messages.map((msg) => (
              <MessageBubble
                key={msg.id}
                message={msg.text}
                sender={msg.sender}
              />
            ))}

            {loading && (
              <div className="text-gray-500 italic mb-2">
                Bot is typing...
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-gray-100 dark:bg-gray-900 flex gap-2">
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
              disabled={loading}
              className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        /* ===== ROUND CHAT ICON ===== */
   <div className="w-40 h-40 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200">
  <Image
    src="/LiFe_chat.jpg"
    alt="Live Chat"
    width={54}
    height={54}
    className="select-none"
    priority
  />
</div>

      )}
    </div>
  );
}
