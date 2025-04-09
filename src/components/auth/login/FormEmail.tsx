"use client";

import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { EmailScheme } from "@/schemes/loginScheme";
import InputText from "@/components/ui/form/InputText";
import SubmitButton from "@/components/ui/form/SubmitButton";
import { useRouter } from "next/navigation";
import { useEmail } from "@/context/emailContext";
import { EMailType } from "@/types/auth.types";
import Cookies from "js-cookie";

export const FormEmail = () => {
  const isRegisterSuccess = Cookies.get("isRegisterSuccess");
  const router = useRouter();
  const { setEmail } = useEmail();

  const methods = useForm<EMailType>({
    resolver: yupResolver(EmailScheme),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmitEmail = (data: EMailType) => {
    setEmail(data.email);
    localStorage.setItem("email", data.email);
    router.push("/(auth)/login/password");
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmitEmail)}
        className="w-full flex flex-col gap-5"
      >
        <InputText
          type="email"
          placeholder="Correo electrónico"
          fieldName="email"
          errorText={errors?.email?.message}
        />

        <SubmitButton
          text="Continuar"
          className="w-full bg-green text-white font-semibold"
        />

        {!isRegisterSuccess && (
          <Link
            href="/(auth)/register"
            className="w-full p-3 font-bold text-center text-black bg-button1 rounded-[10px]"
          >
            Crear cuenta
          </Link>
        )}
      </form>
    </FormProvider>
  );
};
