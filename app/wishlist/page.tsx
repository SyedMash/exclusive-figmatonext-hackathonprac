import ProductCards from "@/components/ProductCards";
import React from "react";

const Wishlist = () => {
  return (
    <div className="min-h-dvh w-screen">
      <div className="h-full container mx-auto">
        <div className="flex justify-between items-center mt-12">
          <h1 className="text-xl font-semibold">
            Wishlist <span className="text-gray-500">(4)</span>
          </h1>
          <button className="border border-black w-fit py-2 px-16 rounded-lg">
            Move All To Bag
          </button>
        </div>

        <div className="mt-12 overflow-hidden">
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

export default Wishlist;
