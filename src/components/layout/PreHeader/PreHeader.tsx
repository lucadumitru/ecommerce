import Link from "next/link";

import { ShopInfo } from "@/components";
import { Container, FacebookIcon, InstagramIcon } from "@/components/ui";

export const PreHeader = () => (
  <div className="bg-black">
    <Container>
      <div className="flex min-h-[40px] items-center justify-between gap-2 py-2 text-[10px] font-medium text-white mobile:text-xs">
        <span className="ml-20 ml-[70px] laptop:ml-0">
          <ShopInfo />
        </span>
        <div className=" flex gap-2  text-light-gray">
          <span className="hidden laptop:block">
            Visit our showroom in 1234 Street Adress City Address, 1234
          </span>
          <Link
            className="relative whitespace-nowrap text-white before:pointer-events-none before:absolute before:-bottom-1 before:h-0.5 before:w-full before:rounded-full before:bg-white before:transition-all hover:before:w-0"
            href="!#"
          >
            Contact Us
          </Link>
        </div>
        <div className="hidden items-center gap-2 laptop:flex">
          <div className="mr-2">
            <span className="mr-1">Call us:</span>
            <Link className="hover:underline" href="tel:0012345678">
              (00) 1234 5678
            </Link>
          </div>
          <Link className="group" href="!#">
            <FacebookIcon className="transition-all group-hover:text-dark-gray" />
          </Link>
          <Link className="group" href="!#">
            <InstagramIcon className="transition-all group-hover:text-dark-gray" />
          </Link>
        </div>
      </div>
    </Container>
  </div>
);
