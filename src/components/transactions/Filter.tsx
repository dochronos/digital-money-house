"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FilterButton from "./FilterButton";

type FilterProps = {
  onFilterApply: (filters: Record<string, string>) => void;
};

const Filter = ({ onFilterApply }: FilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("");

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const handleApply = () => {
    onFilterApply({ type });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <FilterButton onClick={toggleOpen} />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="filter-modal"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-xl p-4 z-50"
          >
            <div className="mb-4">
              <label
                htmlFor="filter-type"
                className="text-sm font-semibold block mb-1 text-dark1"
              >
                Tipo de transacción
              </label>
              <select
                id="filter-type"
                className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="">Todos</option>
                <option value="income">Ingreso</option>
                <option value="expense">Gasto</option>
              </select>
            </div>

            <button
              onClick={handleApply}
              className="w-full bg-green text-white font-semibold text-sm py-2 rounded-md hover:opacity-90 transition"
            >
              Aplicar filtros
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Filter;
