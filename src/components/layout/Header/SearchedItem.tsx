import Image from "next/image";
import Link from "next/link";

import type { SearchProductsQuery } from "@/graphql";

interface SearchedItemProps {
  onClick?: () => void;
  product: SearchProductsQuery["products"]["data"][0];
}

export const SearchedItem: React.FC<SearchedItemProps> = ({ product, onClick }) => (
  <Link
    className="flex w-full items-start gap-3 p-2"
    href={`/${product.attributes.slug}`}
    onClick={onClick}
  >
    <Image
      alt={product.attributes.name}
      className="hidden tablet:block"
      height={50}
      src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${product.attributes.productPreviewImg.data.attributes.url}`}
      width={50}
    />
    <div>
      <div>
        <span className="hidden tablet:block">{product.attributes.name}</span>
        <span className="block tablet:hidden">
          {product.attributes.name.length > 20
            ? `${product.attributes.name.slice(0, 20)}...`
            : product.attributes.name}
        </span>
      </div>
      <div />
      <div className="hidden font-bold tablet:block">
        ${product.attributes.discountPrice ?? product.attributes.price}
      </div>
    </div>
  </Link>
);
