import { logger } from "@/lib/utils";
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
    const { data: response } = await api.get("/types");

    logger.debug("[getTypes] Respuesta obtenida:", response);

    const { success, data: types } = response;

    if (!success) {
      logger.warn("[getTypes] La consulta no fue exitosa");
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
    const { data: response } = await api.get("/products");

    logger.debug("[getProducts] Respuesta obtenida", response);

    const { success, message, data: products } = response;

    if (!success) {
      logger.warn("[getProducts] La consulta no fue exitosa", { message });
    }

    logger.success("[getProducts] Productos consultados exitosamente", {
      cantidadProductos: products?.length || 0,
    });

    return products;
  } catch (error) {
    logger.error(
      "[getProducts] Ocurrió un error al consultar los productos",
      err
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
      logger.warn(
        "[getProductsByTypeId] No se ha proporcionado el parámetro 'id'"
      );
    }

    const { data: response } = await api.get(`/types/${id}/products`);
    logger.debug("[getProductsByTypeId] Respuesta obtenida", response);

    const { success, message, data: products } = response;

    if (!success) {
      logger.warn("[getProductsByTypeId] la consulta no fue exitosa", {
        message,
      });
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
      { typeId: id },
      error
    );
    throw error;
  }
};
