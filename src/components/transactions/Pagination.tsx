type PaginationProps = {
  currentPage: number;
  totalPages: number;
  changePage: (page: number) => void;
};

const Pagination = ({ currentPage, totalPages, changePage }: PaginationProps) => {
  if (totalPages <= 1) return null;

  return (
    <nav className="flex justify-center mt-6">
      <ul className="flex flex-wrap gap-2">
        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;
          const isActive = page === currentPage;

          return (
            <li key={page}>
              <button
                onClick={() => changePage(page)}
                className={`px-3 py-1 rounded-md text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-green text-white"
                    : "bg-white text-dark1 hover:bg-gray-100"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {page}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
