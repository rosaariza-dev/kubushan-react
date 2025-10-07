const ERROR_CATEGORIES = {
  // Errores de cliente (4xx)
  400: { category: "validation", reason: "Datos inválidos" },
  401: { category: "auth", reason: "Error de autenticación" },
  403: { category: "auth", reason: "Acceso denegado" },
  404: { category: "not_found", reason: "Recurso no encontrado" },
  409: { category: "conflict", reason: "Conflicto con el estado actual" },
  422: { category: "validation", reason: "Entidad no procesable" },
  429: { category: "rate_limit", reason: "Demasiadas peticiones" },

  // Errores de servidor (5xx)
  500: { category: "server", reason: "Error interno del servidor" },
  502: { category: "server", reason: "Gateway inválido" },
  503: { category: "server", reason: "Servicio no disponible" },
  504: { category: "server", reason: "Tiempo de espera agotado del gateway" },
};

const getErrorCategory = (error) => {
  // Error de red (sin respuesta del servidor)
  if (!error.response) {
    return {
      category: "network",
      reason: "No se pudo conectar al servidor",
    };
  }

  // Error por timeout
  if (error.code === "ECONNABORTED") {
    return {
      category: "timeout",
      reason: "Tiempo de espera agotado",
    };
  }

  const status = error.response.status;

  // Buscar en el mapa de categorías
  if (ERROR_CATEGORIES[status]) {
    return ERROR_CATEGORIES[status];
  }

  // Fallback según rango de status
  if (status >= 500) {
    return { category: "server", reason: "Error del servidor" };
  }

  if (status >= 400) {
    return { category: "client_error", reason: "Error en la petición" };
  }

  return { category: "unknown", reason: "Error desconocido" };
};

/**
 * Sanitiza un error de Axios para logging seguro
 */
export const sanitizeError = (error) => {
  // En desarrollo, retornar el error completo
  if (import.meta.env.DEV) {
    return error;
  }

  // En producción, sanitizar errores de Axios
  if (error?.isAxiosError) {
    const { category, reason } = getErrorCategory(error);

    return {
      message: error.message,
      status: error.response?.status,
      method: error.config?.method?.toUpperCase(),
      category,
      reason,
      timestamp: new Date().toISOString(),
    };
  }

  // Para otros tipos de errores
  if (error instanceof Error) {
    return {
      message: error.message,
      name: error.name,
      category: "unknown",
      timestamp: new Date().toISOString(),
    };
  }

  // Si no es un error reconocido
  return {
    message: "Error desconocido",
    category: "unknown",
    timestamp: new Date().toISOString(),
  };
};
