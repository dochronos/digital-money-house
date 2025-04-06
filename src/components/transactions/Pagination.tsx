type PaginationProps = {
    currentPage: number;
    totalPages: number;
    changePage: (page: number) => void;
  };
  
  const Pagination = ({ currentPage, totalPages, changePage }: PaginationProps) => {
    if (totalPages <= 1) return null;
  
    return (
      <div className="flex justify-center mt-5 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button
            key={page}
            onClick={() => changePage(page)}
            className={`px-3 py-1 rounded-md text-sm font-semibold transition-all ${
              page === currentPage
                ? "bg-gray-300 text-black"
                : "bg-white text-dark1"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    );
  };
  
  export default Pagination;
  