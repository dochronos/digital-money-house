export type CardType = {
    id: number;
    accountId: number;
    numberId: number;
    name: string;
    cvc: number;
    expiry: string;
  };
  
  // Función para mapear la respuesta de la API al tipo `CardType`
  export const mapCardFromApi = (card: any): CardType => ({
    id: card.id,
    accountId: card.account_id,
    numberId: card.number_id,
    name: card.first_last_name,
    cvc: card.cod,
    expiry: card.expiration_date,
  });
  