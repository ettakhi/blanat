import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getVoteColor = (votes: number): string => {
  if (votes <= -150) return "text-blue-700"; // Very cold
  if (votes <= -10) return "text-blue-500"; // Cold
  if (votes < 0) return "text-blue-300"; // Cool
  if (votes === 0) return "text-gray-500"; // Neutral
  if (votes <= 10) return "text-yellow-500"; // Warm
  if (votes <= 100) return "text-orange-500"; // Hot
  return "text-red-600"; // Very hot
};
