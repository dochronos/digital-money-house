import * as yup from "yup";

export const cardFormSchema = yup.object({
  cardNumber: yup
    .string()
    .required("El número es obligatorio")
    .matches(/^\d{16}$/, "El número debe tener exactamente 16 dígitos"),
  cardHolder: yup
    .string()
    .required("El nombre es obligatorio")
    .min(3, "El nombre debe tener al menos 3 caracteres"),
  expiryDate: yup
    .string()
    .required("La fecha es obligatoria")
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Formato inválido. Usa MM/AA"),
  cvv: yup
    .string()
    .required("El CVV es obligatorio")
    .matches(/^\d{3,4}$/, "El CVV debe tener 3 o 4 dígitos"),
});