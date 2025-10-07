// utils/validators.js o donde tengas tus utilidades
export const validateEmail = (email) => {
  if (!email || typeof email !== "string") {
    return {
      isValid: false,
      message: "Por favor, ingresa un correo electrónico.",
    };
  }

  const normalizedEmail = email.trim().toLowerCase();

  if (!normalizedEmail) {
    return {
      isValid: false,
      message: "Por favor, ingresa un correo electrónico.",
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(normalizedEmail)) {
    return {
      isValid: false,
      message: "Por favor, ingresa un correo electrónico válido.",
    };
  }

  return {
    isValid: true,
    email: normalizedEmail,
  };
};
