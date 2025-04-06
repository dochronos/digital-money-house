"use client";

import TransactionsList from "@/components/transactions/TransactionsList";
import useFetchTransactions from "@/hooks/useFetchTransactions";

export default function DashboardPage() {
  const { transactions, loading, error } = useFetchTransactions();

  if (loading) return <p>Cargando transacciones...</p>;
  if (error) return <p>Error: {error}</p>;

  return <TransactionsList transactionsList={transactions} showActivityPage={false} />;
}
