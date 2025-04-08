const BASE_URL = "https://digitalmoney.digitalhouse.com/api";

export const getAllCards = async (accountId: number, token: string) => {
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
    return Array.isArray(cards) ? cards : [];
  } catch (error: any) {
    console.error("Error fetching cards:", error.message);
    return [];
  }
};

export const getCardId = async (
  accountId: number,
  cardId: number,
  token: string
) => {
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

export const newCard = async (
  accountId: number,
  token: string,
  cardData: {
    number: string;
    expiry: string;
    cvc: string;
    name?: string;
  }
) => {
  try {
    if (!token || !accountId) {
      throw new Error("Token o accountId no válidos");
    }

    const body = {
      ...cardData,
      name: cardData.name || "Juan Perez",
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

export const deleteCardId = async (
  accountId: number,
  cardId: number,
  token: string
) => {
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
