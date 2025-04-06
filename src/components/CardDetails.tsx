"use client";

import { useCardStore } from "@/store/cardStore";

export const CardDetails = () => {
  const { card } = useCardStore();

  if (!card) {
    return <p className="text-center mt-10 text-red-500">No hay datos de tarjeta disponibles.</p>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Detalles de la Tarjeta</h2>
      <p><strong>Número:</strong> {card.cardNumber}</p>
      <p><strong>Titular:</strong> {card.cardHolder}</p>
    </div>
  );
};
