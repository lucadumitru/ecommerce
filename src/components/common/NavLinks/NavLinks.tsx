import Link from "next/link";

import type { ComponentUiLink } from "@/graphql/__generated__";

interface NavLinksProps {
  navLinks: Readonly<ComponentUiLink[]>;
}

export const NavLinks: React.FC<NavLinksProps> = ({ navLinks }: NavLinksProps) => (
  <ul className="flex flex-wrap gap-x-6 font-semibold">
    {navLinks.map((link) => (
      <li key={link.id}>
        <Link href={link.href}>{link.label}</Link>
      </li>
    ))}
  </ul>
);
