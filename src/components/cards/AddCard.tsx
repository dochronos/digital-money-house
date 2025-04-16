"use client";

import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import InputRadius from "@/components/form/InputRadius";
import SubmitButton from "@/components/form/SubmitButton";
import { newCard, getAllCards } from "@/services/cards.service";
import { CardType } from "@/types/card.types";
import CardItem from "./CardItem";
import { getTokenFromCookie } from "@/utils/getTokenFromCookie";

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
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const [token, setToken] = useState("");

  // Obtener token en cliente
  useEffect(() => {
    const fetchToken = async () => {
      const t = await getTokenFromCookie(); // Usar await correctamente dentro de una función async
      setToken(t);
    };

    fetchToken(); // Llamar a la función async
  }, []);

  const fetchCards = async () => {
    if (!token) return;

    try {
      setFetchingCards(true);
      const fetched = await getAllCards(accountId, token);
      setCards(fetched);
    } catch (err) {
      console.error("Error al obtener tarjetas:", err);
    } finally {
      setFetchingCards(false);
    }
  };

  useEffect(() => {
    if (token) fetchCards();
  }, [accountId, token]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setLoading(true);

    const { number, expiry, cvc, name } = formData;

    if (!number || !expiry || !cvc || !name) {
      setMessage({ type: "error", text: "Todos los campos son requeridos." });
      setLoading(false);
      return;
    }

    try {
      await newCard(accountId, token, formData);
      setMessage({ type: "success", text: "Tarjeta creada exitosamente." });
      setFormData({ number: "", expiry: "", cvc: "", name: "" });
      fetchCards();
    } catch (err: any) {
      setMessage({
        type: "error",
        text: err.message || "Error al crear la tarjeta.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full p-6 md:py-10 md:px-8 flex flex-col rounded-[10px] bg-white text-dark1 shadow-md xl:p-12">
      <h2 className="text-xl font-bold mb-6">Agregar nueva tarjeta</h2>

      <ImageCard {...formData} />

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full mt-6"
      >
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

        {message && (
          <p
            className={`text-sm ${
              message.type === "error" ? "text-red-500" : "text-green-600"
            }`}
          >
            {message.text}
          </p>
        )}

        <div className="mt-6">
          <SubmitButton text={loading ? "Guardando..." : "Guardar tarjeta"} />
        </div>
      </form>

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