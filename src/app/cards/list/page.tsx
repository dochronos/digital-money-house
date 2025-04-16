"use client";

import React, { useEffect, useState } from "react";
import UserCards from "@/components/cards/UserCards";
import { getAllCards } from "@/services/cards.service";
import { CardType } from "@/types/card.types";
import Loader from "@/components/common/Loader";

const CardsListPage = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [loading, setLoading] = useState(true);

  const accountId = 1; // 🧪 Reemplazar con lógica real
  const token = "Bearer tu-token-aqui"; // 🔐 Reemplazar con lógica real

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
    return (
      <div className="flex justify-center items-center h-48">
        <Loader />
      </div>
    );
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
