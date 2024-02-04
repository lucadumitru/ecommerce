import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

import { SpinnerIcon } from "@/components/ui";

export type ButtonVariant = "solid" | "outline";
export interface ButtonProps extends ReactTagProps<"button"> {
  /**
   * Button children
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
   * Icon Mobikle off
   */
  iconMobileOff?: boolean;
  /**
   * Loading status
   */
  isLoading?: boolean;
  /**
   * Loading Text
   */
  loadingText?: string;
  /**
   * Start Icon
   */
  startIcon?: React.ReactNode;
  /**
   * Button Variant
   */
  variant?: ButtonVariant;
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
    iconMobileOff: {
      false: "",
      true: "hidden tablet:block"
    },
    variant: {
      outline: "text-dark-blue group-hover:text-blue group-disabled:text-light-gray",
      solid: "text-white"
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
