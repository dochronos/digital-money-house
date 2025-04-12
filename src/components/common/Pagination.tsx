type PaginationProps = {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
  };
  
  const Pagination = ({
    totalItems,
    itemsPerPage,
    currentPage,
    onPageChange,
  }: PaginationProps) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
  
    if (totalPages <= 1) return null;
  
    return (
      <div className="flex justify-center gap-4 mt-5">
        <button
          className="px-4 py-2 bg-gray-200 rounded"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Anterior
        </button>
        <span className="px-4 py-2 text-sm text-dark1 font-medium">
          {currentPage} de {totalPages}
        </span>
        <button
          className="px-4 py-2 bg-gray-200 rounded"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Siguiente
        </button>
      </div>
    );
  };
  
  export default Pagination;
  