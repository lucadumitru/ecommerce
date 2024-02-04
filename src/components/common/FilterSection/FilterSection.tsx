"use client";

import {
  Checkbox,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Stack,
  CheckboxGroup
} from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";

import { addBrand, setMaxPrice, setMinPrice } from "@/store/features/filter/filterSlice";
import { useAppSelector } from "@/store/store";

interface FilterSectionProps {
  brands?: string[];
  className?: string;
  endPrice?: number;
  startPrice?: number;
}

export const FilterSection: React.FC<FilterSectionProps> = ({
  brands,
  startPrice,
  endPrice,
  className
}) => {
  const dispatch = useDispatch();
  const [startValue, setStartValue] = React.useState(startPrice as number);
  const [endValue, setEndValue] = React.useState(endPrice as number);
  const startInputRef = React.useRef<HTMLInputElement>(null);
  const endInputRef = React.useRef<HTMLInputElement>(null);
  const selectedBrands = useAppSelector((state) => state.filters.brands);
  return (
    <section className={` p-2 ${className || ""}`}>
      <h2 className="mb-3 text-center font-bold">Filters</h2>
      <div className="flex flex-col gap-3 divide-y">
        <div className="p-2">
          <div className="mb-3 font-medium">Price</div>
          <div className="mb-3">
            <RangeSlider
              // eslint-disable-next-line jsx-a11y/aria-proptypes
              aria-label={["min", "max"]}
              max={endPrice}
              min={startPrice}
              value={[startValue, endValue]}
              onChange={([start, end]) => {
                setStartValue(start);
                setEndValue(end);
              }}
              onChangeEnd={([start, end]) => {
                dispatch(setMinPrice(start));
                dispatch(setMaxPrice(end));
              }}
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>
          </div>
          <div className="flex items-center justify-between gap-2">
            <input
              ref={startInputRef}
              className="max-w-[100px] rounded-md bg-dark-white p-3 text-center font-semibold"
              type="number"
              value={startValue}
              onChange={() => {
                setStartValue(Number(startInputRef.current?.value));
                dispatch(setMinPrice(Number(startInputRef.current?.value)));
              }}
            />
            -
            <input
              ref={endInputRef}
              className="after:va max-w-[100px] rounded-md bg-dark-white p-3 text-center font-semibold"
              type="number"
              value={endValue}
              onChange={() => {
                setEndValue(Number(endInputRef.current?.value));
                dispatch(setMaxPrice(Number(endInputRef.current?.value)));
              }}
            />
          </div>
        </div>
        <div className="p-2">
          <div className="mb-3 font-medium">Brands</div>
          <CheckboxGroup colorScheme="blue" defaultValue={selectedBrands}>
            <Stack direction="column" spacing={[1, 5]}>
              {brands?.map((brand, index) => (
                <Checkbox
                  key={index}
                  value={brand}
                  onChange={(e) => dispatch(addBrand(e.target.value))}
                >
                  {brand}
                </Checkbox>
              ))}
            </Stack>
          </CheckboxGroup>
        </div>
      </div>
    </section>
  );
};
