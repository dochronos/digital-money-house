import { cn } from "@/lib/utils";

interface CardLandingProps {
  title: string;
  paragraph: string;
}

export default function CardLanding({ title, paragraph }: CardLandingProps) {
  return (
    <div
      className={cn(
        "inline-flex justify-start items-start p-5 w-full bg-white text-black flex-col gap-2",
        "rounded-[25px] md:p-[30px] md:gap-4 md:rounded-[30px] md:w-[597px]",
        "xl:h-[246px] xl:w-[500px]"
      )}
    >
      <h3 className="w-full pb-3 pt-1 font-bold text-2xl border-b-2 border-green md:text-4xl">
        {title}
      </h3>
      <p className="text-sm font-medium md:text-xl">{paragraph}</p>
    </div>
  );
}
