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
  const [open, setOpen] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => {
      setOpen(false);
    }, 200); // փոքր delay → smooth UX
  };

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

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: data.reply,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 2,
          sender: "error",
          text: "Something went wrong",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* ===== CHAT WINDOW ===== */}
      <div
        onMouseEnter={() => {
          clearCloseTimer();
          setOpen(true);
        }}
        onMouseLeave={scheduleClose}
        className={`absolute bottom-20 right-0 w-[320px] h-[480px]
        bg-white dark:bg-gray-800 rounded-2xl shadow-2xl
        flex flex-col overflow-hidden
        transition-all duration-300 ease-out
        ${
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="flex-1 overflow-y-auto p-4">
          {messages.map((msg) => (
            <MessageBubble
              key={msg.id}
              message={msg.text}
              sender={msg.sender}
            />
          ))}

          {loading && (
            <div className="text-sm italic text-gray-500">
              Bot is typing...
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <div className="p-3 border-t bg-gray-100 dark:bg-gray-900 flex gap-2">
          <input
            type="text"
            className="flex-1 rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="bg-orange-600 hover:bg-orange-700 text-white px-4 rounded-lg text-sm"
          >
            Send
          </button>
        </div>
      </div>

      {/* ===== CHAT ICON (ONLY THIS OPENS CHAT) ===== */}
      <div
        onMouseEnter={() => {
          clearCloseTimer();
          setOpen(true);
        }}
        onMouseLeave={scheduleClose}
        className="w-16 h-16 rounded-full bg-white shadow-xl cursor-pointer
        flex items-center justify-center hover:scale-110 transition-transform duration-200"
      >
        <Image
          src="/LiFe_chat.jpg"
          alt="Live Chat"
          fill
          className="rounded-full object-cover"
        />
      </div>
    </div>
  );
}
