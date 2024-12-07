/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const SignIn = () => {
  return (
    <div className="h-dvh w-screen">
      <div className="h-full container mx-auto">
        <div className="w-full h-[80%] mt-6 lg:mt-24 flex flex-col lg:flex-row">
          <div className="hidden lg:flex items-center justify-center lg:w-2/4 lg:h-full bg-[#cbe4e8]">
            <img src="/images/sign.png" alt="" className="object-cover" />
          </div>
          <div className="h-full w-full lg:w-2/4 py-24 px-8 lg:p-24 space-y-7">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
              Log in to Exclusive
            </h1>
            <p className="text-xl md:text-2xl font-semibold">
              Enter Your Details Below
            </p>

            <div className="space-y-7">
              <input
                type="text"
                className="border-b border-black/30 w-full p-2"
                placeholder="Email or Phone Number"
              />
              <input
                type="text"
                className="border-b border-black/30 w-full p-2"
                placeholder="Password"
              />
            </div>
            <div className="flex flex-col items-center gap-5">
              <button className="rounded-lg w-full flex-1 bg-red-500 text-white py-5">
                Create Account
              </button>
              <h1 className="text-red-500">Forgot Password?</h1>
            </div>
            <h1 className="flex justify-center items-center">
              <Link href={"/sign-in"} className="text-black font-semibold">
                Already have an account? Sign In
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
