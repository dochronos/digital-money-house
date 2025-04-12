const SearchIcon = ({ className = "w-5 h-5 text-gray-500" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
    <line x1="16" y1="16" x2="21" y2="21" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export default SearchIcon;
