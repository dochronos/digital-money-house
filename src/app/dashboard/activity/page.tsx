"use client";

import { useEffect, useState } from "react";
import TransactionsList from "@/components/transactions/TransactionsList";
import { TransactionType } from "@/types/transaction.types";

export default function ActivityPage() {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/transactions");

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        setTransactions(data);
      } catch (err: any) {
        console.error("Error al cargar las transacciones:", err);
        setError("No se pudieron cargar las transacciones. Intenta nuevamente.");
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="p-5 md:p-8 xl:p-12">
      <h1 className="text-2xl font-bold mb-6">Actividad completa</h1>

      {loading && <p className="text-muted-foreground">Cargando transacciones...</p>}

      {error && (
        <p className="text-red-500 bg-red-100 border border-red-200 p-4 rounded-xl">
          {error}
        </p>
      )}

      {!loading && !error && (
        <TransactionsList transactionsList={transactions} showActivityPage />
      )}
    </div>
  );
}
