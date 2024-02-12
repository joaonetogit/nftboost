import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const patternAnimationTo = {
  opacity: 1,
  duration: 1,
  ease: "power3.out",
};
