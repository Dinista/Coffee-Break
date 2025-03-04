"use client";

import React, { useEffect, useState } from "react";
import { CircleCheck, CircleX, CircleAlert, CircleHelp } from "lucide-react";

interface PopupMessageProps {
  type: "success" | "error" | "info" | "warning";
  message: string;
  duration?: number;
  onClose?: () => void;
}

const iconMap = {
  success: <CircleCheck className="text-green-500 w-4 h-4" />,
  error: <CircleX className="text-red-500 w-4 h-4" />,
  info: <CircleHelp className="text-blue-500 w-4 h-4" />,
  warning: <CircleAlert className="text-yellow-500 w-4 h-4" />,
};

export const PopupMessage: React.FC<PopupMessageProps> = ({
  type = "info",
  message,
  duration = 3000,
  onClose,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose?.();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  return (
    <div
      className={`fixed top-5 right-5 flex items-center gap-3 px-4 py-2 rounded-lg shadow-md transition-opacity bg-white ${
        type === "success"
          ? "text-green-500"
          : type === "error"
          ? "text-red-500"
          : type === "info"
          ? "text-blue-500"
          : "text-yellow-500"
      }`}
    >
      {iconMap[type]}
      <span className="text-sm font-regular">{message}</span>
    </div>
  );
};
