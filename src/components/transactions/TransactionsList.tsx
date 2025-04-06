"use client";

import SearchIcon from "@/components/common/Icons/SearchIcon";
import ArrowIcon from "@/components/common/Icons/ArrowIcon";
import FilterIcon from "@/components/common/Icons/FilterIcon";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TransactionType } from "@/types/transaction.types";
import useTransactions from "@/hooks/useTransactions";

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

  return (
    <>
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
          <div className="hidden md:block rounded-xl bg-green shadow-sm">
            <button className="w-full gap-16 flex justify-between p-5 items-center">
              <span className="text-black text-base font-bold">Filtrar</span>
              <FilterIcon />
            </button>
          </div>
        )}
      </section>

      <section className="w-full p-5 md:py-10 md:px-8 xl:px-12 flex flex-col rounded-xl bg-white text-dark1 shadow-md mt-4">
        <h2 className="text-base font-bold border-b border-gray-300 pb-5">
          Tu actividad
        </h2>

        {paginatedTransactions.length === 0 ? (
          <p className="text-gray-500 mt-4">No hay movimientos en tu cuenta.</p>
        ) : (
          <ul className="w-full">
            {paginatedTransactions.map((transaction) => (
              <li
                key={transaction.id}
                className="w-full flex justify-between items-start md:items-center border-b border-gray-200 py-4"
              >
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
          <div className="flex justify-center mt-5 space-x-2">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  className={`px-3 py-1 rounded-md text-sm font-semibold transition-all ${
                    page === currentPage
                      ? "bg-gray-300 text-black"
                      : "bg-white text-dark1"
                  }`}
                  onClick={() => changePage(page)}
                >
                  {page}
                </button>
              )
            )}
          </div>
        )}
      </section>
    </>
  );
};

export default TransactionsList;
