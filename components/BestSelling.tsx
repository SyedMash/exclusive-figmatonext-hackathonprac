import React from "react";
import ProductCards from "./ProductCards";

const BestSelling = () => {
  return (
    <div className="w-full h-fit mt-24">
      <div className="container w-full h-full mx-auto">
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
          <button className="w-fit bg-red-500 py-3 px-16 rounded-lg text-white">
            View All
          </button>
        </div>

        <div className="mt-12 overflow-hidden">
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
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
