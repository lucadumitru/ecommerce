"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import { BreadCrumbs } from "@/components/common/BreadCrumbs/BreadCrumbs";
import { Button, Container, NumberInput, PayPalIcon, Typography } from "@/components/ui";
import type { GetProductQuery } from "@/graphql/__generated__";
import { addProduct } from "@/store/features/cart/cartSlice";

type ProductSectionData = GetProductQuery["products"]["data"][0];

interface ProductSectionProps {
  data: { product: ProductSectionData };
}

export const ProductSection: React.FC<ProductSectionProps> = ({ data }) => {
  const { product } = data;
  const [inputValue, setInputValue] = useState(1);
  const productImgUrl = product.attributes.productPreviewImg.data.attributes.url;
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("about");
  const breadcrumpsLinks = [`${product.attributes.category.data.attributes.title}`];

  const handleClick = useCallback((activeTab: string) => {
    setActiveTab(activeTab);
  }, []);

  const handleInputChange = (inputValue: number) => {
    setInputValue(inputValue);
  };

  const addToCart = () => {
    dispatch(addProduct({ product, quantity: inputValue }));
  };
  return (
    <section>
      <div className="mobile:border-b mobile:border-light-gray">
        <Container className="flex h-[80px] items-center justify-between gap-2 laptop:h-[100px]">
          <div className="flex items-center gap-7">
            <button
              data-button="about"
              className={`${
                activeTab === "about" && "!text-black before:!w-full"
              } relative whitespace-nowrap text-[14px] font-semibold text-gray-400 before:absolute  before:bottom-0 before:h-[2px] before:w-0 before:rounded-full before:bg-blue before:transition-all hover:before:w-full`}
              onClick={() => handleClick("about")}
            >
              About Product
            </button>
            <button
              data-button="details"
              className={`${
                activeTab === "details" && "!text-black before:!w-full"
              } relative whitespace-nowrap text-[14px] font-semibold text-gray-400 before:absolute before:bottom-0 before:h-[2px] before:w-0 before:rounded-full before:bg-blue before:transition-all hover:before:w-full`}
              onClick={() => handleClick("details")}
            >
              Details
            </button>
          </div>
          <div className="gap flex items-center gap-3">
            <div className="text-center">
              On Sale from{" "}
              <span className=" font-semibold">
                $
                {product.attributes.discountPrice?.toFixed(2) ||
                  product.attributes.price?.toFixed(2)}
              </span>
            </div>
            <div className="w-full max-w-[75px]">
              <NumberInput onValueChange={handleInputChange} />
            </div>
            <div className="flex h-[50px] gap-2">
              <Button onClick={addToCart}>Add to Cart</Button>
              <Button className="bg-orange hover:bg-yellow" startIcon={<PayPalIcon />} />
            </div>
          </div>
        </Container>
      </div>
      <div className="flex gap-2">
        <div className="flex w-[60%] justify-end bg-dark-white  p-[3.5%] pl-[15px]">
          <div className="flex w-full max-w-[567px] flex-col gap-3">
            <BreadCrumbs customLinks={breadcrumpsLinks} />
            <Typography tag="h1" variant="title-2">
              {product.attributes.shortName}
            </Typography>
            {activeTab === "about" && <div>{product.attributes.name}</div>}
            {activeTab === "details" && <div>{product.attributes.description}</div>}
            <div className="text-[12px] font-semibold">
              Have any questions?{" "}
              <Link className="font-normal text-dark-blue hover:underline" href="/contact-us">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[40%] p-[3.5%] pr-[15px]">
          <Image
            alt={`${product.attributes.name} img`}
            height={450}
            src={`${productImgUrl}`}
            width={450}
          />
        </div>
      </div>
    </section>
  );
};
