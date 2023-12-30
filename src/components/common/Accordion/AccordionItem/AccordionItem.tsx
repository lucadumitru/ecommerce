"use client";

import { useState } from "react";

import { ArrowIcon } from "@/components/ui/icons";

interface AccordionItemProps {
  title: string;
  body: string | React.ReactNode;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ title, body }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col overflow-hidden border-b">
      <button className="mb-2 flex w-full justify-between font-bold" onClick={() => setOpen(!open)}>
        {title}
        <span>
          <ArrowIcon className={`${open ? "rotate-180 " : ""} transition`} />
        </span>
      </button>
      <div className={`${open ? "  max-h-[600px]" : " max-h-0"} h-auto transition-all`}>{body}</div>
    </div>
  );
};
