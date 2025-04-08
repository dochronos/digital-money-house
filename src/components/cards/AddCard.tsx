"use client";

import React, { useState } from "react";
import ImageCard from "./ImageCard";
import InputRadius from "@/components/form/InputRadius";
import SubmitButton from "@/components/form/SubmitButton";

type AddCardProps = {
  accountId: number;
  cardsList: any[]; // Podés tiparlo mejor si querés
};

const AddCard = ({ accountId, cardsList }: AddCardProps) => {
  const [formData, setFormData] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enviando tarjeta:", formData);
    // Acá va la lógica para agregar la tarjeta usando un service
  };

  return (
    <section className="w-full justify-start items-start p-6 md:py-10 md:px-8 flex flex-col rounded-[10px] bg-white text-dark1 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] xl:p-12">
      <h2 className="text-xl font-bold mb-6">Agregar nueva tarjeta</h2>

      <div className="mb-6">
        <ImageCard
          number={formData.number}
          name={formData.name}
          expiry={formData.expiry}
          cvc={formData.cvc}
        />
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
        <InputRadius
          label="Número de tarjeta"
          name="number"
          value={formData.number}
          onChange={handleChange}
          placeholder="Ej: 4556 3654 8796 5698"
        />
        <InputRadius
          label="Nombre del titular"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Ej: MELISA LUCIA FERRARIS"
        />
        <div className="flex flex-col md:flex-row gap-4">
          <InputRadius
            label="Expiración"
            name="expiry"
            value={formData.expiry}
            onChange={handleChange}
            placeholder="MMYY"
          />
          <InputRadius
            label="CVC"
            name="cvc"
            value={formData.cvc}
            onChange={handleChange}
            placeholder="Ej: 123"
          />
        </div>

        <div className="mt-6">
          <SubmitButton text="Guardar tarjeta" />
        </div>
      </form>
    </section>
  );
};

export default AddCard;

