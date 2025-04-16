export type TransactionType = {
  id: string;
  type: "transfer" | "payment";
  amount: number;
  concept: string;
  description: string;
  date: string;
  dated: string;
  destinationAccount?: string;
  sourceAccount?: string;
};