import { TransactionType } from "@/types/transaction.types";

type TransactionItemProps = {
  transaction: TransactionType;
};

const TransactionItem = ({ transaction }: TransactionItemProps) => {
  const getWeekday = (dateString: string): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { weekday: "long" };
    return new Intl.DateTimeFormat("es-ES", options).format(date);
  };

  return (
    <li className="w-full flex justify-between items-start md:items-center border-b border-gray-200 py-4">
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 bg-green rounded-full" />
        <h4 className="text-sm md:text-base text-dark1">
          {transaction.description}
        </h4>
      </div>

      <div className="flex flex-col items-end text-dark1">
        <span className="text-sm md:text-base">
          {transaction.amount.toLocaleString("es-AR", {
            style: "currency",
            currency: "ARS",
          })}
        </span>
        <span className="text-xs md:text-sm opacity-50">
          {getWeekday(transaction.dated)}
        </span>
      </div>
    </li>
  );
};

export default TransactionItem;
