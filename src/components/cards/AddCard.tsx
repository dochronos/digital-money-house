"use client";

import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import InputRadius from "@/components/form/InputRadius";
import SubmitButton from "@/components/form/SubmitButton";
import { newCard, getAllCards } from "@/components/services/cards.service";
import { CardType } from "@/types/card.types";
import CardItem from "./CardItem";

type AddCardProps = {
  accountId: number;
};

const AddCard = ({ accountId }: AddCardProps) => {
  const [formData, setFormData] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
  });

  const [cards, setCards] = useState<CardType[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetchingCards, setFetchingCards] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const token = "Bearer tu-token-aqui"; // 🔐 Reemplazar luego por auth real

  const fetchCards = async () => {
    try {
      setFetchingCards(true);
      const fetchedCards = await getAllCards(accountId, token);
      setCards(fetchedCards);
    } catch (err) {
      console.error("Error cargando tarjetas:", err);
    } finally {
      setFetchingCards(false);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      await newCard(accountId, token, formData);
      setSuccess("Tarjeta creada exitosamente.");
      setFormData({ number: "", expiry: "", cvc: "", name: "" });
      fetchCards(); // 🔁 Refrescar la lista
    } catch (err: any) {
      setError(err.message || "Error al crear la tarjeta.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full p-6 md:py-10 md:px-8 flex flex-col rounded-[10px] bg-white text-dark1 shadow-md xl:p-12">
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
          placeholder="Ej: JUAN PEREZ"
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

        {error && <p className="text-red-500 mt-2">{error}</p>}
        {success && <p className="text-green-600 mt-2">{success}</p>}

        <div className="mt-6">
          <SubmitButton text={loading ? "Guardando..." : "Guardar tarjeta"} />
        </div>
      </form>

      {/* 🔽 Lista de tarjetas */}
      <div className="mt-10 w-full">
        <h3 className="text-lg font-semibold mb-4">Tus tarjetas</h3>
        {fetchingCards ? (
          <p className="text-gray-500">Cargando tarjetas...</p>
        ) : cards.length === 0 ? (
          <p className="text-gray-500">No tenés tarjetas agregadas aún.</p>
        ) : (
          <ul className="flex flex-col gap-4">
            {cards.map((card) => (
              <CardItem key={card.id} card={card} />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default AddCard;
