"use client";

import { notFound } from "next/navigation";
import React from "react";

import { ProductCard } from "@/components";
import { ProductCardSkelleton } from "@/components/common/ProductCard/ProductCardSkelleton";
import { useFilterProductsQuery } from "@/graphql";
import { useAppSelector } from "@/store/store";

export const FilteredProducts: React.FunctionComponent = () => {
  const { price } = useAppSelector((state) => state.filters);
  const { data, loading, refetch } = useFilterProductsQuery({
    notifyOnNetworkStatusChange: true
  });
  const selectedBrands = useAppSelector((state) => state.filters.brands);

  React.useEffect(() => {
    refetch({
      maxPrice: price.max,
      minPrice: price.min,
      selectedBrands: selectedBrands.length ? selectedBrands : undefined
    }).catch(notFound);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [price, selectedBrands]);

  if (data?.products.data.length === 0) return <div>No products found</div>;

  if (loading)
    return Array.from({ length: 4 }).map((_, index) => <ProductCardSkelleton key={index} />);

  return (
    <div className="grid w-full grid-cols-4">
      {data?.products.data.map((product) => (
        <ProductCard key={product.id} isLoading={loading} product={product} />
      ))}
    </div>
  );
};
