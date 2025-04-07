"use client";

import TransactionItem from "./transactionItem";
import Pagination from "./Pagination";
import FilterButton from "./FilterButton";
import SearchInput from "../common/SearchInput";
import { TransactionType } from "@/types/transaction.types";
import useTransactions from "@/hooks/useTransactions";

type TransactionsListProps = {
  transactionsList: TransactionType[];
  showActivityPage?: boolean;
  initialSearchTerm?: string;
  initialFilters?: string[];
};

export default function TransactionsList({
  transactionsList,
  showActivityPage = false,
  initialSearchTerm = "",
  initialFilters = [],
}: TransactionsListProps) {
  const {
    searchTerm,
    setSearchTerm,
    handleSearch,
    currentPage,
    changePage,
    paginatedTransactions,
    totalPages,
    activeFilters,
    toggleFilter,
  } = useTransactions(transactionsList, {
    initialSearchTerm,
    initialFilters,
  });

  const availableFilters = Array.from(
    new Set(transactionsList.map((tx) => tx.type))
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <SearchInput
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleSearch}
        />
        <FilterButton
          availableFilters={availableFilters}
          activeFilters={activeFilters}
          toggleFilter={toggleFilter}
        />
      </div>

      <ul className="flex flex-col gap-4">
        {paginatedTransactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={changePage}
        />
      )}

      {!paginatedTransactions.length && (
        <p className="text-center text-gray-500 mt-6">
          No se encontraron transacciones.
        </p>
      )}

      {!showActivityPage && (
        <div className="text-center mt-4">
          <a
            href="/dashboard/activity"
            className="text-green font-medium hover:underline"
          >
            Ver toda la actividad
          </a>
        </div>
      )}
    </div>
  );
}
