"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { ArrowIcon } from "@/components/ui/icons";

interface BreadCrumbsProps {
  homeElement?: React.ReactNode;
  separator?: React.ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
}

export const BreadCrumbs: React.FC<BreadCrumbsProps> = ({
  homeElement = "Home",
  separator = <ArrowIcon className="-rotate-90 text-blue" />,
  containerClasses = "flex items-center text-[14px] mb-2 tablet:mb-5",
  listClasses = "hover:underline",
  activeClasses = "text-blue",
  capitalizeLinks = true
}) => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  return (
    <div>
      <ol className={containerClasses}>
        <li className={listClasses}>
          <Link href="/">{homeElement}</Link>
        </li>
        {pathNames.length > 0 && separator}
        {pathNames.map((link, index) => {
          const href = `/${pathNames.slice(0, index + 1).join("/")}`;
          const itemClasses = paths === href ? `${listClasses} ${activeClasses}` : listClasses;
          const itemLink = capitalizeLinks
            ? link[0].toUpperCase() + link.slice(1, link.length)
            : link;
          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                <Link href={href}>{itemLink}</Link>
              </li>
              {pathNames.length !== index + 1 && separator}
            </React.Fragment>
          );
        })}
      </ol>
    </div>
  );
};
