import { CardType } from "@/types/card.types";
import { Trash2 } from "lucide-react";

type CardItemProps = {
  card: CardType;
  showRadio?: boolean;
  selected?: boolean;
  onSelect?: () => void;
  onDelete?: () => void;
};

const CardItem = ({
  card,
  showRadio = false,
  selected = false,
  onSelect,
  onDelete,
}: CardItemProps) => {
  const cardNumberLastFour = String(card.number_id).slice(-4);
  
  return (
    <li className="w-full flex justify-between items-center border-b border-gray1 md:border-dark1 py-3 md:py-4">
      <div className="flex items-center gap-2.5 md:gap-4">
        <div className="w-6 h-6 md:w-8 md:h-8 bg-green rounded-full" />
        <div className="flex flex-col">
          <p id={`card-${card.number_id}`} className="text-sm md:text-base text-dark1 font-semibold">
            Terminada en {cardNumberLastFour}
          </p>
          <p className="text-xs text-gray-500">{card.first_last_name}</p>
          <p className="text-xs text-gray-400">
            Vence: {card.expiration_date}
          </p>
        </div>
      </div>

      {showRadio ? (
        <div className="flex items-center">
          <input
            type="radio"
            name="selectedCard"
            value={card.number_id}
            checked={selected}
            onChange={onSelect}
            className="w-4 h-4 cursor-pointer appearance-none border-[1.6px] border-dark1 rounded-full border-opacity-50 checked:bg-green checked:border-2"
            aria-labelledby={`card-${card.number_id}`}
          />
        </div>
      ) : (
        <button
          onClick={onDelete}
          className="text-red-500 hover:text-red-700"
          title="Eliminar tarjeta"
          aria-label="Eliminar tarjeta"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      )}
    </li>
  );
};

export default CardItem;
