import { useEffect, useState } from "react";
import { TransactionType } from "@/types/transaction.types";

export default function useFetchTransactions() {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/transactions"); // <-- Ajusta esta URL si es necesario
        if (!res.ok) throw new Error("Error al obtener las transacciones");
        const data = await res.json();
        setTransactions(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return { transactions, loading, error };
}
