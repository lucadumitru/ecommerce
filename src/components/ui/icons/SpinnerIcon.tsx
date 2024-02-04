import { cva } from "class-variance-authority";

import type { ButtonVariant } from "@/components/ui";

interface SpinnerIconProps {
  circle?: ButtonVariant;
  path?: ButtonVariant;
}

const classNames = cva("spinner", {
  variants: {
    circle: {
      outline: "stroke-dark-gray",
      solid: "fill-light-gray stroke-white"
    },
    path: {
      outline: "fill-dark-gray ",
      solid: "fill-white"
    }
  }
});

export const SpinnerIcon: React.FC<SpinnerIconProps> = ({ circle, path }) => (
  <svg className="animate-spin" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle
      className={`${classNames({ circle })} opacity-25`}
      cx="12"
      cy="12"
      r="10"
      strokeWidth="4"
    />
    <path
      className={`${classNames({ path })} opacity-75`}
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);
