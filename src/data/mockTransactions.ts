import { TransactionType } from "@/types/transaction.types";

const mockTransactions: TransactionType[] = [
  {
    id: "1",
    description: "Compra en supermercado",
    amount: -4500,
    dated: "2025-04-01",
  },
  {
    id: "2",
    description: "Transferencia recibida",
    amount: 12000,
    dated: "2025-03-30",
  },
  {
    id: "3",
    description: "Pago de suscripción",
    amount: -999,
    dated: "2025-03-28",
  },
  {
    id: "4",
    description: "Ingreso por venta",
    amount: 5000,
    dated: "2025-03-27",
  },
  {
    id: "5",
    description: "Carga SUBE",
    amount: -2000,
    dated: "2025-03-25",
  },
  // Podés seguir agregando más si querés testear paginación
];

export default mockTransactions;
