// src/utils/apiResponseHandlers.js

export const EMAIL_RESPONSES = {
  200: {
    success: true,
    message: "¡Suscripción exitosa! Revisa tu correo.",
    type: "success",
  },
  400: {
    success: false,
    message: "El correo no tiene un formato válido.",
    type: "warn",
  },
  403: {
    success: false,
    message: "No se permiten correos desechables o temporales.",
    type: "warn",
  },
  409: {
    success: false,
    message: "Este correo ya está suscrito.",
    type: "info",
  },
  429: {
    success: false,
    message: "Demasiados intentos. Por favor, intenta en 15 minutos.",
    type: "warn",
  },
  500: {
    success: false,
    message: "Error del servidor. Inténtalo más tarde.",
    type: "error",
    isError: true, // Marca errores técnicos reales
  },
};

export const getEmailResponseMessage = (status) => {
  return (
    EMAIL_RESPONSES[status] || {
      success: false,
      message: "Ocurrió un error inesperado.",
      type: "error",
      isError: true,
    }
  );
};
