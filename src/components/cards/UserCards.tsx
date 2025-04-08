"use client";
import InputRadius from "@/components/form/InputRadius";
import { deleteCardId } from "@/services/cards.service";
import { CardType } from "@/types/card.types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast, Toaster } from "sonner";

type CardsListProps = {
  cardsList: CardType[];
  accountId: number;
  showAddMoneyPage: boolean;
  token: string;
};

const UserCards = ({
  cardsList,
  accountId,
  showAddMoneyPage,
  token,
}: CardsListProps) => {
  const [cards, setCards] = useState(cardsList);
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);
  const router = useRouter();

  const handleSelect = (card_Id: number) => {
    setSelectedCardId(card_Id);
  };

  const handleDelete = async (card_id: number) => {
    try {
      await deleteCardId(accountId, card_id, token);
      setCards((prevCards) => prevCards.filter((card) => card.id !== card_id));
      toast.success("Tarjeta eliminada con éxito");
    } catch (error) {
      console.error("Error al eliminar la tarjeta:", error);
      toast.error("Error al eliminar la tarjeta");
    }
  };

  return (
    <section className="w-full justify-start items-start p-6 md:py-10 md:px-8 flex flex-col rounded-[10px] bg-white text-dark1 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]  xl:p-12">
      <h2 className="w-full text-base font-bold border-b border-gray1 md:border-dark1 pb-5 md:pb-4">
        Tus tarjetas
      </h2>

      {cards.length === 0 ? (
        <p className="text-gray-500 mt-4">No tienes tarjetas asociadas.</p>
      ) : (
        <>
          <Toaster
            position="bottom-right"
            toastOptions={{
              className: "text-dark2 bg-green border-green",
            }}
          />

          <ul className="w-full">
            {cards.map((card) => (
              <li
                key={card.id}
                className="w-full flex flex-row justify-between items-center border-b border-gray1 md:border-dark1 py-3 md:py-4"
              >
                <div className="flex flex-row gap-2.5 md:gap-4 items-center">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-green rounded-full" />
                  <h4 className="text-sm md:text-base text-dark1">
                    Terminada en {card.number_id.toString().slice(-4)}
                  </h4>
                </div>

                {!showAddMoneyPage ? (
                  <div className="flex flex-col items-end text-dark1">
                    <button onClick={() => handleDelete(card.id)}>
                      <span className="text-[12px] font-bold md:text-base">
                        Eliminar
                      </span>
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center relative">
                    <input
                      type="radio"
                      name="selectedCard"
                      value={card.number_id}
                      checked={selectedCardId === card.number_id}
                      onChange={() => handleSelect(card.number_id)}
                      className="w-4 h-4 cursor-pointer appearance-none border-[1.6px] border-dark1 checked:bg-green checked:border-2 
                        rounded-full border-opacity-50 relative"
                    />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default UserCards;