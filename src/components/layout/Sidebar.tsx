"use client";

import Cookies from "js-cookie";
import Link from "next/link";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";

const MENU_ITEMS = [
  { name: "Inicio", path: "/dashboard" },
  { name: "Actividad", path: "/dashboard/activity" },
  { name: "Tu perfil", path: "/dashboard/profile" },
  { name: "Cargar dinero", path: "/dashboard/add-money" },
  { name: "Pagar servicios", path: "/dashboard/pay-services" },
  { name: "Tarjetas", path: "/dashboard/cards" },
];

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const logoutHandle = () => {
    localStorage.removeItem("authToken");
    Cookies.remove("authToken");
    router.push("/");
  };

  return (
    <nav className="w-full md:w-64 p-6 bg-green text-dark1 flex flex-col gap-4 min-h-screen">
      <div className="flex flex-col gap-3">
        {MENU_ITEMS.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={clsx(
              "text-lg transition-colors duration-150 hover:text-black",
              {
                "font-bold text-black": pathname === item.path,
                "font-medium": pathname !== item.path,
              }
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="mt-auto pt-6 border-t border-dark1/20">
        <button
          onClick={logoutHandle}
          className="text-lg font-medium text-dark1/60 hover:text-black transition-colors duration-150"
          aria-label="Cerrar sesión"
        >
          Cerrar sesión
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;

