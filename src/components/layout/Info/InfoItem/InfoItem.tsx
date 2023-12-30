import Image from "next/image";

import { Typography } from "@/components";
import type { TInfoItem } from "@/types";

interface InfoItemProps extends TInfoItem {
  iconClassName?: string;
}

export const InfoItem: React.FC<InfoItemProps> = ({ icon, label, text, iconClassName }) => (
  <div className="flex max-w-[265px] grow flex-col items-center justify-center ">
    <div
      className={`mb-6 flex h-[65px] w-[65px] items-center justify-center rounded-full bg-dark-blue text-white ${iconClassName}`}
    >
      <Image alt={`${label} icon`} height={30} src={icon} width={30} />
    </div>
    <div className="flex flex-col items-center justify-center gap-3">
      <Typography tag="h3" variant="title-4">
        {label}
      </Typography>
      <Typography className="text-center text-black-700" tag="p" variant="body-2">
        {text}
      </Typography>
    </div>
  </div>
);
