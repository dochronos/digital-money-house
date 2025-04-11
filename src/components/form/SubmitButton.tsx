import { clsx } from "clsx";
import SVGSpinner from "../common/Icons/SpinnerIcon";

type SubmitButtonProps = {
  text: string;
  className?: string;
  isLoading?: boolean;
  onClick?: () => void;
};

const SubmitButton = ({
  text,
  className,
  isLoading = false,
  onClick,
}: SubmitButtonProps) => {
  return (
    <div className="w-full h-[50px] md:h-[64px] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)]">
      <button
        type="submit"
        onClick={onClick}
        disabled={isLoading}
        className={clsx(
          "w-full p-3 md:p-5 text-black text-base font-bold text-center rounded-[10px] transition outline-none",
          className
        )}
      >
        {isLoading ? <SVGSpinner /> : text}
      </button>
    </div>
  );
};

export default SubmitButton;
