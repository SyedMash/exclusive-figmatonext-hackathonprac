/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <div className="h-dvh w-screen">
      <div className="h-full container mx-auto">
        <div className="w-full h-[80%] mt-6 lg:mt-24 flex flex-col lg:flex-row">
          <div className="hidden lg:flex items-center justify-center lg:w-2/4 lg:h-full bg-[#cbe4e8]">
            <img src="/images/sign.png" alt="" className="object-cover" />
          </div>
          <div className="h-full w-full lg:w-2/4 py-24 px-8 lg:p-24 space-y-7">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
              Create an account
            </h1>
            <p className="text-xl md:text-2xl font-semibold">
              Enter Your Details Below
            </p>

            <div className="space-y-7">
              <input
                type="text"
                className="border-b border-black/30 w-full p-2"
                placeholder="Name"
              />
              <input
                type="text"
                className="border-b border-black/30 w-full p-2"
                placeholder="Email"
              />
              <input
                type="text"
                className="border-b border-black/30 w-full p-2"
                placeholder="Phone"
              />
            </div>
            <button className="rounded-lg w-full bg-red-500 text-white py-5">
              Create Account
            </button>
            <button className="flex items-center justify-center gap-2 rounded-lg w-full bg-white py-5 border border-black/30">
              <img
                src="/images/google.png"
                alt="google logo"
                className="w-[30px]"
              />
              <span className="text-black font-semibold">
                Sign up with Google
              </span>
            </button>
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

export default SignUp;
