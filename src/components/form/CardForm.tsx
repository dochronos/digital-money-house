"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CardFormSchema, cardFormSchema } from "@/lib/validators/cardSchema";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { FormError } from "@/components/ui/FormError";
import { useCardStore } from "@/store/cardStore";
import { toast } from "sonner";


export const CardForm = () => {
  const { setCard } = useCardStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CardFormSchema>({
    resolver: yupResolver(cardFormSchema),
  });

  const onSubmit = (data: CardFormSchema) => {
    setCard(data);
    toast.success("Tarjeta guardada correctamente");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="cardNumber">Número de tarjeta</Label>
        <Input id="cardNumber" {...register("cardNumber")} />
        <FormError message={errors.cardNumber?.message} />
      </div>

      <div>
        <Label htmlFor="cardHolder">Titular</Label>
        <Input id="cardHolder" {...register("cardHolder")} />
        <FormError message={errors.cardHolder?.message} />
      </div>

      <Button type="submit">Guardar tarjeta</Button>
    </form>
  );
};
