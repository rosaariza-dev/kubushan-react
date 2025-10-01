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
    if (import.meta.env.DEV) console.warn("⚠️", ...args);
  },
  error: (...args) => {
    if (import.meta.env.DEV) console.error("🚨", ...args);
  },
  debug: (...args) => {
    if (import.meta.env.DEV) console.debug("🐛", ...args);
  },
};
