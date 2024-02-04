import type { StaticImageData } from "next/image";

import type { ProductFragment } from "@/graphql/requests/__generated__";

export type Product = {
  attributes: ProductFragment;
  id: string;
};
export type TInfoItem = {
  icon: StaticImageData | string;
  label: string;
  text: string;
};
