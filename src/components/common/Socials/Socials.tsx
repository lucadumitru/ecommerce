import Link from "next/link";

import { FacebookIcon, InstagramIcon } from "@/components/ui/icons";

interface SocialsProps {
  className?: string;
}

export const Socials: React.FC<SocialsProps> = ({ className }) => (
  <div className={`flex items-center gap-2 ${className?.length ? className : ""}`}>
    <Link className="group" href="!#">
      <FacebookIcon className="transition-all group-hover:text-dark-gray" />
    </Link>
    <Link className="group" href="!#">
      <InstagramIcon className="transition-all group-hover:text-dark-gray" />
    </Link>
  </div>
);
