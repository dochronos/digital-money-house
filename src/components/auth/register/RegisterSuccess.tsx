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
import { useFormErrors } from "@/hooks/useFormErrors"; // Custom hook for error handling

// Custom hook for error handling
const useFormErrors = (errors: any) => {
  const [errorMessages, setErrorMessages] = useState<string | null>(null);

  const handleErrorMessages = (fieldErrors: any) => {
    let messages = "";
    Object.keys(fieldErrors).forEach((key) => {
      if (fieldErrors[key]?.message) {
        messages += `${key}: ${fieldErrors[key].message}\n`;
      }
    });
    setErrorMessages(messages);
  };

  return { errorMessages, handleErrorMessages };
};

const RegisterForm = () => {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);

  const methods = useForm<RegisterFormType>({
    resolver: yupResolver(RegisterScheme),
  });

  const { handleSubmit, formState: { errors }, reset } = methods;
  const { errorMessages, handleErrorMessages } = useFormErrors(errors);

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
      const message =
        error instanceof Error
          ? error.message
          : "Error desconocido en el registro";
      setServerError(message);
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
            inputClassName="input-field"
            aria-label="Nombre"
          />
          <InputText
            type="text"
            fieldName="lastname"
            errorText={errors.lastname?.message}
            placeholder="Apellido*"
            inputClassName="input-field"
            aria-label="Apellido"
          />
          <InputText
            type="text"
            fieldName="dni"
            errorText={errors.dni?.message}
            placeholder="DNI*"
            inputClassName="input-field"
            aria-label="
