import Actions from "@/components/dashboard/home/Actions";
import Balance from "@/components/dashboard/home/Balance";
import TransactionsList from "@/components/transactions/TransactionsList";
import { getAccount } from "@/services/account.service";
import { getAllTransactions } from "@/services/transactions.service";
import { getTokenFromCookie } from "@/utils/getTokenFromCookie";

export default async function DashboardPage() {
  const token = getTokenFromCookie();
  const accountData = await getAccount(token);
  const transactionsList = await getAllTransactions(token, accountData.id);

  const showActivityPage = false;
  const latestTransactions = transactionsList.toReversed().slice(0, 10);

  return (
    <div className="p-5 md:p-8 xl:p-12 space-y-6">
      <h1 className="text-2xl font-bold">Resumen</h1>

      <section className="bg-dark2 p-4 rounded-xl shadow text-white">
        <Balance available_amount={accountData.available_amount} />
      </section>

      <section className="bg-dark2 p-4 rounded-xl shadow text-white">
        <Actions />
      </section>

      <section className="bg-dark2 p-4 rounded-xl shadow text-white">
        <TransactionsList
          transactionsList={latestTransactions}
          showActivityPage={showActivityPage}
        />
      </section>
    </div>
  );
}
