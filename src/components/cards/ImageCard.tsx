"use client";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

interface ImageCardProps {
  number: string;
  expiry: string;
  cvc: string;
  name: string;
}

export default function ImageCard({ number, expiry, cvc, name }: ImageCardProps) {
  const safeNumber = number || "•••• •••• •••• ••••";
  const safeExpiry = expiry || "••/••";
  const safeCvc = cvc || "•••";
  const safeName = name || "NOMBRE Y APELLIDO";

  return (
    <div className="shadow-md rounded-[14.5px] overflow-hidden border border-gray-200">
      <Cards
        number={safeNumber}
        expiry={safeExpiry}
        cvc={safeCvc}
        name={safeName}
      />
    </div>
  );
}
