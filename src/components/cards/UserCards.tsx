"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { deleteCardId } from "@/components/services/cards.service";
import { CardType } from "@/types/card.types";
import CardItem from "./CardItem";

type UserCardsProps = {
  cardsList: CardType[];
  accountId: number;
  token: string;
  showAddMoneyPage?: boolean;
  onSelect?: (id: number) => void;
};

const UserCards = ({
  cardsList,
  accountId,
  token,
  showAddMoneyPage = false,
  onSelect,
}: UserCardsProps) => {
  const [cards, setCards] = useState<CardType[]>(cardsList);
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);
  const router = useRouter();

  const handleSelect = (cardId: number) => {
    setSelectedCardId(cardId);
    onSelect?.(cardId);
  };

  const handleDelete = async (cardId: number) => {
    try {
      await deleteCardId(accountId, cardId, token);
      setCards((prev) => prev.filter((card) => card.id !== cardId));
      toast.success("Tarjeta eliminada con éxito");
    } catch (error) {
      console.error("Error al eliminar tarjeta:", error);
      toast.error("Error al eliminar la tarjeta");
    }
  };

  return (
    <section className="w-full p-6 md:py-10 md:px-8 xl:p-12 flex flex-col rounded-[10px] bg-white text-dark1 shadow-md">
      <h2 className="text-base font-bold border-b border-gray1 md:border-dark1 pb-5 md:pb-4">
        Tus tarjetas
      </h2>

      {cards.length === 0 ? (
        <p className="text-gray-500 mt-4">Aún no tenés tarjetas asociadas.</p>
      ) : (
        <ul className="mt-4 space-y-3">
          {cards.map((card) => (
            <CardItem
              key={card.id}
              card={card}
              selected={selectedCardId === card.number_id}
              showRadio={showAddMoneyPage}
              onSelect={() => handleSelect(card.number_id)}
              onDelete={() => handleDelete(card.id)}
            />
          ))}
        </ul>
      )}
    </section>
  );
};

export default UserCards;

