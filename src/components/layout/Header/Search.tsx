"use client";

import { notFound } from "next/navigation";
import React from "react";

import { CloseIcon, Input, SearchIcon, SpinnerIcon } from "@/components/ui";
import { useSearchProductsQuery } from "@/graphql";
import { useDebounce } from "@/utils";

import { SearchedItem } from "./SearchedItem";

export const Search: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setvalue] = React.useState("");
  const [inputFocus, setInputFocus] = React.useState(false);
  const inputWrapperRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const debouncedValue = useDebounce(value, 700);

  const { data, loading, refetch } = useSearchProductsQuery({
    skip: debouncedValue.length < 2,
    variables: { name: debouncedValue }
  });

  const handleOutsideClick = (event: MouseEvent) => {
    if (inputWrapperRef.current && !inputWrapperRef.current.contains(event.target as Node)) {
      setOpen(false);
      setInputFocus(false);
    }
  };

  const handleFocusIn = () => {
    setInputFocus(true);
  };

  const handleFocusOut = () => {
    if (data?.products.data.length === 0 || data?.products.data.length === undefined) {
      setInputFocus(false);
    }
  };

  const handleLinkClick = () => {
    setInputFocus(false);
    setOpen(false);
    setvalue("");
  };

  React.useEffect(() => {
    refetch({ name: debouncedValue }).catch(notFound);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  React.useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    if (open || inputFocus) {
      document.body.classList.add("lock");
    } else {
      document.body.classList.remove("lock");
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [open, inputFocus]);
  return (
    <>
      <div
        ref={inputWrapperRef}
        className={`absolute right-0 top-[50%] z-[10] h-[100%] min-h-[38px]  w-full -translate-y-[50%]  transition-all laptop:pr-14 ${
          open ? "laptop:max-w-full" : " laptop:max-w-0"
        }`}
      >
        <span className="absolute left-2 top-[50%] z-20 -translate-y-[50%] laptop:hidden">
          {loading ? (
            <div className="ml-1 h-[20px] w-[20px]">
              <SpinnerIcon circle="outline" path="outline" />
            </div>
          ) : (
            <SearchIcon className="text-light-gray" width="30" />
          )}
        </span>
        <Input
          ref={inputRef}
          clearInput={() => setvalue("")}
          placeholder="Search here..."
          tabIndex={open ? 0 : -1}
          value={value}
          className={`h-full w-full rounded-full bg-dark-white pl-10  pr-5  placeholder:text-xs placeholder:text-dark-gray laptop:transition-all laptop:placeholder:text-base ${
            open
              ? "laptop:opacity-100 laptop:placeholder:opacity-100"
              : "laptop:opacity-0 laptop:placeholder:opacity-0"
          }`}
          onBlur={handleFocusOut}
          onChange={(e) => setvalue(e.target.value)}
          onFocus={handleFocusIn}
        />
        <button
          aria-label="button"
          className="absolute right-5 top-[50%] hidden -translate-y-[50%] laptop:block"
          type="button"
          onClick={() => {
            setOpen(!open);
            inputRef.current?.focus();
            if (open) {
              inputRef.current?.blur();
            }
          }}
        >
          {!open ? (
            <SearchIcon className="transition-all hover:text-blue" width="30" />
          ) : (
            <CloseIcon className="transition-all hover:text-blue" width="30" />
          )}
        </button>
        {!!data?.products.data.length && inputFocus && (
          <ul className="mt-2 flex flex-col divide-y-2 rounded-xl border bg-white p-3">
            {data?.products.data.slice(0, 10).map((product) => (
              <li key={product.id}>
                <SearchedItem product={product} onClick={handleLinkClick} />
              </li>
            ))}
          </ul>
        )}
        {!data?.products.data.length && debouncedValue && inputFocus && (
          <div className="mt-2 flex flex-col divide-y-2 rounded-xl border bg-white p-3">
            Product not found
          </div>
        )}
      </div>
      {inputFocus && (
        <div
          className={`min-w-screen fixed left-0 top-0 z-[9] mt-2 h-full min-h-screen w-full bg-blue transition-all  ${
            inputFocus ? "opacity-30" : "opacity-0"
          } `}
        />
      )}
    </>
  );
};
