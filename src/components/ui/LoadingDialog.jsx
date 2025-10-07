import { Loader2 } from "lucide-react";

const LoadingDialog = ({
  isOpen,
  title = "Procesando solicitud...",
  message = "Por favor espera mientras procesamos tu información.",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-fadeIn">
        <div className="flex flex-col items-center text-center">
          {/* Spinner animado */}
          <div className="relative mb-6">
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-full p-6">
              <Loader2
                size={56}
                className="text-custom-purple animate-spin"
                strokeWidth={2.5}
              />
            </div>
            {/* Efecto de pulso en el fondo */}
            <div className="absolute inset-0 bg-purple-200 rounded-full animate-ping opacity-20"></div>
          </div>

          {/* Título */}
          <h2 className="text-2xl font-bold text-gray-800 mb-3 font-primary">
            {title}
          </h2>

          {/* Mensaje */}
          <p className="text-gray-600 leading-relaxed font-secondary">
            {message}
          </p>

          {/* Barra de progreso animada (opcional pero moderna) */}
          <div className="w-full mt-6 bg-gray-200 rounded-full h-1.5 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-custom-purple to-blue-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingDialog;
