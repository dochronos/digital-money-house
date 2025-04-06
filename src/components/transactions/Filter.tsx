"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FilterButton from "./FilterButton";

type FilterProps = {
  onFilterApply: (filters: Record<string, string>) => void;
};

const Filter = ({ onFilterApply }: FilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("");

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleApply = () => {
    onFilterApply({ type });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <FilterButton onClick={toggleOpen} />

      {isOpen && (
        <motion.div
          className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-xl p-4 z-50"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <div className="mb-4">
            <label className="text-sm font-semibold block mb-1">Tipo</label>
            <select
              className="w-full border border-gray-300 rounded px-2 py-1"
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
            className="bg-green text-white px-4 py-2 rounded-md w-full"
          >
            Aplicar filtros
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default Filter;
