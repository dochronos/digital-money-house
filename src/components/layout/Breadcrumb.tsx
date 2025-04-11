"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ArrowIcon from "@/components/common/Icons/ArrowIcon";
import clsx from "clsx";

const routeLabels: Record<string, string> = {
  "/dashboard": "Inicio",
  "/dashboard/activity": "Actividad",
  "/dashboard/profile": "Tu perfil",
  "/dashboard/add-money": "Cargar dinero",
  "/dashboard/add-money/bank": "Cargar dinero con banco",
  "/dashboard/add-money/card": "Cargar dinero con tarjeta",
  "/dashboard/pay-services": "Pagar servicios",
  "/dashboard/cards": "Tarjetas",
};

const Breadcrumb = () => {
  const pathname = usePathname();

  const label = routeLabels[pathname];

  if (!label) return null;

  return (
    <div className="w-full font-semibold flex items-center gap-2 text-dark1 text-base">
      <ArrowIcon className="fill-black/70 w-4" />
      <Link href={pathname} className="underline decoration-1">
        {label}
      </Link>
    </div>
  );
};

export default Breadcrumb;
