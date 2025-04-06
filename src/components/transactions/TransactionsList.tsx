"use client";

import SearchIcon from "@/components/common/Icons/SearchIcon";
import ArrowIcon from "@/components/common/Icons/ArrowIcon";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TransactionType } from "@/types/transaction.types";
import useTransactions from "@/hooks/useTransactions";
import TransactionItem from "./TransactionItem";
import Pagination from "./Pagination";
import Filter from "./Filter";

type TransactionsListProps = {
  transactionsList: TransactionType[];
  showActivityPage: boolean;
};

const TransactionsList = ({
  transactionsList,
  showActivityPage,
}: TransactionsListProps) => {
  const {
    searchTerm,
    setSearchTerm,
    handleSearch,
    currentPage,
    changePage,
    paginatedTransactions,
    totalPages,
  } = useTransactions(transactionsList);

  const getWeekday = (dateString: string): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { weekday: "long" };
    return new Intl.DateTimeFormat("es-ES", options).format(date);
  };

  const handleFilterApply = (filters: Record<string, string>) => {
    console.log("Filtros aplicados:", filters);
    // Aquí luego podés integrar lógica real de filtrado con estado global o hook
  };

  return (
    <>
      {/* Search + Optional Filter */}
      <section className="w-full flex items-center gap-5">
        <div className="w-full flex items-center gap-5 p-5 md:px-8 md:gap-8 xl:px-12 bg-white border border-gray-200 rounded-xl shadow-sm">
          <SearchIcon />
          <input
            className="text-black/50 text-base w-full outline-none md:text-[18px]"
            type="text"
            placeholder="Buscar en tu actividad"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>

        {showActivityPage && (
          <div className="hidden md:block">
            <Filter onFilterApply={handleFilterApply} />
          </div>
        )}
      </section>

      {/* Listado de transacciones */}
      <section className="w-full p-5 md:py-10 md:px-8 xl:px-12 flex flex-col rounded-xl bg-white text-dark1 shadow-md mt-4">
        <h2 className="text-base font-bold border-b border-gray-300 pb-5">
          Tu actividad
        </h2>

        {paginatedTransactions.length === 0 ? (
          <p className="text-gray-500 mt-4">No hay movimientos en tu cuenta.</p>
        ) : (
          <ul className="w-full">
            {paginatedTransactions.map((transaction) => (
              <TransactionItem
                key={transaction.id}
                transaction={transaction}
                getWeekday={getWeekday}
              />
            ))}
          </ul>
        )}

        {!showActivityPage && (
          <Link
            href="/dashboard/activity"
            className="flex justify-between items-center mt-6"
          >
            <p className="text-sm md:text-base text-dark1 font-bold">
              Ver toda tu actividad
            </p>
            <ArrowIcon className="fill-black/70 w-4" />
          </Link>
        )}

        {showActivityPage && totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            changePage={changePage}
          />
        )}
      </section>
    </>
  );
};

export default TransactionsList;
