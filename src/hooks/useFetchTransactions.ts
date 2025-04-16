import { useState, useEffect } from "react";
import { TransactionType } from "@/types/transaction.types";

const useFetchTransactions = () => {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        setLoading(true);

        const mockTransactions: TransactionType[] = [
          {
            id: "1",
            type: "transfer",
            amount: 1500.0,
            concept: "Depósito",
            description: "Depósito en efectivo",
            date: new Date().toISOString(),
            dated: new Date().toISOString(),
            sourceAccount: "123456789",
          },
          {
            id: "2",
            type: "payment",
            amount: 500.0,
            concept: "Pago de servicio",
            description: "Pago de factura de electricidad",
            date: new Date(Date.now() - 86400000).toISOString(),
            dated: new Date(Date.now() - 86400000).toISOString(),
            destinationAccount: "987654321",
          },
          {
            id: "3",
            type: "transfer",
            amount: 2000.0,
            concept: "Transferencia recibida",
            description: "Transferencia de Juan Pérez",
            date: new Date(Date.now() - 172800000).toISOString(),
            dated: new Date(Date.now() - 172800000).toISOString(),
            sourceAccount: "567891234",
          },
        ];

        setTimeout(() => {
          setTransactions(mockTransactions);
          setLoading(false);
        }, 500);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Error desconocido al cargar transacciones"
        );
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return { transactions, loading, error };
};

export default useFetchTransactions;
