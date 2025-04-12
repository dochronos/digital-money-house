type HamburguesaIconProps = {
    className?: string;
  };
  
  const HamburguesaIcon = ({ className = "w-8 h-8 text-green-500" }: HamburguesaIconProps) => (
    <svg
      viewBox="0 0 33 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Menú"
    >
      <line
        x1="2"
        y1="2"
        x2="31"
        y2="2"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <line
        x1="2"
        y1="13"
        x2="31"
        y2="13"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <line
        x1="2"
        y1="24"
        x2="31"
        y2="24"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
  
  export default HamburguesaIcon;
  