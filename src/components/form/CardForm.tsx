"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CardFormSchema, cardFormSchema } from "@/lib/validators/cardsSchema";
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
    // Ruta eliminada: No redireccionamos
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 rounded-xl border border-gray-800 bg-secondary p-6 shadow-md"
    >
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

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="expiryDate">Vencimiento (MM/AA)</Label>
          <Input
            id="expiryDate"
            placeholder="MM/AA"
            {...register("expiryDate")}
          />
          <FormError message={errors.expiryDate?.message} />
        </div>

        <div>
          <Label htmlFor="cvv">CVV</Label>
          <Input
            id="cvv"
            type="password"
            placeholder="•••"
            {...register("cvv")}
          />
          <FormError message={errors.cvv?.message} />
        </div>
      </div>

      <Button type="submit" className="w-full">
        Guardar tarjeta
      </Button>
    </form>
  );
};
