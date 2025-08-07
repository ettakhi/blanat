import { HiArrowDown, HiArrowUp } from "react-icons/hi";
import { cn } from "@/lib/utils";

const Temperature = ({
  votes,
  className,
}: {
  votes: number;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex justify-between items-center gap-1 rounded-full bg-gray-100 border border-gray-50",
        className
      )}
    >
      <HiArrowUp className="text-blue-500 h-6 w-6 hover:bg-blue-200 p-1 rounded-full cursor-pointer border" />
      <small className="text-orange-500">{votes}°</small>
      <HiArrowDown className="text-red-500 h-6 w-6 hover:bg-red-200 p-1 rounded-full cursor-pointer border" />
    </div>
  );
};

export default Temperature;
