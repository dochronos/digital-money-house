"use client";

import TransactionItem from "./TransactionItem";
import Pagination from "./Pagination";
import FilterButton from "./FilterButton";
import SearchInput from "../common/SearchInput";

import useTransactions from "@/hooks/useTransactions";
import { TransactionType } from "@/types/transaction.types";

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
    <section className="flex flex-col gap-6">
      {/* Búsqueda y filtros */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <SearchInput
          value={searchTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
          onKeyDown={handleSearch}
        />
        <FilterButton
          availableFilters={availableFilters}
          activeFilters={activeFilters}
          toggleFilter={toggleFilter}
        />
      </div>

      {/* Lista de transacciones */}
      <ul className="flex flex-col gap-4">
        {paginatedTransactions.map((tx) => (
          <TransactionItem key={tx.id} transaction={tx} />
        ))}
      </ul>

      {/* Paginación */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          changePage={changePage}
        />
      )}

      {/* Sin resultados */}
      {paginatedTransactions.length === 0 && (
        <p className="text-center text-gray-500 mt-6">
          No se encontraron transacciones.
        </p>
      )}

      {/* Botón "Ver más" */}
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
    </section>
  );
}
