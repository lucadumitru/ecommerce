import type { FormikValues } from "formik";

import { CloseIcon } from "@/components/ui/icons";

interface InputProps extends ReactTagProps<"input"> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clearInput?: () => void | FormikValues;
  className?: string;
  inputClassName?: string;
  value?: string;
}

export const Input: React.FC<InputProps> = ({
  onChange,
  clearInput,
  className,
  inputClassName,
  value,
  ...props
}) => (
  <div className={`${className?.length ? className : ""}  relative flex h-full w-full px-2`}>
    <input
      {...props}
      value={value}
      className={`h-full w-full bg-transparent outline-none placeholder:text-[14px] placeholder:font-light ${
        inputClassName?.length ? inputClassName : ""
      }`}
      onChange={onChange}
    />
    {value && (
      <button aria-label="clear input" onClick={clearInput}>
        <CloseIcon height={15} width={15} />
      </button>
    )}
  </div>
);
