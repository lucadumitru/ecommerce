"use client";

/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable sort-keys */

import Link from "next/link";
import { useRef, useState, useEffect } from "react";

import { ArrowIcon, LocationIcon, TimeIcon } from "@/components/ui";

type ShopSchedule = {
  [key: string]: { hours: string };
};

export const ShopInfo = () => {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDate = new Date();
  const currentDay = daysOfWeek[currentDate.getDay()]; //
  const shopSchedule: ShopSchedule = {
    Monday: {
      hours: "9:00 AM - 5:30 PM"
    },
    Tuesday: {
      hours: "9:00 AM - 5:30 PM"
    },
    Wednesday: {
      hours: "9:00 AM - 5:30 PM"
    },
    Thursday: {
      hours: "9:00 AM - 5:30 PM"
    },
    Friday: {
      hours: "9:00 AM - 6:00 PM"
    },
    Saturday: {
      hours: "11:00 AM - 5:00 PM"
    },
    Sunday: {
      hours: "The shop is closed"
    }
  };
  const currentSchedule = shopSchedule[currentDay];
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        bodyRef.current &&
        buttonRef.current &&
        !bodyRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [open]);
  return (
    <div className="relative">
      <button ref={buttonRef} className="flex items-center gap-1 " onClick={() => setOpen(!open)}>
        {`${currentDay.slice(0, 3)}: ${currentSchedule.hours}`}
        <ArrowIcon className={`transition-all ${open ? "rotate-180" : "rotate-0"}`} />
      </button>
      <div
        ref={bodyRef}
        className={`absolute -bottom-1 z-10  flex translate-y-[100%] flex-col divide-y-2 overflow-hidden border-2 border-light-gray bg-white text-[13px] text-black transition-all mobile:min-w-[300px] ${
          open ? "visible max-h-[1000px] border-opacity-100" : "invisible max-h-0 border-opacity-0"
        }`}
      >
        <div className="flex items-start gap-3 px-5 py-2.5">
          <TimeIcon className="hidden text-blue mobile:block" />
          <div>
            <div className="mb-1 text-[12px]">We are open:</div>
            <div className="flex flex-col gap-1 text-[14px] font-semibold text-dark-gray">
              <div>
                Mon-Thu: <span className="text-black">9:00 AM - 5:30 PM</span>
              </div>
              <div>
                Fr: <span className="text-black">9:00 AM - 6:00 PM</span>
              </div>
              <div>
                Sat: <span className="text-black">11:00 AM - 5:00 PM</span>
              </div>
              <div>
                Sun: <span className="text-black">Closed</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3 px-5 py-2.5">
          <LocationIcon className="hidden text-blue mobile:block" />
          <div>
            <div className="mb-1 text-[12px]">Adress:</div>
            <Link className="hover:underline" href="#!">
              Street Adress, City Address, 1234
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-0.5 px-5 py-2.5">
          <div>
            Phones:{" "}
            <Link
              className="whitespace-nowrap text-dark-blue hover:underline"
              href="tel:0012345678"
            >
              (00) 1234 5678
            </Link>
          </div>
          <div>
            E-mail:{" "}
            <Link className="text-dark-blue hover:underline" href="mailto:shop@email.com">
              shop@email.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
