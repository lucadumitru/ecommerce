"use client";

import Link from "next/link";

import { Cart } from "@/components/common";
import { ButtonLink, Container, LogoIcon, Search, UserIcon } from "@/components/ui";
import { BurgerMenuIcon } from "@/components/ui/icons/BurgerMenuIcon";
import { useAppSelector } from "@/store/store";

export const Header = () => {
  const cartProducts = useAppSelector((state) => state.cartProducts.cartProducts);
  return (
    <header className="laptop:border:ligh-gray  bg-dark-blue py-4 laptop:border-b laptop:bg-white ">
      <Container>
        <div className="relative flex items-center justify-between gap-2">
          <div className="ml-2 mr-5 laptop:hidden">
            <BurgerMenuIcon className="text-white" />
          </div>
          <Link className="hidden tablet:mr-4 laptop:block" href="/">
            <LogoIcon className="text-dark-blue transition hover:text-blue" IconVariants="big" />
          </Link>
          <Link className="absolute -top-[50px] tablet:mr-12 laptop:hidden" href="/">
            <LogoIcon bg className="text-white" IconVariants="small" />
          </Link>
          <div className="relative flex grow items-center pl-2 pr-16 laptop:h-[60px]">
            <nav className="hidden items-center gap-x-5 laptop:flex">
              <ul className="flex flex-wrap gap-x-6 font-semibold">
                <li>Laptops</li>
                <li>Desktop PCs</li>
                <li>Networking Devices</li>
                <li>Printers & Scanners</li>
                <li>PC Parts</li>
                <li>All Other Products</li>
                <li>Repairs</li>
              </ul>
              <div>
                <ButtonLink href="/" variant="outline">
                  Our Deals
                </ButtonLink>
              </div>
            </nav>
            <Search />
          </div>
          <Cart cartProducts={cartProducts} />
          <UserIcon className="text-white laptop:text-black" />
        </div>
      </Container>
    </header>
  );
};
