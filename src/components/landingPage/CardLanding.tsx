import { cn } from "@/lib/utils";

interface CardLandingProps {
  title: string;
  paragraph: string;
}

export default function CardLanding({ title, paragraph }: CardLandingProps) {
  return (
    <div
      className={cn(
        "flex flex-col justify-start items-start bg-white text-black",
        "w-full max-w-[500px] p-5 gap-3 rounded-2xl",
        "md:p-6 md:gap-4 md:rounded-3xl"
      )}
    >
      <h3 className="w-full pb-2 pt-1 font-bold text-2xl border-b-2 border-green md:text-3xl">
        {title}
      </h3>
      <p className="text-sm font-medium md:text-base">{paragraph}</p>
    </div>
  );
}
