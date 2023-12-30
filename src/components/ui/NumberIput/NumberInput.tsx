"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { ArrowIcon } from "@/components/ui/icons";
import { changeProductQty } from "@/store/features/cart/cartSlice";

interface NumberInputProps {
  startValue?: number;
  minValue?: number;
  maxValue?: number;
  productId?: number;
}

export const NumberInput: React.FC<NumberInputProps> = ({
  startValue = 1,
  minValue = 1,
  maxValue = 99,
  productId
}) => {
  const [inputNumber, setInputNumber] = useState(startValue);
  const dispatch = useDispatch();
  const handdleIncreaseNumber = () => {
    if (maxValue !== inputNumber) {
      setInputNumber(inputNumber + 1);
    }
  };
  const handdleDecreaseNumber = () => {
    if (minValue !== inputNumber) {
      setInputNumber(inputNumber - 1);
    }
  };
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = +e.target.value;
    if (newValue >= minValue && newValue <= maxValue) {
      setInputNumber(newValue);
    }
  };
  useEffect(() => {
    if (productId) {
      dispatch(changeProductQty({ productId, quantity: inputNumber }));
    }
  }, [inputNumber, dispatch, productId]);

  return (
    <div className="min-w-14 flex items-center rounded-[6px] bg-dark-white p-2">
      <input
        className="h-full w-full bg-transparent px-2 font-[14px] font-semibold"
        value={inputNumber}
        onChange={handleChangeInput}
      />
      <div className="flex flex-col items-center justify-center text-black">
        <button
          aria-label="number increase"
          className="group disabled:pointer-events-none disabled:opacity-30"
          disabled={inputNumber >= maxValue}
          onClick={handdleIncreaseNumber}
        >
          <ArrowIcon
            className="rotate-180 transition group-hover:text-blue"
            height={20}
            width={20}
          />
        </button>
        <button
          aria-label="number decrease"
          className="group disabled:pointer-events-none disabled:opacity-30"
          disabled={inputNumber <= minValue}
          onClick={handdleDecreaseNumber}
        >
          <ArrowIcon className="transition group-hover:text-blue" height={20} width={20} />
        </button>
      </div>
    </div>
  );
};
