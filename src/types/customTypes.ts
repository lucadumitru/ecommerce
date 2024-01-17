import type { StaticImageData } from "next/image";

import type { ProductFragment } from "@/graphql/__generated__";

export type Product = {
  id: string;
  attributes: ProductFragment;
};
export type TInfoItem = {
  icon: StaticImageData | string;
  label: string;
  text: string;
};
