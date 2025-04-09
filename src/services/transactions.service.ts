import { httpGet } from "@/services/common/http";
import { TransactionType } from "@/types/transaction.types";

const BASE_PATH = "/accounts";

/**
 * Obtiene todas las transacciones de una cuenta específica.
 * @param token Token de autorización.
 * @param accountId ID de la cuenta.
 * @returns Lista de transacciones.
 */
export const getAllTransactions = async (
  token: string,
  accountId: string
): Promise<TransactionType[]> => {
  if (!token || !accountId) {
    throw new Error("Token o accountId inválido.");
  }

  try {
    const data = await httpGet(`${BASE_PATH}/${accountId}/activity`, token);
    return Array.isArray(data) ? (data as TransactionType[]) : [];
  } catch (error) {
    console.error("Error al obtener transacciones:", error);
    return [];
  }
};

/**
 * Placeholder para obtener transacción por ID.
 */
export const getTransactionById = async () => {
  // TODO: Implementar si es necesario en el futuro
};

/**
 * Placeholder para crear una nueva transacción.
 */
export const newTransaction = async () => {
  // TODO: Implementar si es necesario en el futuro
};
