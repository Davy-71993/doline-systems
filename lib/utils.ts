import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const toNumber = (str: string) =>
  isNaN(parseInt(str)) ? 0 : parseInt(str);
