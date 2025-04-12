type FilterIconProps = {
  className?: string;
};

const FilterIcon = ({ className = "w-5 h-5 text-green" }: FilterIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 17 13"
    fill="none"
    className={className}
  >
    <path d="M0 9.7h17M17 2.767H0" stroke="currentColor" />
    <circle cx="5.099" cy="9.633" r="2.333" fill="currentColor" stroke="currentColor" />
    <circle
      cx="11.901"
      cy="2.834"
      r="2.333"
      fill="currentColor"
      stroke="currentColor"
      transform="rotate(-180 11.901 2.834)"
    />
  </svg>
);

export default FilterIcon;
