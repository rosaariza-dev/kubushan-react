import ToastContainer from "@/components/ui/ToastContainer";
import useToast from "@/hooks/useToast ";
import React, { createContext, useContext } from "react";


const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const { toasts, addToast, removeToast } = useToast();

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
};

export const useToastContext = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToastContext debe usarse dentro de ToastProvider");
  }
  return context;
};
