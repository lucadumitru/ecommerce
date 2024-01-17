import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

import { SpinnerIcon } from "@/components/ui";

export type ButtonVariant = "solid" | "outline";
export interface ButtonProps extends ReactTagProps<"button"> {
  /**
   * Button Variant
   */
  variant?: ButtonVariant;
  /**
   * Button children
   */
  children?: React.ReactNode;
  /**
   * Loading status
   */
  isLoading?: boolean;
  /**
   * Start Icon
   */
  startIcon?: React.ReactNode;
  /**
   * End Icon
   */
  endIcon?: React.ReactNode;
  /**
   * Loading Text
   */
  loadingText?: string;
  /**
   * Class
   */
  className?: string;
  /**
   * Icon Mobikle off
   */
  iconMobileOff?: boolean;
}

export const BUTTON_TEST_IDS = {
  CHILDREN: "button-children",
  CONTAINER: "button-container",
  END_ICON: "button-endIcon",
  LOADER: "button-loader",
  LOADER_TEXT: "button-loaderText",
  START_ICON: "button-startIcon"
};

const button = cva(
  "group inline-flex  whitespace-nowrap h-full w-full min-w-min items-center gap-2 justify-center rounded-[3.125rem] px-5 text-center font-semibold transition leading-normal text-[0.875rem] min-h-[2.313rem] capitalize",
  {
    variants: {
      variant: {
        outline:
          "border-dark-blue text-dark-blue hover:border-blue hover:text-blue border-2 disabled:border-light-gray disabled:text-light-gray py-[0.385rem]",
        solid:
          "bg-dark-blue hover:bg-blue text-white disabled:text-white disabled:bg-light-gray py-2"
      }
    }
  }
);
const icon = cva("transition ", {
  variants: {
    variant: {
      outline: "text-dark-blue group-hover:text-blue group-disabled:text-light-gray",
      solid: "text-white"
    },
    iconMobileOff: {
      true: "hidden tablet:block",
      false: ""
    }
  }
});

/**
 * Button component
 */

export const Button: React.FC<ButtonProps> = ({
  variant = "solid",
  children,
  isLoading,
  loadingText = "Loading...",
  endIcon,
  className,
  startIcon,
  iconMobileOff = false,
  ...props
}: ButtonProps) => (
  <button
    className={twMerge(button({ className, variant }))}
    data-test-id={BUTTON_TEST_IDS.CONTAINER}
    disabled={props.disabled || isLoading}
    type="button"
    {...props}
  >
    {startIcon && !isLoading && (
      <span className={icon({ iconMobileOff, variant })} data-testid={BUTTON_TEST_IDS.START_ICON}>
        {startIcon}
      </span>
    )}
    {isLoading ? (
      <>
        <span className="w-5" data-testid={BUTTON_TEST_IDS.LOADER}>
          <SpinnerIcon circle={variant} path={variant} />
        </span>
        {loadingText && <span data-testid={BUTTON_TEST_IDS.LOADER_TEXT}>{loadingText}</span>}
      </>
    ) : (
      <span data-testid={BUTTON_TEST_IDS.CHILDREN}>{children}</span>
    )}
    {endIcon && !isLoading && (
      <span className={icon({ variant })} data-testid={BUTTON_TEST_IDS.END_ICON}>
        {endIcon}
      </span>
    )}
  </button>
);
