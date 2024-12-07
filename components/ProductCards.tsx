"use client";
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { BiBullseye, BiHeart, BiStar } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  name: string;
  price: number;
  rating: number;
  imageSrc: string;
  Stars?: number;
  emptyStars?: number;
  reviews?: number;
  offValue?: number;
}

const ProductCards = ({
  name,
  price,
  Stars = 0,
  emptyStars = 0,
  imageSrc,
  reviews = 0,
  offValue = 0,
}: ProductCardProps) => {
  const router = useRouter();
  return (
    <div
      className="h-fit w-[300px] space-y-2 cursor-pointer"
      onClick={() => {
        router.push("/productpage");
      }}
    >
      <div className="h-[250px] w-full bg-gray-200 p-5 flex items-center justify-center relative">
        <div className="bg-red-500 w-fit rounded-md flex items-center justify-center py-1 px-2 top-1 left-1 absolute">
          <h1 className="text-white text-xs">-{offValue}%</h1>
        </div>
        <div className="absolute top-3 right-3 space-y-2">
          <div className="bg-white w-fit rounded-full flex items-center justify-center  p-1">
            <BiHeart className="text-2xl cursor-pointer" />
          </div>
          <div className="bg-white w-fit rounded-full flex items-center justify-center  p-1">
            <BiBullseye className="text-2xl cursor-pointer" />
          </div>
        </div>
        <img src={imageSrc} alt={name} className="object-cover" />
      </div>
      <h1 className="text-xl font-bold">{name}</h1>
      <p className="font-bold">${price}</p>
      <div className="flex gap-2 items-center">
        <div className="flex items-center">
          {Array(Stars)
            .fill(0)
            .map((_, i) => (
              <BsStarFill key={i} />
            ))}
          {Array(emptyStars)
            .fill(0)
            .map((_, i) => (
              <BiStar key={i} />
            ))}
        </div>
        <h1 className="text-gray-400">({reviews})</h1>
      </div>
    </div>
  );
};

export default ProductCards;
