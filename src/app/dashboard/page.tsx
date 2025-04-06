"use client";

import { useEffect, useState } from "react";
import TransactionsList from "@/components/transactions/TransactionsList";
import { TransactionType } from "@/types/transaction.types";

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
        console.error("Error al cargar transacciones:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="p-5 md:p-8 xl:p-12">
      <h1 className="text-2xl font-bold mb-6">Resumen del Dashboard</h1>
      {loading ? (
        <p>Cargando transacciones...</p>
      ) : (
        <TransactionsList transactionsList={transactions} showActivityPage={false} />
      )}
    </div>
  );
}
