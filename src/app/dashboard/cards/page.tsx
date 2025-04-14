import ArrowIcon from "@/components/common/Icons/ArrowIcon";
import PlusIcon from "@/components/common/Icons/PlusIcon";
import UserCards from "@/components/dashboard/cards/UserCards";
import { getAccount } from "@/services/account.service";
import { getAllCards } from "@/services/cards.service";
import { getTokenFromCookie } from "@/utils/getTokenFromCookie";
import Link from "next/link";

export default async function CardsPage() {
  const token = getTokenFromCookie();
  const accountData = await getAccount(token);
  const accountId = accountData.id;
  const cardsList = await getAllCards(accountId, token);

  return (
    <div className="flex flex-col gap-6">
      {/* Agregar nueva tarjeta */}
      <section className="bg-dark1 rounded-[10px] shadow-md px-6 py-5 md:px-8 md:py-10 xl:px-10 flex flex-col gap-6">
        <h3 className="text-gray1 text-base md:text-lg font-bold md:hidden xl:block">
          Agregá tu tarjeta de débito o crédito
        </h3>

        <Link
          href="/dashboard/cards/new-card"
          className="flex justify-between items-center group"
          aria-label="Agregar nueva tarjeta"
        >
          <div className="flex items-center gap-4">
            <PlusIcon className="w-[34px] h-[34px] group-hover:scale-105 transition-transform" />
            <p className="text-xl font-bold text-green group-hover:underline">
              Nueva tarjeta
            </p>
          </div>
          <ArrowIcon className="w-[18px] h-[18px] fill-green group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>

      {/* Tarjetas del usuario */}
      <section>
        <UserCards
          accountId={accountId}
          cardsList={cardsList}
          showAddMoneyPage={false}
          token={token}
        />
      </section>
    </div>
  );
}
