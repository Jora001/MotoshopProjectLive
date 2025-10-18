interface MessageBubbleProps {
  message: string;
  sender: 'user' | 'bot' | 'error';
}

export default function MessageBubble({ message, sender }: MessageBubbleProps) {
  const baseClasses = "max-w-xs rounded-lg p-3 mb-2";
  let classes = "";

  if (sender === "user") {
    classes = "bg-orange-500 text-white self-end";
  } else if (sender === "bot") {
    classes = "bg-gray-200 text-gray-900 self-start";
  } else if (sender === "error") {
    classes = "bg-red-500 text-white self-start";
  }

  return (
    <div className={`${baseClasses} ${classes}`}>
      {message}
    </div>
  );
}