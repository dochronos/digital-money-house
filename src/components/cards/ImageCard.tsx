"use client";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

interface ImageCardProps {
  number: string;
  expiry: string;
  cvc: string;
  name: string;
}

const ImageCard = ({ number = "•••• •••• •••• ••••", expiry = "••/••", cvc = "•••", name = "NOMBRE Y APELLIDO" }: ImageCardProps) => {
  return (
    <div className="shadow-md rounded-[14.5px] overflow-hidden border border-gray-200" aria-label="Tarjeta de crédito">
      <Cards
        number={number}
        expiry={expiry}
        cvc={cvc}
        name={name}
      />
    </div>
  );
};

export default ImageCard;
