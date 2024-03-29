"use client";

import Image from "next/image";

export type PaymentItem = {
  img: string;
  label: string;
};

interface PaymentMethodsProps {
  className?: string;
  paymentItems: PaymentItem[];
}

export const PaymentMethods: React.FC<PaymentMethodsProps> = ({ paymentItems, className }) => (
  <div className={`flex items-center justify-center gap-2 ${className?.length ? className : ""}`}>
    {paymentItems.map((paymentItem, index) => (
      <Image
        key={index}
        alt={`${paymentItem.label} img`}
        className=" h-[22px] w-[34px] object-contain"
        height={22}
        src={paymentItem.img}
        width={34}
      />
    ))}
  </div>
);
