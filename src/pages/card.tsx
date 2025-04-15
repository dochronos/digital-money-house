import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function CardPage() {
  const card = JSON.parse(localStorage.getItem("card") || "{}");

  if (!card) {
    return <p className="text-center text-gray-400">No hay tarjeta guardada.</p>;
  }

  return (
    <div className="bg-dark1 text-white p-6 rounded-md shadow-md">
    <p className="text-xl font-bold">{card.card_number}</p>
    <p>{card.cardholder_name}</p>

      <Link href="/">
      <Button className="border border-gray-300 text-gray-600 hover:bg-gray-100 mt-6">
        ← Volver
      </Button>
      </Link>
    </div>
  );
}
