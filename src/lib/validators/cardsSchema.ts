import * as yup from "yup";

export const cardFormSchema = yup.object({
  cardNumber: yup
    .string()
    .required("El número de tarjeta es obligatorio")
    .min(16, "Debe tener al menos 16 dígitos"),
  cardHolder: yup
    .string()
    .required("El titular de la tarjeta es obligatorio")
    .min(3, "Nombre demasiado corto"),
});

export type CardFormSchema = yup.InferType<typeof cardFormSchema>;
