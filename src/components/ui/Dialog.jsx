import { AlertCircle, AlertTriangle, CheckCircle, Info, X } from "lucide-react";

const Dialog = ({ isOpen, onClose, type = "info", title, message }) => {
  if (!isOpen) return null;

  const iconConfig = {
    info: {
      icon: Info,
      color: "text-blue-500",
      bg: "bg-blue-100",
      defaultTitle: "¡Información!",
      defaultMessage: "Este es un mensaje informativo para el usuario.",
    },
    warn: {
      icon: AlertTriangle,
      color: "text-yellow-500",
      bg: "bg-yellow-100",
      defaultTitle: "¡Advertencia!",
      defaultMessage: "Debes tener cuidado con esta acción antes de continuar.",
    },
    error: {
      icon: AlertCircle,
      color: "text-red-500",
      bg: "bg-red-100",
      defaultTitle: "¡Error!",
      defaultMessage:
        "Ha ocurrido un error inesperado. Por favor intenta nuevamente.",
    },
    success: {
      icon: CheckCircle,
      color: "text-green-500",
      bg: "bg-green-100",
      defaultTitle: "¡Éxito!",
      defaultMessage: "La operación se ha completado correctamente.",
    },
  };

  const {
    icon: Icon,
    color,
    bg,
    defaultTitle,
    defaultMessage,
  } = iconConfig[type];

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col items-center text-center mt-2">
          <div className={`${bg} ${color} rounded-full p-4 mb-4`}>
            <Icon size={48} />
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-3 font-primary">
            {title || defaultTitle}
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed font-secondary">
            {message || defaultMessage}
          </p>

          <button
            onClick={onClose}
            className="bg-custom-purple hover:bg-custom-purple-hover text-white font-semibold py-3 px-8 font-secondary rounded-lg transition-colors shadow-md hover:shadow-lg cursor-pointer"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
