import { cn } from "@/lib/utils";

export const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("bg-dark2 p-4 rounded-2xl shadow-md", className)}>
      {children}
    </div>
  );
};
