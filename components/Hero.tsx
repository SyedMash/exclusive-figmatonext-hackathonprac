import Links from "@/components/Links";
import Slider from "./Sliders/mainSlider/Slider";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import ProductCards from "./ProductCards";

const Hero = () => {
  return (
    <div className="w-full h-fit relative">
      <div className="container mx-auto h-full border-b border-black/30 pb-6 md:pb-12 px-4 md:px-6 overflow-hidden">
        <div className="flex h-fit">
          <div className="border-r h-fit border-black/30 pt-5 pr-5 flex-col gap-4 hidden lg:flex w-[20%]">
            <Links href="" firstTitle="Women's" SecondTitle="Fashion" isArrow />
            <Links href="" firstTitle="Men's" SecondTitle="Fashion" isArrow />
            <Links href="" firstTitle="Electronics" />
            <Links href="" firstTitle="Home & Lifestyle" />
            <Links href="" firstTitle="Home & Medicine" />
            <Links href="" firstTitle="Sports & Outdoor" />
            <Links href="" firstTitle="Baby's & Toys" />
            <Links href="" firstTitle="Groceries & Pets" />
            <Links href="" firstTitle="Health & Beauty" />
          </div>

          <div className="h-full w-full lg:w-[70%] lg:ml-[5%] pt-5 overflow-hidden">
            <Slider />
          </div>
        </div>

        <div className="w-full h-fit mt-12 md:mt-24">
          <div className="flex items-center gap-4">
            <div className="bg-red-500 h-[40px] w-[20px] rounded-lg"></div>
            <h1 className="text-xl md:text-2xl font-semibold text-red-500">
              {"Today's"}
            </h1>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full mt-6 md:mt-12 gap-6 md:gap-0">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-32 w-full md:w-auto">
              <h1 className="text-3xl md:text-5xl font-semibold">
                Flash Sales
              </h1>

              <div className="flex items-center gap-3 text-xl md:text-2xl font-bold text-red-500 w-full md:w-auto justify-between md:justify-start">
                <div className="flex flex-col justify-center text-black">
                  <h2 className="text-[10px] md:text-xs font-semibold text-center">
                    Days
                  </h2>
                  <h1 className="text-2xl md:text-4xl font-bold">03</h1>
                </div>
                <span>:</span>
                <div className="flex flex-col justify-center text-black">
                  <h2 className="text-[10px] md:text-xs font-semibold text-center">
                    Hours
                  </h2>
                  <h1 className="text-2xl md:text-4xl font-bold">23</h1>
                </div>
                <span>:</span>
                <div className="flex flex-col justify-center text-black">
                  <h2 className="text-[10px] md:text-xs font-semibold text-center">
                    Minutes
                  </h2>
                  <h1 className="text-2xl md:text-4xl font-bold">19</h1>
                </div>
                <span>:</span>
                <div className="flex flex-col justify-center text-black">
                  <h2 className="text-[10px] md:text-xs font-semibold text-center">
                    Seconds
                  </h2>
                  <h1 className="text-2xl md:text-4xl font-bold">56</h1>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto justify-end">
              <button className="hover:bg-gray-300 transition-colors">
                <BiLeftArrow className="bg-gray-200 rounded-full p-2 text-4xl md:text-5xl" />
              </button>
              <button className="hover:bg-gray-300 transition-colors">
                <BiRightArrow className="bg-gray-200 rounded-full p-2 text-4xl md:text-5xl" />
              </button>
            </div>
          </div>

          <div className="mt-8 md:mt-12 overflow-hidden">
            <div className="flex items-center flex-wrap justify-center lg:justify-start gap-4 md:gap-6 transition-all duration-500">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
