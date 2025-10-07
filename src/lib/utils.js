import { sanitizeError } from "@/utils/errorHelper";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const formatPrice = (price) => {
  if (!price && price !== 0) return "$0";

  return `$${Number(price).toLocaleString("es-CO")}`;
};

export const logger = {
  info: (...args) => {
    if (import.meta.env.DEV) console.log("ℹ️", ...args);
  },
  success: (...args) => {
    if (import.meta.env.DEV) console.log("✅", ...args);
  },
  warn: (...args) => {
    console.warn("⚠️", ...args);
  },
  error: (...args) => {
    const sanitized = args.map((arg) =>
      arg instanceof Error ? sanitizeError(arg) : arg
    );

    if (!import.meta.env.DEV) {
      // En producción: solo mensaje + error sanitizado (sin metadata)
      console.error("🚨", ...sanitized.slice(0, 2));
    } else {
      // En desarrollo: todo (mensaje + error + metadata)
      console.error("🚨", ...sanitized);
    }
  },
  debug: (...args) => {
    if (import.meta.env.DEV) console.debug("🐛", ...args);
  },

  inspectWarn: (...args) => {
    if (import.meta.env.DEV) console.warn("⚠️ [DEBUG]", ...args);
  },
};
