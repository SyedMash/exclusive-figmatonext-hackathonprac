/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";

const About = () => {
  return (
    <div className="minh-dvh w-screen">
      <div className="container mx-auto">
        <h1 className="text-s text-black/50 mt-12 pl-2 lg:pl-0">
          Home / <span className="text-black">About</span>{" "}
        </h1>

        <div className="mt-12 flex flex-col lg:flex-row gap-12 lg:gap-0">
          <div className="space-y-6 w-full lg:w-2/4 p-2 lg:py-12 xl:py-24">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
              Our Story
            </h1>
            <p className="text-sm text-wrap">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              marketplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millions
              customers across the region.{" "}
            </p>
            <p className="mt-6 text-sm xl:text-base">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div className="lg:w-2/4 w-full xl:text-base">
            <img src="/images/gls.png" alt="" className="w-full object-cover" />
          </div>
        </div>

        <div className="flex lg:flex-row flex-wrap justify-center items-center gap-8 mt-24">
          <div className="w-[270px] h-[230px] border border-black flex flex-col items-center justify-center gap-2">
            <img src="/images/house.png" alt="" />
            <h1 className="text-2xl font-bold">10.5K</h1>
            <p>Sellers active our site</p>
          </div>
          <div className="w-[270px] h-[230px] border border-black flex flex-col items-center justify-center gap-2">
            <img src="/images/house.png" alt="" />
            <h1 className="text-2xl font-bold">10.5K</h1>
            <p>Sellers active our site</p>
          </div>
          <div className="w-[270px] h-[230px] border border-black flex flex-col items-center justify-center gap-2">
            <img src="/images/house.png" alt="" />
            <h1 className="text-2xl font-bold">10.5K</h1>
            <p>Sellers active our site</p>
          </div>
          <div className="w-[270px] h-[230px] border border-black flex flex-col items-center justify-center gap-2">
            <img src="/images/house.png" alt="" />
            <h1 className="text-2xl font-bold">10.5K</h1>
            <p>Sellers active our site</p>
          </div>
        </div>

        <div className="flex lg:flex-row flex-wrap justify-center items-center gap-4 md:gap-8 mt-24">
          <div className="h-[546px] w-[370px] space-y-1">
            <div className="h-3/4 w-full bg-slate-400 flex items-center justify-center">
              <img
                src="/images/tc.png"
                alt=""
                className="object-cover h-full w-full"
              />
            </div>
            <h1 className="text-2xl font-bold">Tom Cruise</h1>
            <p className="text-xs">Founder & Chairman</p>
            <div className="flex gap-1">
              <BsTwitter />
              <BsInstagram />
              <LiaLinkedin />
            </div>
          </div>
          <div className="h-[546px] w-[370px] space-y-1">
            <div className="h-3/4 w-full bg-slate-400 flex items-center justify-center">
              <img
                src="/images/emma.png"
                alt=""
                className="object-cover h-full w-full"
              />
            </div>
            <h1 className="text-2xl font-bold">Emma Watson</h1>
            <p className="text-xs">Managing Director</p>
            <div className="flex gap-1">
              <BsTwitter />
              <BsInstagram />
              <LiaLinkedin />
            </div>
          </div>
          <div className="h-[546px] w-[370px] space-y-1">
            <div className="h-3/4 w-full bg-slate-400 flex items-center justify-center">
              <img
                src="/images/will.png"
                alt=""
                className="object-cover h-full w-full"
              />
            </div>
            <h1 className="text-2xl font-bold">Will Smith</h1>
            <p className="text-xs">Product Designer</p>
            <div className="flex gap-1">
              <BsTwitter />
              <BsInstagram />
              <LiaLinkedin />
            </div>
          </div>
        </div>

        <div className="w-full h-fit  mt-24 flex flex-wrap items-center justify-center gap-12">
          <div className="flex flex-col items-center justify-center">
            <img src="/images/s.png" alt="" className="mb-8" />
            <h1 className="text-xl font-bold">FREE AND FAST DELIVERY</h1>
            <p>Free delivery for all orders above $140</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="/images/s1.png" alt="" className="mb-8" />
            <h1 className="text-xl font-bold">24/7 CUSTOMER SERVICE</h1>
            <p>Friendly 24/7 customer support</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="/images/s2.png" alt="" className="mb-8" />
            <h1 className="text-xl font-bold">MONEY BACK GUARANTEE</h1>
            <p>We return money within 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
