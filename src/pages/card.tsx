import { Card } from "@/components/card/Card";
import { getCardFromStore } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function CardPage() {
  const card = getCardFromStore();

  if (!card) {
    return <p className="text-center text-gray-400">No hay tarjeta guardada.</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-6">
      <Card data={card} />

      <Link href="/">
        <Button variant="outline" className="mt-6">
          ← Volver
        </Button>
      </Link>
    </div>
  );
}
