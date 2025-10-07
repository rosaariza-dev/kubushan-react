import React, { useState, useEffect } from "react";
import { X, AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react";

const Toast = ({
  id,
  type = "error",
  title,
  message,
  duration = 5000,
  onClose,
}) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      onClose(id);
    }, 300);
  };

  const toastConfig = {
    error: {
      icon: AlertCircle,
      iconColor: "text-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      defaultTitle: "Error",
      defaultMessage: "Ha ocurrido un error al cargar los datos.",
    },
    success: {
      icon: CheckCircle,
      iconColor: "text-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      defaultTitle: "Éxito",
      defaultMessage: "Operación completada correctamente.",
    },
    warning: {
      icon: AlertTriangle,
      iconColor: "text-yellow-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      defaultTitle: "Advertencia",
      defaultMessage: "Por favor revisa esta información.",
    },
    info: {
      icon: Info,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      defaultTitle: "Información",
      defaultMessage: "Nueva información disponible.",
    },
  };

  const config = toastConfig[type];
  const Icon = config.icon;

  return (
    <div
      className={`
        bg-white rounded-xl shadow-lg border ${config.borderColor}
        p-4 mb-3 min-w-80 max-w-md
        transform transition-all duration-300 ease-out
        ${
          isExiting ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
        }
      `}
    >
      <div className="flex items-start gap-3">
        <div className={`${config.bgColor} rounded-lg p-2 flex-shrink-0`}>
          <Icon className={config.iconColor} size={24} />
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-gray-900 text-sm mb-1 font-primary">
            {title || config.defaultTitle}
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed font-secondary">
            {message || config.defaultMessage}
          </p>
        </div>

        <button
          onClick={handleClose}
          className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0 ml-2 cursor-pointer"
        >
          <X size={18} />
        </button>
      </div>

      <div className="mt-3 h-1 bg-gray-100 rounded-full overflow-hidden">
        <div
          className={`h-full ${
            type === "error"
              ? "bg-red-500"
              : type === "success"
              ? "bg-green-500"
              : type === "warning"
              ? "bg-yellow-500"
              : "bg-blue-500"
          } animate-progress`}
          style={{ animationDuration: `${duration}ms` }}
        />
      </div>
    </div>
  );
};

export default Toast;
