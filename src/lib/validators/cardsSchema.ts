import { z } from "zod";

export const cardFormSchema = z.object({
  cardNumber: z
    .string()
    .min(16, "El número debe tener al menos 16 dígitos")
    .regex(/^\d+$/, "Solo se permiten números"),
  cardHolder: z.string().min(3, "El nombre es obligatorio"),
  expiryDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Formato inválido. Usa MM/AA"),
  cvv: z
    .string()
    .regex(/^\d{3,4}$/, "El CVV debe tener 3 o 4 dígitos"),
});

export type CardFormSchema = z.infer<typeof cardFormSchema>;
