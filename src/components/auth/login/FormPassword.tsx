"use client";

import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PasswordScheme } from "@/schemes/loginScheme";
import InputText from "@/components/ui/form/InputText";
import SubmitButton from "@/components/ui/form/SubmitButton";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEmail } from "@/context/emailContext";
import { useToken } from "@/context/tokenContext";
import { PasswordType } from "@/types/auth.types";
import { login } from "@/services/auth.service";
import Cookies from "js-cookie";
import Link from "next/link";

export const FormPassword = () => {
  const { email } = useEmail();
  const { setToken } = useToken();
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);

  const methods = useForm<PasswordType>({
    resolver: yupResolver(PasswordScheme),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data: PasswordType) => {
    setServerError(null);
    const body = { email, password: data.password };

    try {
      const loginResponse = await login(body);

      if (loginResponse?.error) {
        setServerError("Credenciales incorrectas. Intente nuevamente");
        return;
      }

      if (loginResponse?.token) {
        Cookies.set("authToken", loginResponse.token, { expires: 1 / 24 });
        localStorage.setItem("authToken", loginResponse.token);
        setToken(loginResponse.token);
        router.push("/dashboard");
      }
    } catch (error) {
      setServerError("Ha ocurrido un error. Intenta iniciar nuevamente.");
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className="w-full flex flex-col gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Email hidden field */}
        <InputText
          type="email"
          fieldName="email"
          defaultValue={email}
          style={{ display: "none" }}
        />

        {/* Password input */}
        <InputText
          type="password"
          placeholder="Contraseña"
          fieldName="password"
          errorText={errors?.password?.message}
        />

        <SubmitButton
          text="Continuar"
          className="w-full bg-green text-white font-semibold"
        />

        {serverError && (
          <Link href="/(auth)/login">
            <p className="text-sm italic text-error1 text-center pt-2">
              {serverError}
            </p>
          </Link>
        )}
      </form>
    </FormProvider>
  );
};
