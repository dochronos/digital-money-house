"use client";

import SearchIcon from "@/components/common/Icons/SearchIcon";
import ArrowIcon from "@/components/common/Icons/ArrowIcon";
import FilterIcon from "@/components/common/Icons/FilterIcon";
import Header from "@/components/common/Header";
import Link from "next/link";
import { TransactionType } from "@/types/transaction.types";
import useTransactions from "@/hooks/useTransactions";
import SearchBar from "@/components/transactions/SearchBar";
import TransactionItem from "@/components/transactions/TransactionItem";
import Pagination from "@/components/transactions/Pagination";
import FilterButton from "@/components/transactions/FilterButton";

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

  return (
    <>
      <section className="w-full flex items-center gap-5">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
        />

        {showActivityPage && <FilterButton />}
      </section>

      <section className="w-full p-5 md:py-10 md:px-8 xl:px-12 flex flex-col rounded-xl bg-white text-dark1 shadow-md mt-4">
        <Header title="Tu actividad" />

        {paginatedTransactions.length === 0 ? (
          <p className="text-gray-500 mt-4">No hay movimientos en tu cuenta.</p>
        ) : (
          <ul className="w-full">
            {paginatedTransactions.map((transaction) => (
              <TransactionItem key={transaction.id} transaction={transaction} />
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
            onPageChange={changePage}
          />
        )}
      </section>
    </>
  );
};

export default TransactionsList;
