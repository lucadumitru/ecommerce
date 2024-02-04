import { Skeleton } from "@chakra-ui/react";

export const ProductCardSkelleton = () => (
  <article className="group relative flex grow flex-col gap-3 overflow-hidden p-6">
    <Skeleton height="15px" width="80px" />
    <Skeleton height="140px" />
    <div className="flex justify-between gap-2">
      <Skeleton height="20px" w="40%" />
      <Skeleton height="20px" w="40%" />
    </div>
    <Skeleton height="15px" />
    <Skeleton height="15px" />
    <div className="mt-6 flex justify-between gap-2">
      <Skeleton height="20px" w="40%" />
      <Skeleton height="20px" w="40%" />
    </div>
  </article>
);
