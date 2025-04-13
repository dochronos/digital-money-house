"use client";

import RegisterForm from "@/components/auth/register/RegisterForm";
import Navbar from "@/components/layout/Navbar";

const buttonsLinks = [
  { href: "/login", text: "Iniciar sesión", solid: true, outline: false },
];

export default function RegisterPage() {
  return (
    <>
      <Navbar
        logoLink="/"
        logoClassName="fill-dark1"
        navbarClassName="bg-green"
        buttonsLinks={buttonsLinks}
      />

      <main className="w-full flex flex-col items-center justify-center gap-8 p-10 md:p-14 xl:w-1/2 xl:mx-auto xl:px-0 relative grow">
        {/* Título */}
        <h1 className="w-full text-center text-xl font-bold md:p-5 xl:pb-0">
          Crear Cuenta
        </h1>

        {/* Formulario de registro */}
        <RegisterForm />
      </main>
    </>
  );
}

