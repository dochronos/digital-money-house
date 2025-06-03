"use client";

import React, { useEffect, useState } from "react";
import UserCards from "@/components/cards/UserCards";
import { getAllCards } from "@/services/cards.service";
import { CardType } from "@/types/card.types";
import Loader from "@/components/common/Loader";
import { useAuth } from "@/context/authContext";

const CardsListPage = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [loading, setLoading] = useState(true);

  const { token, accountId } = useAuth();

  useEffect(() => {
    const fetchCards = async () => {
      if (!accountId || !token) {
        console.warn("No hay token o accountId en contexto");
        setLoading(false);
        return;
      }

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
  }, [accountId, token]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-48">
        <Loader />
      </div>
    );
  }

  if (!accountId || !token) {
    return <p className="text-center text-red-500">Debe iniciar sesión para ver sus tarjetas.</p>;
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
