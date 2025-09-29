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
