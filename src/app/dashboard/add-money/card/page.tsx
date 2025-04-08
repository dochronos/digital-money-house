import PlusIcon from "@/components/common/Icons/PlusIcon";
import UserCards from "@/components/dashboard/cards/UserCards";
import { getAccount } from "@/services/account.service";
import { getAllCards } from "@/services/cards.service";
import { getTokenFromCookie } from "@/utils/getTokenFromCookie";
import Link from "next/link";

const AddMoneyCardPage = async () => {
  const token = getTokenFromCookie();
  const accountData = await getAccount(token);
  const cardsList = await getAllCards(accountData.id, token);

  const showAddMoneyPage = true;

  return (
    <section className="flex flex-col gap-5">
      {/* Contenedor principal */}
      <div className="bg-dark1 flex flex-col gap-4 rounded-lg px-5 py-6 md:px-10 md:py-10">
        <h2 className="text-xl md:text-2xl font-bold text-green1">
          Seleccionar tarjeta
        </h2>

        <UserCards
          accountId={accountData.id}
          cardsList={cardsList}
          showAddMoneyPage={showAddMoneyPage}
          token={token}
        />

        <div className="flex flex-col gap-4 mt-4">
          <Link
            href="/dashboard/cards/new-card"
            className="flex items-center gap-3 text-green1 font-bold text-lg"
          >
            <PlusIcon className="w-6 h-6" />
            Nueva tarjeta
          </Link>

          <button className="hidden md:block w-full p-4 bg-green text-dark1 font-bold rounded-lg shadow-md">
            Continuar
          </button>
        </div>
      </div>

      {/* Botón solo visible en mobile */}
      <div className="md:hidden flex justify-end w-full">
        <button className="w-1/2 p-4 bg-green text-dark1 font-bold rounded-lg shadow-md">
          Continuar
        </button>
      </div>
    </section>
  );
};

export default AddMoneyCardPage;