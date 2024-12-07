"use client"
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/navigation";

const Cart = () => {
  const router = useRouter();
  return (
    <div className="min-h-dvh w-full">
      <div className="h-full container mx-auto px-4 md:px-6">
        <h1 className="text-s text-black/50 mt-8 md:mt-12">
          Home / <span className="text-black">Cart</span>
        </h1>

        <div className="mt-12 md:mt-24 w-full">
          <div className="flex flex-col gap-8 md:gap-16">
            <div className="hidden md:flex h-[72px] w-full shadow-md justify-between items-center px-4 md:px-24">
              <h1 className="text-base md:text-lg font-semibold w-[120px]">
                Products
              </h1>
              <h1 className="text-base md:text-lg font-semibold w-[120px]">
                Price
              </h1>
              <h1 className="text-base md:text-lg font-semibold w-[120px]">
                Quantity
              </h1>
              <h1 className="text-base md:text-lg font-semibold w-[120px]">
                Subtotal
              </h1>
            </div>

            <div className="flex flex-col md:flex-row md:h-[72px] w-full shadow-md p-4 md:px-24 items-start md:items-center justify-between relative">
              <div className="flex gap-2 items-center relative w-full md:w-[120px] mb-4 md:mb-0">
                <img
                  src="/images/mon.png"
                  alt=""
                  className="w-[50px] h-[50px] object-cover"
                />
                <h1 className="text-sm">LCD Monitor</h1>
              </div>
              <div className="flex md:hidden font-semibold mb-2">Price:</div>
              <h1 className="w-full md:w-[120px]">$650</h1>
              <div className="flex md:hidden font-semibold mb-2">Quantity:</div>
              <select className="bg-gray-200 rounded-md w-full md:w-[120px] p-2 mb-4 md:mb-0">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <div className="flex md:hidden font-semibold mb-2">Subtotal:</div>
              <h1 className="w-full md:w-[120px]">$650</h1>
            </div>

            <div className="flex flex-col md:flex-row md:h-[72px] w-full shadow-md p-4 md:px-24 items-start md:items-center justify-between">
              <div className="flex gap-2 items-center relative w-full md:w-[120px] mb-4 md:mb-0">
                <img
                  src="/images/controller.png"
                  alt=""
                  className="w-[50px] h-[50px] object-cover"
                />
                <h1 className="text-sm">H1 Gamepad</h1>
              </div>
              <div className="flex md:hidden font-semibold mb-2">Price:</div>
              <h1 className="w-full md:w-[120px]">$550</h1>
              <div className="flex md:hidden font-semibold mb-2">Quantity:</div>
              <select
                className="bg-gray-200 rounded-md w-full md:w-[120px] p-2 mb-4 md:mb-0"
                defaultValue={2}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <div className="flex md:hidden font-semibold mb-2">Subtotal:</div>
              <h1 className="w-full md:w-[120px]">$1100</h1>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between mt-6 gap-4">
            <button className="w-full md:w-fit py-3 px-8 md:px-16 border border-black rounded-lg">
              Return to Shop
            </button>
            <button className="w-full md:w-fit py-3 px-8 md:px-16 border border-black rounded-lg">
              Update Cart
            </button>
          </div>

          <div className="w-full flex flex-col md:flex-row mt-12 md:mt-24 gap-8">
            <div className="w-full md:w-2/4">
              <div className="flex flex-col md:flex-row items-center gap-2">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="bg-gray-200 rounded-md w-full md:w-fit py-2 px-8 mb-2 md:mb-0"
                />
                <button className="bg-red-500 py-2 px-8 md:px-16 w-full md:w-fit rounded-md text-white">
                  Apply Coupon
                </button>
              </div>
            </div>
            <div className="w-full md:w-2/4 md:pl-24">
              <div className="w-full border border-black/20 rounded-md p-4 md:p-6">
                <h2 className="text-lg md:text-xl font-medium mb-6">
                  Cart Total
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-black/10 pb-4">
                    <span>Subtotal:</span>
                    <span>$1750</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-black/10 pb-4">
                    <span>Shipping:</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span>Total:</span>
                    <span>$1750</span>
                  </div>
                </div>
                <button className="w-full bg-red-500 text-white py-3 rounded-md mt-6" onClick={() => router.push("/billing")}>
                  Proceed to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
