const BASE_URL = "https://digitalmoney.digitalhouse.com/api";

/**
 * Inicia sesión del usuario
 * @param data - Objeto con email y contraseña
 */
export const login = async (data: { email: string; password: string }) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Error durante el login");
    }

    return await response.json();
  } catch (error: any) {
    throw new Error(error?.message || "Error desconocido en login");
  }
};

/**
 * Cierra sesión del usuario
 */
export const logout = async () => {
  try {
    const response = await fetch(`${BASE_URL}/logout`, {
      method: "POST",
      credentials: "include", // Para enviar cookies si el backend lo requiere
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Error durante el logout");
    }

    return await response.json();
  } catch (error: any) {
    throw new Error(error?.message || "Error desconocido en logout");
  }
};
