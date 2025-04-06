import { Button } from "@/components/ui/Button";
import FilterIcon from "@/components/common/Icons/FilterIcon";

type FilterButtonProps = {
  onClick?: () => void;
};

export default function FilterButton({ onClick }: FilterButtonProps) {
  return (
    <div className="hidden md:block rounded-xl bg-green shadow-sm">
      <Button
        className="w-full gap-16 flex justify-between p-5 items-center"
        onClick={onClick}
      >
        <span className="text-black text-base font-bold">Filtrar</span>
        <FilterIcon />
      </Button>
    </div>
  );
}
