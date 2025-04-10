import { TransactionType } from "@/types/transaction.types";

type TransactionItemProps = {
  transaction: TransactionType;
};

const TransactionItem = ({ transaction }: TransactionItemProps) => {
  const getWeekday = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-AR", {
      weekday: "long",
    });
  };

  return (
    <li className="w-full flex justify-between items-start md:items-center border-b border-gray-200 py-4">
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded-full bg-green shrink-0" />
        <span className="text-sm md:text-base text-dark1 font-medium">
          {transaction.description}
        </span>
      </div>

      <div className="flex flex-col items-end">
        <span className="text-sm md:text-base font-semibold text-dark1">
          {transaction.amount.toLocaleString("es-AR", {
            style: "currency",
            currency: "ARS",
          })}
        </span>
        <span className="text-xs text-gray-500">
          {getWeekday(transaction.dated)}
        </span>
      </div>
    </li>
  );
};

export default TransactionItem;
