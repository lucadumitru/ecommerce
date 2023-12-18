"use client";

import { useState } from "react";

import { FavouriteIcon, RoundButton } from "@/components/ui";

export const FavouriteButton = () => {
  const [isFavourite, setIsFavourite] = useState(false);
  return (
    <RoundButton
      icon={
        <FavouriteIcon
          className={`${isFavourite && "fill-blue text-blue"}`}
          height={22}
          width={22}
        />
      }
      onClick={() => setIsFavourite(!isFavourite)}
    />
  );
};
