import { useState } from "react";

const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = ({ type = "error", title, message, duration = 5000 }) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, type, title, message, duration }]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return { toasts, addToast, removeToast };
};

export default useToast;
