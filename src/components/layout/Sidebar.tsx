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
    if (typeof window !== "undefined") {
      localStorage.removeItem("authToken");
    }
    Cookies.remove("authToken");
    router.push("/");
  };

  return (
    <nav
      role="navigation"
      aria-label="Menú lateral"
      className="w-full md:w-64 p-6 bg-green text-dark1 flex flex-col gap-4 min-h-screen"
    >
      <div className="flex flex-col gap-3">
        {MENU_ITEMS.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              aria-current={isActive ? "page" : undefined}
              className={clsx(
                "text-lg transition-colors duration-150 hover:text-black",
                isActive ? "font-bold text-black" : "font-medium"
              )}
            >
              {item.name}
            </Link>
          );
        })}
      </div>

      <div className="mt-auto pt-6 border-t border-dark1/30">
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
