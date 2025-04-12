type ErrorIconProps = {
    className?: string;
  };
  
  const ErrorIcon = ({ className = "w-16 h-16 text-red-600" }: ErrorIconProps) => (
    <svg
      viewBox="0 0 65 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Error"
    >
      <circle cx="32.5" cy="32.5" r="30.5" stroke="currentColor" strokeWidth="4" />
      <path
        d="M20 20L45 45"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M45 20L20 45"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
  
  export default ErrorIcon;
  