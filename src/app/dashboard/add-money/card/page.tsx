import PlusIcon from "@/components/common/Icons/PlusIcon";
import UserCards from "@/components/dashboard/cards/UserCards";
import InputRadius from "@/components/form/InputRadius";
import { getAccount } from "@/services/account.service";
import { getAllCards } from "@/services/cards.service";
import { getTokenFromCookie } from "@/utils/getTokenFromCookie";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

const AddMoneyCardPage = async () => {
  const token = getTokenFromCookie();
  const accountData = await getAccount(token);
  const cardsList = await getAllCards(accountData.id, token);

  return (
    <AddMoneyCardClient
      token={token}
      accountId={accountData.id}
      cardsList={cardsList}
    />
  );
};

export default AddMoneyCardPage;

// Componente cliente separado
"use client";

type Props = {
  accountId: number;
  cardsList: any[];
  token: string;
};

const AddMoneyCardClient = ({ accountId, cardsList, token }: Props) => {
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);
  const [amount, setAmount] = useState("");

  const handleContinue = () => {
    if (!selectedCardId || !amount) {
      alert("Seleccioná una tarjeta y un monto válido.");
      return;
    }

    alert(`Transferir $${amount} desde tarjeta ${selectedCardId}`);
  };

  return (
    <section className="flex flex-col gap-5">
      <div className="bg-dark1 flex flex-col gap-4 rounded-lg px-5 py-6 md:px-10 md:py-10">
        <h2 className="text-xl md:text-2xl font-bold text-green1">
          Seleccionar tarjeta
        </h2>

        <UserCards
          accountId={accountId}
          cardsList={cardsList}
          showAddMoneyPage={true}
          token={token}
          onSelect={(id) => setSelectedCardId(id)}
        />

        <div className="flex flex-col gap-4 mt-4">
          <InputRadius
            label="Monto a agregar"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Ej: 5000"
          />

          <Link
            href="/dashboard/cards/new-card"
            className="flex items-center gap-3 text-green1 font-bold text-lg"
          >
            <PlusIcon className="w-6 h-6" />
            Nueva tarjeta
          </Link>

          <button
            className="hidden md:block w-full p-4 bg-green text-dark1 font-bold rounded-lg shadow-md"
            onClick={handleContinue}
          >
            Continuar
          </button>
        </div>
      </div>

      <div className="md:hidden flex justify-end w-full">
        <button
          className="w-1/2 p-4 bg-green text-dark1 font-bold rounded-lg shadow-md"
          onClick={handleContinue}
        >
          Continuar
        </button>
      </div>
    </section>
  );
};
