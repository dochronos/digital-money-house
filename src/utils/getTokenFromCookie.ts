import { cookies } from "next/headers";

/**
 * Obtiene el token de autenticación desde las cookies del servidor.
 * @returns {string} El token si existe, o una cadena vacía.
 */
export async function getTokenFromCookie(): Promise<string> {
  const token = (await cookies()).get("authToken")?.value;
  return token || "";
}
