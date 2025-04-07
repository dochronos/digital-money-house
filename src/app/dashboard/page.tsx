"use client";

import { useEffect, useState } from "react";
import TransactionsList from "@/components/transactions/TransactionsList";
import { TransactionType } from "@/types/transaction.types";
import useTransactions from "@/hooks/useTransactions";
import Loader from "@/components/common/Loader"; // ✅ Importamos el Loader

export default function DashboardPage() {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/transactions");
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error("Error al cargar las transacciones:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

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
    initialSearchTerm: "", // Puede ajustarse si querés setear una búsqueda inicial
  });

  return (
    <div className="p-5 md:p-8 xl:p-12">
      <h1 className="text-2xl font-bold mb-6">Resumen</h1>
      {loading ? (
        <Loader /> // ✅ Usamos el spinner animado
      ) : (
        <TransactionsList
          transactionsList={transactions}
          showActivityPage={false}
        />
      )}
    </div>
  );
}
