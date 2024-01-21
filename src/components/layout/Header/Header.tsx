import Link from "next/link";

import { Cart, NavLinks } from "@/components/common";
import { ButtonLink, Container, LogoIcon, Search, UserIcon } from "@/components/ui";
import { BurgerMenuIcon } from "@/components/ui/icons/BurgerMenuIcon";
import { gql } from "@/graphql/client";

export const revalidate = 600;

export const Header = async () => {
  const data = await gql.getNavLinks();
  const { navLinks } = data.navLinks.data[0].attributes;
  return (
    <header className="bg-dark-blue  py-4 laptop:border-b laptop:border-light-gray laptop:bg-white ">
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
              <NavLinks navLinks={navLinks} />
              <div>
                <ButtonLink href="/" variant="outline">
                  Our Deals
                </ButtonLink>
              </div>
            </nav>
            <Search />
          </div>
          <Cart />
          <UserIcon className="text-white laptop:text-black" />
        </div>
      </Container>
    </header>
  );
};
