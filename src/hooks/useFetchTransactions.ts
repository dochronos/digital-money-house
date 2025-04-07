"use client";

import { useEffect, useState } from "react";
import { TransactionType } from "@/types/transaction.types";

interface UseFetchTransactionsOptions {
  apiUrl?: string;
}

export default function useFetchTransactions(options?: UseFetchTransactionsOptions) {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const apiUrl = options?.apiUrl || "http://localhost:3000/api/transactions";

  const fetchTransactions = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Error al obtener las transacciones");
      }
      const data = await response.json();
      setTransactions(data);
    } catch (err: any) {
      setError(err.message || "Error inesperado");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, [apiUrl]);

  return { transactions, loading, error, refetch: fetchTransactions };
}
