import Actions from "@/components/dashboard/home/Actions";
import Balance from "@/components/dashboard/home/Balance";
import TransactionsList from "@/components/transactions/TransactionsList";
import { getAccount } from "@/services/account.service";
import { getAllTransactions } from "@/services/transactions.service";
import { getTokenFromCookie } from "@/utils/getTokenFromCookie";

export default async function DashboardPage() {
  const token = await getTokenFromCookie(); // ✅ CORREGIDO
  const accountData = await getAccount(token);
  const transactionsList = await getAllTransactions(token, accountData.id);

  const showActivityPage = false;
  const orderLatestTransactions = transactionsList.toReversed().slice(0, 10);

  return (
    <>
      <Balance available_amount={accountData.available_amount} />
      <Actions />
      <TransactionsList
        transactionsList={orderLatestTransactions}
        showActivityPage={showActivityPage}
      />
    </>
  );
}
