"use client";

import React from "react";
import Link from "next/link";
import CheckIcon from "@/components/common/Icons/CheckIcon";

const RegisterSuccess = () => {
  return (
    <main className="w-full flex flex-col items-center gap-6 md:gap-16">
      <div className="flex flex-col gap-7 items-center w-80 md:w-full max-w-xl text-center">
        <h1 className="text-4xl md:text-[64px] font-semibold md:leading-[90px]">
          Registro Exitoso
        </h1>
        <CheckIcon className="fill-green" />
        <p className="text-sm md:text-base px-8 md:px-12">
          Hemos enviado un correo de confirmación para validar tu email, por
          favor revisalo para iniciar sesión.
        </p>
      </div>

      <Link
        href="/login"
        className="w-72 md:w-[360px] text-base p-3 md:p-5 bg-green rounded-[10px] font-bold text-center text-black"
      >
        Continuar
      </Link>
    </main>
  );
};

export default RegisterSuccess;
