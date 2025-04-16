import * as yup from "yup";

// Regex para validar email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Regex para validar contraseñas seguras
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,20}$/;

/**
 * Esquema para validar el email
 */
export const EmailScheme = yup.object({
  email: yup
    .string()
    .required("Por favor, complete su email.")
    .matches(emailRegex, "Correo inválido."),
});

/**
 * Esquema para validar la contraseña
 */
export const PasswordScheme = yup.object({
  password: yup
    .string()
    .required("Por favor, complete su contraseña.")
    .matches(passwordRegex, "Contraseña inválida."),
});

/**
 * Esquema combinado para validar login
 */
const LoginScheme = yup.object({
  email: yup
    .string()
    .required("Por favor, complete su email.")
    .matches(emailRegex, "Correo inválido."),
  password: yup
    .string()
    .required("Por favor, complete su contraseña.")
    .matches(passwordRegex, "Contraseña inválida."),
});

export default LoginScheme;