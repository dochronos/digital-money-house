type HeaderProps = {
  title: string;
  className?: string;
};

const Header = ({ title, className = "" }: HeaderProps) => {
  return (
    <h2 className={`w-full text-base font-bold border-b border-gray1 md:border-dark1 pb-5 ${className}`}>
      {title}
    </h2>
  );
};

export default Header;
