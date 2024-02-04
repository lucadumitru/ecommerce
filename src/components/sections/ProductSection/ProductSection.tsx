"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import { BreadCrumbs } from "@/components/common/BreadCrumbs/BreadCrumbs";
import { Button, Container, NumberInput, PayPalIcon, Typography } from "@/components/ui";
import type { GetProductQuery } from "@/graphql/requests/__generated__";
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

  const tabsSection = (
    <>
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
    </>
  );

  const buySection = (
    <>
      <div className="text-center">
        On Sale from{" "}
        <span className=" font-semibold">
          ${product.attributes.discountPrice?.toFixed(2) || product.attributes.price?.toFixed(2)}
        </span>
      </div>
      <div className="w-full max-w-[75px]">
        <NumberInput onValueChange={handleInputChange} />
      </div>
      <div className="flex h-[50px] gap-2">
        <Button onClick={addToCart}>Add to Cart</Button>
        <Button className="bg-orange hover:bg-yellow" startIcon={<PayPalIcon />} />
      </div>
    </>
  );
  return (
    <section>
      <div className="hidden mobile:border-b mobile:border-light-gray tablet:block">
        <Container className="flex min-h-[80px] flex-wrap items-center justify-between gap-2 laptop:h-[100px]">
          <div className="flex items-center gap-7">{tabsSection}</div>
          <div className="gap flex items-center gap-3">{buySection}</div>
        </Container>
      </div>
      <div className="flex flex-col-reverse  gap-2 px-[15px] pb-5 tablet:flex-row tablet:p-0">
        <div className="mt-3 flex flex-col gap-3 tablet:hidden">
          <div className="flex h-[50px] gap-2">
            <NumberInput onValueChange={handleInputChange} />
            <Button onClick={addToCart}>Add to Cart</Button>
            <Button className="bg-orange hover:bg-yellow" startIcon={<PayPalIcon />} />
          </div>
          <div className="rounded-md  bg-dark-white p-3 text-center">
            On Sale from{" "}
            <span className="font-semibold">
              $
              {product.attributes.discountPrice?.toFixed(2) || product.attributes.price?.toFixed(2)}
            </span>
          </div>
        </div>
        <div className="flex tablet:w-[50%] tablet:justify-end  tablet:bg-dark-white tablet:pl-[15px]">
          <div className="flex w-full flex-col gap-3 tablet:max-w-[567px] tablet:px-10">
            <div className="mb-4 flex items-center gap-7 tablet:hidden">{tabsSection}</div>
            <div className="mt-5 hidden tablet:block">
              <BreadCrumbs customLinks={breadcrumpsLinks} />
            </div>
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
        <div className="flex justify-center p-[15px] tablet:w-[50%] tablet:justify-start tablet:p-[3.5%] tablet:pr-[15px]">
          <Image
            alt={`${product.attributes.name} img`}
            height={450}
            src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${productImgUrl}`}
            width={450}
          />
        </div>
      </div>
    </section>
  );
};
