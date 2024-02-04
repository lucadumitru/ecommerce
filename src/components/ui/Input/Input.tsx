import React, { forwardRef } from "react";

import { CloseIcon } from "@/components/ui/icons";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  clearInput?: () => void;
  inputClassName?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ onChange, clearInput, className, inputClassName, value, ...props }, ref) => (
    <div className={`${className || ""}  relative flex h-full w-full px-2`}>
      <input
        {...props}
        ref={ref}
        value={value}
        className={`h-full w-full bg-transparent outline-none placeholder:text-[14px] placeholder:font-light ${
          inputClassName || ""
        }`}
        onChange={onChange}
      />
      {value && (
        <button aria-label="clear input" id="input-clear-btn" onClick={clearInput}>
          <CloseIcon className="pointer-events-none" height={15} width={15} />
        </button>
      )}
    </div>
  )
);
