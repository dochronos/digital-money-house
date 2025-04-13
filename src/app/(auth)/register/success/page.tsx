"use client";

import RegisterSuccess from "@/components/auth/register/RegisterSuccess";
import Navbar from "@/components/layout/Navbar";

export default function RegisterSuccessPage() {
  return (
    <>
      <Navbar
        logoLink="/"
        logoClassName="fill-dark1"
        navbarClassName="bg-green"
      />
      <main className="w-full flex flex-col items-center justify-center gap-8 p-10 md:w-2/5 xl:w-1/4 md:mx-auto md:px-0 relative grow">
        <RegisterSuccess />
      </main>
    </>
  );
}

