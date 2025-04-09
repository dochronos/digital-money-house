"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "sonner";
import { deleteCardId } from "@/components/services/cards.service";
import { CardType } from "@/types/card.types";
import CardItem from "./CardItem";

type CardsListProps = {
  cardsList: CardType[];
  accountId: number;
  showAddMoneyPage: boolean;
  token: string;
  onSelect?: (id: number) => void; // ✅ NUEVA PROP OPCIONAL
};

const UserCards = ({
  cardsList,
  accountId,
  showAddMoneyPage,
  token,
  onSelect,
}: CardsListProps) => {
  const [cards, setCards] = useState<CardType[]>(cardsList);
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);
  const router = useRouter();

  const handleSelect = (cardId: number) => {
    setSelectedCardId(cardId);
    onSelect?.(cardId); // ✅ LLAMADA AL CALLBACK SI EXISTE
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
    <section className="w-full justify-start items-start p-6 md:py-10 md:px-8 flex flex-col rounded-[10px] bg-white text-dark1 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] xl:p-12">
      <h2 className="w-full text-base font-bold border-b border-gray1 md:border-dark1 pb-5 md:pb-4">
        Tus tarjetas
      </h2>

      <Toaster
        position="bottom-right"
        toastOptions={{
          className: "text-dark2 bg-green border-green",
        }}
      />

      {cards.length === 0 ? (
        <p className="text-gray-500 mt-4">No tienes tarjetas asociadas.</p>
      ) : (
        <ul className="w-full mt-4">
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

