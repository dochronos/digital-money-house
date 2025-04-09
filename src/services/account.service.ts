import { httpGet } from "./common/http";

/**
 * Obtiene la cuenta del usuario a partir del token.
 * @param token - Token JWT del usuario.
 * @returns Datos de la cuenta del usuario.
 */
export const getAccount = async (token: string) => {
  return httpGet("/account", token);
};
