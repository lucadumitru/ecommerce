import { cva } from "class-variance-authority";
import type { LinkProps } from "next/link";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

import type { ButtonVariant } from "..";

export interface ButtonLinkProps extends LinkProps {
  /**
   * ButtonLink children
   */
  children?: React.ReactNode;
  /**
   * Class
   */
  className?: string;
  /**
   * End Icon
   */
  endIcon?: React.ReactNode;
  /**
   * Start Icon
   */
  startIcon?: React.ReactNode;
  /**
   * ButtonLink Variant
   */
  variant?: ButtonVariant;
}

export const BUTTON_LINK_TEST_IDS = {
  CHILDREN: "button-link-children",
  CONTAINER: "button-link-container",
  END_ICON: "button-link-endIcon",
  START_ICON: "button-link-startIcon"
};

const button = cva(
  "group inline-flex  whitespace-nowrap  w-full min-w-min items-center gap-2 justify-center rounded-[3.125rem] px-5 text-center font-semibold transition leading-normal text-[0.875rem] min-h-[2.313rem] capitalize",
  {
    variants: {
      variant: {
        outline:
          "border-dark-blue text-dark-blue hover:border-blue hover:text-blue border-2 disabled:border-light-gray disabled:text-light-gray py-[0.385rem]",
        solid: "bg-dark-blue hover:bg-blue text-white disabled:bg-light-gray py-2"
      }
    }
  }
);
const icon = cva("mr-[0.625rem] transition", {
  variants: {
    variant: {
      outline: "text-dark-blue group-hover:blue group-disabled:text-light-gray",
      solid: "text-white"
    }
  }
});

/**
 * ButtonLink component
 */

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  variant = "solid",
  children,
  endIcon,
  className,
  startIcon,
  ...props
}: ButtonLinkProps) => (
  <Link
    className={twMerge(button({ className, variant }))}
    data-testid={BUTTON_LINK_TEST_IDS.CONTAINER}
    {...props}
  >
    {startIcon && (
      <span className={icon({ variant })} data-testid={BUTTON_LINK_TEST_IDS.START_ICON}>
        {startIcon}
      </span>
    )}
    <span data-testid={BUTTON_LINK_TEST_IDS.CHILDREN}>{children}</span>
    {endIcon && (
      <span className={icon({ variant })} data-testid={BUTTON_LINK_TEST_IDS.END_ICON}>
        {endIcon}
      </span>
    )}
  </Link>
);
