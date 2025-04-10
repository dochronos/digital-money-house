"use client";

import { useRouter } from "next/navigation";
import { Menu, Bell } from "lucide-react";
import Image from "next/image";

const HeaderLayout = () => {
  const router = useRouter();

  const goToProfile = () => {
    router.push("/dashboard/profile");
  };

  return (
    <header
      className="w-full px-4 md:px-10 py-4 bg-dark2 flex items-center justify-between border-b border-dark3"
      role="banner"
    >
      {/* Logo o nombre de la app */}
      <div className="flex items-center gap-2">
        <Menu className="h-6 w-6 text-white md:hidden" aria-hidden />
        <h1 className="text-lg font-bold text-white hidden md:block">
          Digital Money
        </h1>
      </div>

      {/* Sección derecha: íconos / avatar */}
      <div className="flex items-center gap-4">
        <Bell
          className="h-5 w-5 text-white hover:text-green transition"
          aria-label="Notificaciones"
        />

        <button
          onClick={goToProfile}
          className="w-8 h-8 rounded-full bg-green overflow-hidden"
          aria-label="Ir a perfil de usuario"
        >
          <Image
            src="/avatar-placeholder.png"
            alt="Avatar del usuario"
            width={32}
            height={32}
            className="rounded-full object-cover"
          />
        </button>
      </div>
    </header>
  );
};

export default HeaderLayout;
