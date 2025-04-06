type HeaderProps = {
    title: string;
  };
  
  const Header = ({ title }: HeaderProps) => {
    return (
      <h2 className="text-base font-bold border-b border-gray-300 pb-5">
        {title}
      </h2>
    );
  };
  
  export default Header;
  