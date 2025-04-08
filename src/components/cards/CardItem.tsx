import { CardType } from "@/types/card.types";

type CardItemProps = {
  card: CardType;
};

const CardItem = ({ card }: CardItemProps) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white w-full text-sm">
      <p className="font-semibold">•••• •••• •••• {String(card.number_id).slice(-4)}</p>
      <p className="text-gray-600">{card.first_last_name}</p>
      <p className="text-gray-500">Vence: {card.expiration_date}</p>
    </div>
  );
};

export default CardItem;
