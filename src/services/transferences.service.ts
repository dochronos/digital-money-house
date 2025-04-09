import { httpGet, httpPost } from "./common/http";

const BASE_URL = "/transferences"; // Considerando que el `API_URL` ya está definido en `http.ts`

/**
 * Crea una nueva transferencia entre cuentas.
 * @param data - Datos de la transferencia.
 * @param token - Token de autenticación.
 */
export const newTransference = async (data: object, token: string) => {
  return httpPost(`${BASE_URL}/new`, data, {
    headers: { Authorization: token },
  });
};

/**
 * Realiza un depósito en la cuenta del usuario.
 * @param data - Datos del depósito.
 * @param token - Token de autenticación.
 */
export const newDeposit = async (data: object, token: string) => {
  return httpPost(`${BASE_URL}/deposit`, data, {
    headers: { Authorization: token },
  });
};

/**
 * Obtiene todas las transferencias realizadas.
 * @param token - Token de autenticación.
 */
export const getAllTransferences = async (token: string) => {
  return httpGet(`${BASE_URL}/all`, token);
};
