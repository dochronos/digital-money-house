"use client";

import TransactionsList from "@/components/transactions/TransactionsList";
import useTransactions from "@/hooks/useTransactions";
import useFetchTransactions from "@/hooks/useFetchTransactions";
import Loader from "@/components/common/Loader";

export default function DashboardPage() {
  const { transactions, loading, error } = useFetchTransactions();

  const {
    searchTerm,
    setSearchTerm,
    handleSearch,
    currentPage,
    changePage,
    paginatedTransactions,
    totalPages,
    activeFilters,
    setActiveFilters,
  } = useTransactions(transactions, {
    initialSearchTerm: "", // O reemplazá con uno si querés
  });

  return (
    <div className="p-5 md:p-8 xl:p-12">
      <h1 className="text-2xl font-bold mb-6">Resumen</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <TransactionsList
          transactionsList={transactions}
          showActivityPage={false}
          initialSearchTerm=""
        />
      )}
    </div>
  );
}
