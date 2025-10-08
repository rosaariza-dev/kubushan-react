import { logger } from "@/lib/utils";
import { getEmailResponseMessage } from "@/utils/apiResponse";
import { validateEmail } from "@/utils/valitators";
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getTypes = async () => {
  try {
    logger.info("[getTypes] Consultando /types");
    const { data: response, status } = await api.get("/types");

    logger.debug("[getTypes] Respuesta obtenida:", { response, status });

    if (status !== 200) {
      logger.inspectWarn("[getTypes] Código de estado inesperado", { status });
      throw new Error(`Código de estado HTTP inesperado: ${status}`);
    }

    const { success, message, data: types } = response;

    if (!success) {
      logger.inspectWarn("[getTypes] La consulta no fue exitosa", { message });
      throw new Error(
        message || "Error desconocido en la respuesta del servidor"
      );
    }

    if (!Array.isArray(types)) {
      logger.error(
        "[getTypes] Formato de datos inválido - se esperaba un array",
        {
          tipoRecibido: typeof types,
        }
      );
      throw new Error("El servidor devolvió datos en formato inválido");
    }

    logger.success("[getTypes] Tipos obtenidos exitosamente", {
      cantidadTipos: types?.length || 0,
    });

    return types;
  } catch (error) {
    logger.error("[getTypes] Ocurrio un error al consultar los tipos", error);
    throw error;
  }
};

export const getProducts = async () => {
  try {
    logger.info("[getProducts] Consultando productos");
    const { data: response, status } = await api.get("/products");

    logger.debug("[getProducts] Respuesta obtenida", { response, status });

    if (status !== 200) {
      logger.inspectWarn("[getProducts] Código de estado inesperado", {
        status,
      });
      throw new Error(
        `[getProducts] Código de estado HTTP inesperado: ${status}`
      );
    }

    const { success, message, data: products } = response;

    if (!success) {
      logger.inspectWarn("[getProducts] La consulta no fue exitosa", {
        message,
      });
      throw new Error(
        message || "Error desconocido en la respuesta del servidor"
      );
    }

    if (!Array.isArray(products)) {
      logger.error(
        "[getProducts] Formato de datos inválido - se esperaba un array",
        {
          tipoRecibido: typeof products,
        }
      );
      throw new Error("El servidor devolvió datos en formato inválido");
    }

    logger.success("[getProducts] Productos consultados exitosamente", {
      cantidadProductos: products?.length || 0,
    });

    return products;
  } catch (error) {
    logger.error(
      "[getProducts] Ocurrió un error al consultar los productos",
      error
    );
    throw error;
  }
};

export const getProductsByTypeId = async (id) => {
  try {
    logger.info("[getProductsByTypeId] Consultado productos por tipo ", {
      typeId: id,
    });

    if (!id) {
      logger.inspectWarn(
        "[getProductsByTypeId] No se ha proporcionado el parámetro 'id' o no es válido"
      );
      throw new Error("El ID del tipo es requerido y debe ser válido");
    }

    const { data: response, status } = await api.get(`/types/${id}/products`);
    logger.debug("[getProductsByTypeId] Respuesta obtenida", response);

    if (status !== 200) {
      logger.inspectWarn("[getProductsByTypeId] Código de estado inesperado", {
        status,
        typeId: id,
      });
      throw new Error(`Código de estado HTTP inesperado: ${status}`);
    }

    const { success, message, data: products } = response;

    if (!success) {
      logger.inspectWarn("[getProductsByTypeId] la consulta no fue exitosa", {
        message,
      });
      throw new Error(
        message || "Error desconocido en la respuesta del servidor"
      );
    }

    if (!Array.isArray(products)) {
      logger.error(
        "[getProductsByTypeId] Formato de datos inválido - se esperaba un array",
        {
          tipoRecibido: typeof products,
          typeId: id,
        }
      );
      throw new Error("El servidor devolvió datos en formato inválido");
    }

    logger.success(
      "[getProductsByTypeId] Los productos fueron obtenidos de forma exitosa",
      {
        typeId: id,
        cantidadProductos: products?.length || 0,
      }
    );

    return products;
  } catch (error) {
    logger.error(
      "[getProductsByTypeId] Ocurrió un error al consultar los productos por tipo",
      error,
      { typeId: id }
    );
    throw error;
  }
};

export const sendEmail = async (email) => {
  logger.info("[sendEmail] Enviando correo de suscripción...", { email });
  try {
    const validation = validateEmail(email);

    if (!validation.isValid) {
      logger.inspectWarn("[sendEmail] Email inválido", {
        email,
        message: validation.message,
      });
      return {
        success: false,
        message: validation.message,
        type: "warn",
      };
    }

    const result = await api
      .post("/email", { toEmail: validation.email })
      .catch((err) => {
        if (err.response) return err.response;
        throw err;
      });

    logger.debug("[sendEmail] Respuesta obtenida de api", result, {
      email: validation.email,
    });

    const response = getEmailResponseMessage(result.status);

    if (response.success) {
      logger.success("[sendEmail] Suscripción exitosa", {
        email: validation.email,
        status: result.status,
      });
    } else if (response.isError) {
      logger.error("[sendEmail] Error del servidor", {
        email: validation.email,
        status: result.status,
        message: result.data?.error,
      });
    } else {
      logger.inspectWarn("[sendEmail] Respuesta no exitosa", {
        email: validation.email,
        status: result.status,
        message: response.message,
      });
    }

    return response;
  } catch (error) {
    logger.error(
      "[sendEmail] Ocurrio un error al realizar el envio del correo de suscripción ",
      error,
      {
        email,
      }
    );
    return {
      success: false,
      message:
        "No se pudo conectar con el servidor. Intenta más tarde o verifica tu conexión.",
      type: "error",
      isError: true,
    };
  }
};
