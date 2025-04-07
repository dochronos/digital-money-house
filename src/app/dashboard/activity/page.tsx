"use client";

import { useSearchParams } from "next/navigation";
import TransactionsList from "@/components/transactions/TransactionsList";
import useFetchTransactions from "@/hooks/useFetchTransactions";
import Loader from "@/components/common/Loader";

export default function ActivityPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const { transactions, loading, error } = useFetchTransactions();

  return (
    <div className="p-5 md:p-8 xl:p-12">
      <h1 className="text-2xl font-bold mb-6">Actividad completa</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <TransactionsList
          transactionsList={transactions}
          showActivityPage
          initialSearchTerm={searchQuery}
        />
      )}
    </div>
  );
}
