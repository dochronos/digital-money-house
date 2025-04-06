"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { TransactionType } from "@/types/transaction.types";

const ITEMS_PER_PAGE = 10;

const useTransactions = (allTransactions: TransactionType[]) => {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredTransactions, setFilteredTransactions] = useState<TransactionType[]>([]);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  // Aplicar filtros y búsqueda
  useEffect(() => {
    let filtered = allTransactions;

    if (searchTerm.trim()) {
      filtered = filtered.filter((t) =>
        t.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (activeFilters.length > 0) {
      filtered = filtered.filter((t) => activeFilters.includes(t.type));
    }

    setFilteredTransactions(filtered);
    setCurrentPage(1); // Reiniciar a la primera página cada vez que se filtra
  }, [searchTerm, allTransactions, activeFilters]);

  const totalPages = Math.ceil(filteredTransactions.length / ITEMS_PER_PAGE);
  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (searchTerm.trim().length > 0) {
        router.push(`/dashboard/activity?search=${searchTerm}`);
      }
    }
  };

  const changePage = (page: number) => setCurrentPage(page);

  return {
    searchTerm,
    setSearchTerm,
    handleSearch,
    currentPage,
    changePage,
    paginatedTransactions,
    totalPages,
    activeFilters,
    setActiveFilters,
  };
};

export default useTransactions;
