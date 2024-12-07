/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BiArrowToRight, BiLeftArrow, BiRightArrow } from "react-icons/bi";
import ProductCards from "./ProductCards";

const Enhance = () => {
  return (
    <div className="container h-fit mx-auto mt-24">
      <div className="w-full h-[500px] bg-black flex flex-col md:flex-row justify-between ">
        <div className="w-full h-2/4 md:w-2/4 md:h-full p-10 space-y-1 md:space-y-3 lg:space-y-5 text-white">
          <h1 className="text-[#00ff66] font-bold">Categories</h1>
          <h1 className="font-semibold text-xl md:text-3xl lg:text-5xl">
            Enhance Your <br /> Music Experience
          </h1>

          <div className="flex  gap-10">
            <div className="flex flex-col lg:flex-row items-center justify-center  bg-white rounded-full text-black w-[50px] h-[50px]">
              <h1 className="text-xs font-bold">5</h1>
              <p className="text-xs font-semibold">Days</p>
            </div>
            <div className="flex flex-col items-center justify-center  bg-white rounded-full text-black w-[50px] h-[50px]">
              <h1 className="text-xs font-bold">23</h1>
              <p className="text-xs font-semibold">Hours</p>
            </div>
            <div className="flex flex-col items-center justify-center  bg-white rounded-full text-black w-[50px] h-[50px]">
              <h1 className="text-xs font-bold">59</h1>
              <p className="text-xs font-semibold">Min</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-white rounded-full text-black w-[50px] h-[50px]">
              <h1 className="text-xs font-bold">35</h1>
              <p className="text-xs font-semibold">Sec</p>
            </div>
          </div>

          <button className="outline-none bg-[#00ff66] rounded-md py-4 px-8 text-white flex items-center gap-1">
            Buy Now
            <BiArrowToRight />
          </button>
        </div>
        <div className="w-2/4 h-full flex items-center justify-center">
          <img src="/images/box.png" alt="" className="object-cover" />
        </div>
      </div>

      {/* explore our products */}

      <div className="mt-32">
        <div className="flex items-center gap-4">
          <div className="bg-red-500 h-[40px] w-[20px] rounded-lg"></div>
          <h1 className="text-2xl font-semibold text-red-500">
            {"This Month"}
          </h1>
        </div>

        <div className="flex items-center justify-between w-full mt-12">
          <div className="flex items-center gap-32">
            <h1 className="text-5xl font-semibold">Best Selling Products</h1>
          </div>

          <div className="flex items-center gap-2">
            <BiLeftArrow className="bg-gray-200 rounded-full p-2 text-5xl" />
            <BiRightArrow className="bg-gray-200 rounded-full p-2 text-5xl" />
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="flex items-center gap-2 flex-wrap justify-center transition-all duration-500">
          <ProductCards
            name="The North Coat"
            price={260}
            Stars={5}
            emptyStars={0}
            rating={0}
            imageSrc={"/images/jacket.png"}
            reviews={65}
            offValue={-40}
          />
          <ProductCards
            name="Gucci duffle bag"
            price={960}
            Stars={4}
            emptyStars={1}
            rating={0}
            imageSrc={"/images/bag.png"}
            reviews={65}
            offValue={-35}
          />
          <ProductCards
            name="RGB liquid CPU cooler"
            price={160}
            Stars={4}
            emptyStars={1}
            rating={0}
            imageSrc={"/images/fan.png"}
            reviews={65}
            offValue={-30}
          />
          <ProductCards
            name="Small BookShelf"
            price={360}
            Stars={5}
            emptyStars={0}
            rating={0}
            imageSrc={"/images/shelf.png"}
            reviews={99}
            offValue={-25}
          />
          <ProductCards
            name="The North Coat"
            price={260}
            Stars={5}
            emptyStars={0}
            rating={0}
            imageSrc={"/images/jacket.png"}
            reviews={65}
            offValue={-40}
          />
          <ProductCards
            name="Gucci duffle bag"
            price={960}
            Stars={4}
            emptyStars={1}
            rating={0}
            imageSrc={"/images/bag.png"}
            reviews={65}
            offValue={-35}
          />
          <ProductCards
            name="RGB liquid CPU cooler"
            price={160}
            Stars={4}
            emptyStars={1}
            rating={0}
            imageSrc={"/images/fan.png"}
            reviews={65}
            offValue={-30}
          />
          <ProductCards
            name="Small BookShelf"
            price={360}
            Stars={5}
            emptyStars={0}
            rating={0}
            imageSrc={"/images/shelf.png"}
            reviews={99}
            offValue={-25}
          />
          <ProductCards
            name="RGB liquid CPU cooler"
            price={160}
            Stars={4}
            emptyStars={1}
            rating={0}
            imageSrc={"/images/fan.png"}
            reviews={65}
            offValue={-30}
          />
          <ProductCards
            name="Small BookShelf"
            price={360}
            Stars={5}
            emptyStars={0}
            rating={0}
            imageSrc={"/images/shelf.png"}
            reviews={99}
            offValue={-25}
          />
        </div>
        <div className="mt-12 flex items-center justify-center">
          <button className="w-fit bg-red-500 py-3 px-16 rounded-lg text-white">
            View All
          </button>
        </div>
      </div>

      <div className="mt-32 overflow-hidden">
        <div className="flex items-center gap-4">
          <div className="bg-red-500 h-[40px] w-[20px] rounded-lg"></div>
          <h1 className="text-2xl font-semibold text-red-500">{"Featured"}</h1>
        </div>

        <div className="flex items-center justify-between w-full mt-12">
          <div className="flex items-center gap-32">
            <h1 className="text-5xl font-semibold">New Arrival</h1>
          </div>
        </div>

        <div className="w-full flex flex-col gap-6 mt-12 md:mt-24">
          <div className="flex items-center gap-4">
            <div className="bg-red-500 h-[40px] w-[20px] rounded-lg"></div>
            <h1 className="text-xl md:text-2xl font-semibold text-red-500">
              New Arrival
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            <div className="bg-black h-[400px] md:h-[500px] lg:h-[600px] w-full relative rounded-lg overflow-hidden">
              <img
                src="/images/play.png"
                alt="PlayStation 5"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-6 md:bottom-8 lg:bottom-10 left-6 md:left-8 lg:left-10 text-white space-y-3 md:space-y-4 lg:space-y-5">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  PlayStation 5
                </h1>
                <p className="text-sm md:text-base lg:text-lg max-w-[280px] md:max-w-[320px] lg:max-w-[400px]">
                  Black and White version of PS5 coming out on sale.
                </p>
                <button className="group flex items-center gap-2 border-b border-white pb-1 text-sm md:text-base hover:border-red-500 transition-colors">
                  Shop Now
                  <BiRightArrow className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
              <div className="bg-[#0D0D0D] h-[190px] md:h-[240px] lg:h-[290px] rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 flex">
                  <div className="w-full md:w-3/5 p-6 md:p-8 lg:p-10 space-y-2 md:space-y-3 lg:space-y-4 text-white">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                      {"Women's"} Collections
                    </h1>
                    <p className="text-sm md:text-base lg:text-lg">
                      Featured woman collections that give you another vibe.
                    </p>
                    <button className="group flex items-center gap-2 border-b border-white pb-1 text-sm md:text-base hover:border-red-500 transition-colors">
                      Shop Now
                      <BiRightArrow className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  <div className="hidden md:block w-2/5 relative">
                    <img
                      src="/images/hat.png"
                      alt="Women's Collections"
                      className="absolute right-0 bottom-0 h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                <div className="bg-[#0D0D0D] rounded-lg p-6 md:p-8 relative h-[190px] md:h-[240px] lg:h-[290px] overflow-hidden">
                  <div className="space-y-2 md:space-y-3 lg:space-y-4 text-white relative z-10">
                    <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
                      Speakers
                    </h1>
                    <p className="text-sm md:text-base">
                      Amazon wireless speakers
                    </p>
                    <button className="group flex items-center gap-2 border-b border-white pb-1 text-sm md:text-base hover:border-red-500 transition-colors">
                      Shop Now
                      <BiRightArrow className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  <img
                    src="/images/spe.png"
                    alt="Speakers"
                    className="absolute right-0 bottom-0 h-4/5 w-full object-contain"
                  />
                </div>

                <div className="bg-[#0D0D0D] rounded-lg p-6 md:p-8 relative h-[190px] md:h-[240px] lg:h-[290px] overflow-hidden">
                  <div className="space-y-2 md:space-y-3 lg:space-y-4 text-white relative z-10">
                    <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
                      Perfume
                    </h1>
                    <p className="text-sm md:text-base">
                      GUCCI INTENSE OUD EDP
                    </p>
                    <button className="group flex items-center gap-2 border-b border-white pb-1 text-sm md:text-base hover:border-red-500 transition-colors">
                      Shop Now
                      <BiRightArrow className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  <img
                    src="/images/per.png"
                    alt="Perfume"
                    className="absolute right-0 bottom-0 h-4/5 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-fit mt-24 flex flex-wrap items-center justify-center gap-12">
          <div className="flex flex-col items-center justify-center">
            <img src="/images/s.png" alt="" className="mb-8" />
            <h1 className="text-2xl font-bold">FREE AND FAST DELIVERY</h1>
            <p>Free delivery for all orders above $140</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="/images/s1.png" alt="" className="mb-8" />
            <h1 className="text-2xl font-bold">24/7 CUSTOMER SERVICE</h1>
            <p>Friendly 24/7 customer support</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="/images/s2.png" alt="" className="mb-8" />
            <h1 className="text-2xl font-bold">MONEY BACK GUARANTEE</h1>
            <p>We return money within 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enhance;
