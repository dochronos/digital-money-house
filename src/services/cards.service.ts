import { CardType } from "@/types/card.types";

const BASE_URL = "https://digitalmoney.digitalhouse.com/api";

// GET - Obtener todas las tarjetas
export const getAllCards = async (
  accountId: number,
  token: string
): Promise<CardType[]> => {
  try {
    if (!token || !accountId) {
      throw new Error("Token o accountId no válidos");
    }

    const response = await fetch(`${BASE_URL}/accounts/${accountId}/cards`, {
      method: "GET",
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorDetails = await response.json();
      throw new Error(`Error ${response.status}: ${errorDetails.message}`);
    }

    const cards = await response.json();
    return Array.isArray(cards) ? cards as CardType[] : [];
  } catch (error: any) {
    console.error("Error fetching cards:", error.message);
    return [];
  }
};

// GET - Obtener tarjeta por ID
export const getCardId = async (
  accountId: number,
  cardId: number,
  token: string
): Promise<CardType> => {
  try {
    const response = await fetch(
      `${BASE_URL}/accounts/${accountId}/cards/${cardId}`,
      {
        method: "GET",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `Error ${response.status}: ${errorData.message || "No se pudo obtener la tarjeta"}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Error al obtener tarjeta:", error);
    throw error;
  }
};

// POST - Crear nueva tarjeta
export const newCard = async (
  accountId: number,
  token: string,
  cardData: {
    number: string;
    expiry: string;
    cvc: string;
    name?: string;
  }
): Promise<CardType> => {
  try {
    if (!token || !accountId) {
      throw new Error("Token o accountId no válidos");
    }

    const body = {
      ...cardData,
      name: cardData.name || "Juan Perez", // Nombre por defecto
    };

    const response = await fetch(`${BASE_URL}/accounts/${accountId}/cards`, {
      method: "POST",
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error ${response.status}: ${errorData.message}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error creando tarjeta:", error);
    throw error;
  }
};

// DELETE - Eliminar tarjeta por ID
export const deleteCardId = async (
  accountId: number,
  cardId: number,
  token: string
): Promise<boolean> => {
  try {
    if (!token || !accountId) {
      throw new Error("Token o accountId no válidos");
    }

    const response = await fetch(
      `${BASE_URL}/accounts/${accountId}/cards/${cardId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `Error ${response.status}: ${errorData.message || "No se pudo eliminar la tarjeta"}`
      );
    }

    return true;
  } catch (error) {
    console.error("Error eliminando tarjeta:", error);
    throw error;
  }
};
