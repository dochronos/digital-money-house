import { TransactionType } from "@/types/transaction.types";

export const transactionsMock: TransactionType[] = [
  {
    id: "1",
    description: "Compra en MercadoLibre",
    amount: -5400,
    dated: "2025-04-01",
  },
  {
    id: "2",
    description: "Transferencia recibida",
    amount: 15000,
    dated: "2025-03-30",
  },
  {
    id: "3",
    description: "Pago Spotify",
    amount: -999,
    dated: "2025-03-28",
  },
  {
    id: "4",
    description: "Carga SUBE",
    amount: -1200,
    dated: "2025-03-25",
  },
  {
    id: "5",
    description: "Devolución Amazon",
    amount: 7300,
    dated: "2025-03-23",
  },
];
