"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { TransactionType } from "@/types/transaction.types";

const ITEMS_PER_PAGE = 10;

const useTransactions = (
  allTransactions: TransactionType[],
  options?: {
    initialSearchTerm?: string;
    initialFilters?: string[];
  }
) => {
  const router = useRouter();
  const pathname = usePathname(); // ✅ ruta actual dinámica
  const searchParams = useSearchParams();

  // 🟡 Valores iniciales desde URL o props
  const initialSearch = options?.initialSearchTerm ?? searchParams.get("search") ?? "";
  const initialTypes = options?.initialFilters ?? searchParams.getAll("type");

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [activeFilters, setActiveFilters] = useState<string[]>(initialTypes);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredTransactions, setFilteredTransactions] = useState<TransactionType[]>([]);

  // 🧠 Refiltrado al cambiar búsqueda, filtros o lista
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
    setCurrentPage(1);
  }, [searchTerm, activeFilters, allTransactions]);

  const totalPages = Math.ceil(filteredTransactions.length / ITEMS_PER_PAGE);
  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // 🟠 Buscar al presionar Enter y actualizar la URL
  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      updateURL(searchTerm, activeFilters);
    }
  };

  // 🔵 Cambiar filtros y actualizar URL
  const toggleFilter = (filter: string) => {
    let updatedFilters: string[];

    if (activeFilters.includes(filter)) {
      updatedFilters = activeFilters.filter((f) => f !== filter);
    } else {
      updatedFilters = [...activeFilters, filter];
    }

    setActiveFilters(updatedFilters);
    updateURL(searchTerm, updatedFilters);
  };

  // 🧩 Actualizar dinámicamente la URL, sin hardcodear rutas
  const updateURL = (search: string, filters: string[]) => {
    const params = new URLSearchParams();

    if (search.trim()) {
      params.set("search", search);
    }

    filters.forEach((f) => params.append("type", f));

    router.push(`${pathname}?${params.toString()}`);
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
    toggleFilter,
  };
};

export default useTransactions;
