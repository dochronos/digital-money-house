type CloseIconProps = {
    className?: string;
  };
  
  const CloseIcon = ({ className = "w-5 h-5 text-green" }: CloseIconProps) => (
    <svg
      className={className}
      role="img"
      aria-label="Cerrar"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 2L16 16"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M16 2L2 15"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
  
  export default CloseIcon;
  