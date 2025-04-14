import Link from "next/link";
import ArrowIcon from "@/components/common/Icons/ArrowIcon";
import CardIcon from "@/components/common/Icons/CardIcon";
import UserIcon from "@/components/common/Icons/UserIcon";

export default function AddMoneyPage() {
  return (
    <section className="flex flex-col gap-5">
      {/* Transferencia bancaria */}
      <Link
        href="/dashboard/add-money/bank"
        className="bg-dark1 shadow-md flex justify-between px-6 py-9 md:px-10 min-h-32 md:min-h-40 rounded-lg transition hover:opacity-90"
        aria-label="Agregar dinero mediante transferencia bancaria"
      >
        <div className="flex w-2/3 gap-5 md:gap-4 items-center">
          <UserIcon />
          <p className="text-green1 font-bold text-xl text-start">
            Transferencia bancaria
          </p>
        </div>
        <div className="flex w-1/3 justify-end items-center">
          <ArrowIcon className="w-[18px] h-[18px] fill-green" />
        </div>
      </Link>

      {/* Seleccionar tarjeta */}
      <Link
        href="/dashboard/add-money/card"
        className="bg-dark1 shadow-md flex justify-between px-6 py-9 md:px-10 min-h-32 md:min-h-40 rounded-lg transition hover:opacity-90"
        aria-label="Agregar dinero mediante tarjeta"
      >
        <div className="flex w-2/3 gap-5 md:gap-4 items-center">
          <CardIcon />
          <p className="text-green1 font-bold text-xl text-start">
            Seleccionar tarjeta
          </p>
        </div>
        <div className="flex w-1/3 justify-end items-center">
          <ArrowIcon className="w-[18px] h-[18px] fill-green" />
        </div>
      </Link>
    </section>
  );
}
