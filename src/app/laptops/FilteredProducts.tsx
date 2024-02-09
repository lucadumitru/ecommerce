"use client";

import { notFound } from "next/navigation";
import React from "react";

import { ProductCard } from "@/components";
import { ProductCardSkelleton } from "@/components/common/ProductCard/ProductCardSkelleton";
import { useFilterProductsQuery } from "@/graphql";
import { useAppSelector } from "@/store/store";

interface FilteredProductsProps {
  endPrice?: number;
  startPrice?: number;
}

export const FilteredProducts: React.FC<FilteredProductsProps> = ({ startPrice, endPrice }) => {
  const { price } = useAppSelector((state) => state.filters);
  const selectedBrands = useAppSelector((state) => state.filters.brands);

  const { data, loading, refetch } = useFilterProductsQuery({
    notifyOnNetworkStatusChange: true,
    variables: {
      maxPrice: endPrice || 0,
      minPrice: startPrice || 0
    }
  });

  React.useEffect(() => {
    if (price.max && price.min) {
      refetch({
        maxPrice: price.max,
        minPrice: price.min
      }).catch(notFound);
    }
    refetch({
      selectedBrands: selectedBrands.length ? selectedBrands : undefined
    }).catch(notFound);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [price, selectedBrands]);

  if (data?.products.data.length === 0) return <div>No products found</div>;

  return (
    <div className="grid w-full grid-flow-row grid-cols-4">
      {loading
        ? Array.from({ length: 8 }).map((_, index) => <ProductCardSkelleton key={index} />)
        : data?.products.data.map((product) => (
            <ProductCard key={product.id} isLoading={loading} product={product} />
          ))}
    </div>
  );
};
