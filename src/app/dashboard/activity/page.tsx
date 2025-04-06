import TransactionsList from "@/components/transactions/TransactionsList";
import { TransactionType } from "@/types/transaction.types";

const dummyTransactions: TransactionType[] = [
  {
    id: "1",
    description: "Pago en supermercado",
    amount: 12000,
    dated: "2024-03-15",
  },
  {
    id: "2",
    description: "Transferencia recibida",
    amount: 50000,
    dated: "2024-03-12",
  },
  {
    id: "3",
    description: "Suscripción Netflix",
    amount: 4300,
    dated: "2024-03-08",
  },
  // Agregá más datos si querés para testear paginación.
];

export default function ActivityPage() {
  return (
    <main className="w-full h-full flex flex-col gap-8 px-4 md:px-8 py-6">
      <TransactionsList
        transactionsList={dummyTransactions}
        showActivityPage={true}
      />
    </main>
  );
}
