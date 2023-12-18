"use client";

import { useState } from "react";

import { CloseIcon, SearchIcon } from "@/components/ui";

interface SearchProps {
  actionsWidth?: number;
  logoWidth?: number;
}

export const Search: React.FC<SearchProps> = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`absolute right-0 top-[50%] h-[100%] min-h-[38px] w-[100%] -translate-y-[50%]  laptop:pr-14 laptop:transition-all ${
        open ? "laptop:w-[100%]" : "laptop:w-0"
      }`}
    >
      <span className="absolute left-2 top-[50%] -translate-y-[50%] laptop:hidden">
        <SearchIcon className="text-light-gray" width="30" />
      </span>
      <input
        placeholder="Search here..."
        className={`h-full w-full rounded-full bg-dark-white pl-10  pr-5  placeholder:text-xs placeholder:text-dark-gray laptop:transition-all laptop:placeholder:text-base ${
          open
            ? "laptop:opacity-100 laptop:placeholder:opacity-100"
            : "laptop:opacity-0 laptop:placeholder:opacity-0"
        }`}
      />
      <button
        aria-label="button"
        className="z-1 absolute right-5 top-[50%] hidden -translate-y-[50%] laptop:block"
        type="button"
        onClick={() => setOpen(!open)}
      >
        {!open ? (
          <SearchIcon className="transition-all hover:text-blue" width="30" />
        ) : (
          <CloseIcon className="transition-all hover:text-blue" width="30" />
        )}
      </button>
    </div>
  );
};
