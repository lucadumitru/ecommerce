"use client";

import { useState } from "react";

import { Button, Input } from "@/components/ui";

interface SubscribeFormProps {
  description?: boolean;
  title?: string;
  subTitle?: string;
  className?: string;
}

export const SubscribeForm: React.FC<SubscribeFormProps> = ({
  description = true,
  title,
  subTitle,
  className
}) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);
  const clearInput = () => setInputValue("");
  return (
    <section
      className={`${
        className?.length ? className : ""
      } flex flex-wrap items-center justify-between gap-[15px] laptop:flex-nowrap `}
    >
      {description && (
        <div className="">
          <h2 className="mb-1 text-[18px] font-medium tablet:text-[30px] desktop:text-[38px]">
            {title}
          </h2>
          <p className="text-[12px] font-light tablet:text-[16px]">{subTitle}</p>
        </div>
      )}
      <form action="#" className="flex h-[50px] shrink  basis-full  gap-3 laptop:basis-[565px]">
        <Input
          className="rounded-md border-2 border-white  bg-transparent"
          clearInput={clearInput}
          inputClassName="placeholder:text-white"
          placeholder="Your Email"
          type="email"
          value={inputValue}
          onChange={handleChange}
        />
        <Button className="max-w-[130px] tablet:max-w-[150px]" type="submit">
          Subscribe
        </Button>
      </form>
    </section>
  );
};
