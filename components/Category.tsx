/* eslint-disable @next/next/no-img-element */
import React from "react";
import ProductCards from "./ProductCards";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const CategoryCard = ({
  title,
  imgSrc,
  isBg,
}: {
  title: string;
  imgSrc: string;
  isBg?: boolean;
}) => {
  return (
    <div
      className={`w-[200px] h-[200px] flex flex-col justify-center gap-8 items-center cursor-pointer ${
        isBg && "bg-red-500"
      }`}
    >
      <img src={imgSrc} alt={title} />
      <h1 className="text-xl font-semibold">{title}</h1>
    </div>
  );
};

const Category = () => {
  return (
    <div className="w-full h-fit mt-24">
      <div className="container w-full h-full border-b pb-12 border-black/30 mx-auto">
        <div className="flex items-center gap-4">
          <div className="bg-red-500 h-[40px] w-[20px] rounded-lg"></div>
          <h1 className="text-2xl font-semibold text-red-500">
            {"Categories"}
          </h1>
        </div>

        <div className="flex items-center justify-between w-full mt-12">
          <div className="flex items-center gap-32">
            <h1 className="text-5xl font-semibold">Browse By Categories</h1>
          </div>

          <div className="flex items-center gap-2">
            <BiLeftArrow className="bg-gray-200 rounded-full p-2 text-5xl" />
            <BiRightArrow className="bg-gray-200 rounded-full p-2 text-5xl" />
          </div>
        </div>

        <div className="mt-12 overflow-hidden">
          <div className="flex flex-wrap items-center justify-center gap-12 transition-all duration-500">
            {/* category cards */}
            <CategoryCard title="Phone" imgSrc="/images/phone.png" />
            <CategoryCard title="Computers" imgSrc="/images/comp.png" />
            <CategoryCard title="SmartWatch" imgSrc="/images/watch.png" />
            <CategoryCard title="Camera" isBg imgSrc="/images/cam.png" />
            <CategoryCard title="Headphones" imgSrc="/images/head.png" />
            <CategoryCard title="Gaming" imgSrc="/images/pad.png" />
          </div>
        </div>
        <div className="w-full flex justify-center mt-24">
          <button className="w-fit bg-red-500 py-3 px-16 rounded-lg text-white">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
