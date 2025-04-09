"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Cookies from "js-cookie";

import InputText from "@/components/form/InputText";
import SubmitButton from "@/components/form/SubmitButton";

import { RegisterScheme } from "@/schemes/register.scheme";
import { newUser } from "@/services/user.service";
import { RegisterBodyType, RegisterFormType } from "@/types/user.types";

const RegisterForm = () => {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);

  const methods = useForm({
    resolver: yupResolver(RegisterScheme),
  });

  const {
    handleSubmit,
    formState: { errors },
    reset,
  } = methods;

  const onSubmitRegister = async (data: RegisterFormType) => {
    try {
      setServerError(null);
      const requestBody: RegisterBodyType = {
        ...data,
        dni: Number(data.dni),
      };

      const response = await newUser(requestBody);
      reset();

      if (response) {
        Cookies.set("isRegisterSuccess", "true", { expires: 1 / 24 });
        router.push("/register/success");
      }
    } catch (error) {
      if (error instanceof Error) {
        setServerError(error.message);
      } else {
        setServerError("Error desconocido en el registro");
      }
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className="w-full flex flex-col"
        onSubmit={handleSubmit(onSubmitRegister)}
      >
        <div className="grid md:grid-cols-2 gap-5 md:gap-x-10 md:gap-y-8">
          <InputText
            type="text"
            fieldName="firstname"
            errorText={errors.firstname?.message}
            placeholder="Nombre*"
            inputClassName="text-black/50 font-normal shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] border border-select1"
          />
          <InputText
            type="text"
            fieldName="lastname"
            errorText={errors.lastname?.message}
            placeholder="Apellido*"
            inputClassName="text-black/50 font-normal shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] border border-select1"
          />
          <InputText
            type="text"
            fieldName="dni"
            errorText={errors.dni?.message}
            placeholder="DNI*"
            inputClassName="text-black/50 font-normal shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] border border-select1"
          />
          <InputText
            type="text"
            fieldName="email"
            errorText={errors.email?.message}
            placeholder="Correo electrónico*"
            inputClassName="text-black/50 font-normal shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] border border-select1"
          />
        </div>

        <div className="text-start mb-3 mt-5">
          <p className="text-xs md:tracking-tight text-gray1 md:text-sm xl:text-[14.6px]">
            Usa entre 6 y 20 caracteres (debe contener al menos un carácter
            especial, una mayúscula y un número).
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-x-10 md:gap-y-8">
          <InputText
            type="password"
            fieldName="password"
            errorText={errors.password?.message}
            placeholder="Contraseña*"
            inputClassName="text-black/50 font-normal shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] border border-select1"
          />
          <InputText
            type="password"
            fieldName="confirmPassword"
            errorText={errors.confirmPassword?.message}
            placeholder="Confirmar contraseña*"
            inputClassName="text-black/50 font-normal shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] border border-select1"
          />
          <InputText
            type="text"
            fieldName="phone"
            errorText={errors.phone?.message}
            placeholder="Teléfono*"
            inputClassName="text-black/50 font-normal shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] border border-select1"
          />
          <SubmitButton
            className="w-full mt-2 md:mt-0 bg-green focus:outline-2 focus:outline-black"
            text="Crear cuenta"
          />
        </div>

        {serverError && (
          <p className="w-full font-semibold flex flex-col text-sm italic text-error1 text-center mt-6">
            {serverError}
          </p>
        )}
      </form>
    </FormProvider>
  );
};

export default RegisterForm;
