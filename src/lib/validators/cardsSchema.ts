import * as yup from "yup";

export const cardFormSchema = yup.object({
  cardNumber: yup
    .string()
    .required("El número de tarjeta es obligatorio")
    .matches(/^[0-9]{16}$/, "Debe contener 16 dígitos"),

  cardHolder: yup
    .string()
    .required("El titular es obligatorio")
    .min(4, "Debe tener al menos 4 caracteres"),

  expiryDate: yup
    .string()
    .required("La fecha de vencimiento es obligatoria")
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Formato inválido. Ej: 12/25"),

  cvv: yup
    .string()
    .required("El CVV es obligatorio")
    .matches(/^[0-9]{3,4}$/, "Debe contener 3 o 4 dígitos"),
});

export type CardFormSchema = yup.InferType<typeof cardFormSchema>;
