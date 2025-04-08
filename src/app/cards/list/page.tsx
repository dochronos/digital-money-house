"use client";

import React, { useEffect, useState } from "react";
import UserCards from "@/components/cards/UserCards";
import { getAllCards } from "@/components/services/cards.service";
import { CardType } from "@/types/card.types";

const CardsListPage = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [loading, setLoading] = useState(true);

  const accountId = 1; // 🧪 ID temporal para testing
  const token = "Bearer tu-token-aqui"; // 🔐 Reemplazar luego con auth real

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const fetchedCards = await getAllCards(accountId, token);
        setCards(fetchedCards);
      } catch (error) {
        console.error("Error al cargar tarjetas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  if (loading) {
    return <p className="p-6">Cargando tarjetas...</p>;
  }

  return (
    <div className="p-4 md:p-6">
      <UserCards
        cardsList={cards}
        accountId={accountId}
        showAddMoneyPage={false}
        token={token}
      />
    </div>
  );
};

export default CardsListPage;
