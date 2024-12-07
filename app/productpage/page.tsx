"use client"
/* eslint-disable @next/next/no-img-element */
import ProductCards from "@/components/ProductCards";
import React from "react";
import { BiHeart, BiRefresh, BiSolidTruck, BiStar } from "react-icons/bi";
import { useRouter } from "next/navigation";

const ProductPage = () => {
  const router = useRouter();
  return (
    <div className="min-h-dvh w-screen">
      <div className="h-full container mx-auto">
        <h1 className="text-s text-black/50 mt-12">
          Home / <span className="text-black">Product</span> /{" "}
          <span>HAVIC HV G-92 Gamepad</span>
        </h1>

        <div className="mt-24 w-full flex flex-col lg:flex-row gap-6">
          <div className="flex flex-col-reverse lg:flex-row gap-3 w-full items-center lg:w-fit">
            <div className="flex flex-wrap lg-flex-nowrap lg:flex-col gap-2 lg:gap-4 w-full lg:w-fit justify-center lg:justify-start">
              <div className="h-[138px] w-[170px] bg-[#F5F5F5] flex items-center justify-center">
                <img src="/images/c1.png" alt="" />
              </div>
              <div className="h-[138px] w-[170px] bg-[#F5F5F5] flex items-center justify-center">
                <img src="/images/c2.png" alt="" />
              </div>
              <div className="h-[138px] w-[170px] bg-[#F5F5F5] flex items-center justify-center">
                <img src="/images/c3.png" alt="" />
              </div>
              <div className="h-[138px] w-[170px] bg-[#F5F5F5] flex items-center justify-center">
                <img src="/images/c4.png" alt="" />
              </div>
            </div>
            <div className="h-[600px] w-[500px] bg-[#F5F5F5] flex items-center justify-center">
              <img src="/images/cmain.png" alt="" />
            </div>
          </div>
          <div className="space-y-3 px-2 lg:px-0">
            <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold">
              Havic HV G-92 Gamepad
            </h1>
            <div className="flex gap-2 items-center">
              <BiStar />
              <BiStar />
              <BiStar />
              <BiStar />
              <BiStar />
              (150 Reviews) | <span className="text-green-600">In Stock</span>
            </div>
            <h1 className="text-3xl font-semibold">$192.00</h1>
            <p className="border-b border-black/30 pb-3">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>

            <div className="flex gap-5 items-center">
              <h1>Colors:</h1>
              <div className="flex gap-1">
                <div className="h-4 w-4 rounded-full bg-blue-200"></div>
                <div className="h-4 w-4 rounded-full bg-red-300"></div>
              </div>
            </div>

            <div className="flex gap-5 items-center mb-12">
              <h1>Size:</h1>
              <div className="h-8 w-8 rounded-lg border border-black/30 flex items-center justify-center">
                <h1>XS</h1>
              </div>
              <div className="h-8 w-8 rounded-lg border border-black/30 flex items-center justify-center">
                <h1>S</h1>
              </div>
              <div className="h-8 w-8 rounded-lg border border-black/30 flex items-center justify-center">
                <h1>M</h1>
              </div>
              <div className="h-8 w-8 rounded-lg border border-black/30 flex items-center justify-center">
                <h1>L</h1>
              </div>
              <div className="h-8 w-8 rounded-lg border border-black/30 flex items-center justify-center">
                <h1>XL</h1>
              </div>
            </div>

            <div className="flex gap-3 items-center pt-3">
              <div className="flex items-center">
                <div className="border border-black py-1 px-3">-</div>
                <div className="border border-black py-1 px-6">2</div>
                <div className="border border-black py-1 px-3 bg-red-500">
                  +
                </div>
              </div>

              <button className="bg-red-500 text-white w-fit py-2 px-4 rounded-lg" onClick={() => router.push("/cart")}>
                Buy Now
              </button>

              <div className="border border-black py-1 px-1">
                <BiHeart className="text-xxl" />
              </div>
            </div>

            <div className="flex flex-col w-full items-center mt-12">
              <div className="border w-full border-black p-6 flex items-center justify-center">
                <BiSolidTruck className="text-2xl mr-2" />
                <h1 className="text-sm">Free Delivery</h1>
              </div>
              <div className="border w-full border-black p-6 flex items-center justify-center">
                <BiRefresh className="text-2xl mr-2" />
                <h1 className="text-sm">Free Return Delivery</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-24">
          <div className="bg-red-500 h-[40px] w-[20px] rounded-lg"></div>
          <h1 className="text-2xl font-semibold text-red-500">Related Item</h1>
        </div>

        <div className="flex items-center justify-between w-full mt-12">
          <div className="flex items-center flex-wrap justify-center lg:justify-start gap-2  transition-all duration-500">
            <ProductCards
              name="HAVIT HV-G92 Gamepad"
              price={120}
              Stars={5}
              emptyStars={0}
              rating={0}
              imageSrc={"/images/controller.png"}
              reviews={88}
              offValue={-40}
            />
            <ProductCards
              name="AK-900 Wired Keyboard"
              price={960}
              Stars={4}
              emptyStars={1}
              rating={0}
              imageSrc={"/images/key.png"}
              reviews={75}
              offValue={-35}
            />
            <ProductCards
              name="IPS LCD Gaming Monitor"
              price={370}
              Stars={5}
              emptyStars={0}
              rating={0}
              imageSrc={"/images/mon.png"}
              reviews={99}
              offValue={-30}
            />
            <ProductCards
              name="S-Series Comfort Chair"
              price={375}
              Stars={5}
              emptyStars={0}
              rating={0}
              imageSrc={"/images/chair.png"}
              reviews={99}
              offValue={-25}
            />
            <ProductCards
              name="HAVIT HV-G92 Gamepad"
              price={120}
              Stars={5}
              emptyStars={0}
              rating={0}
              imageSrc={"/images/chair.png"}
              reviews={88}
              offValue={-40}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
