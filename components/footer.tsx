/* eslint-disable @next/next/no-img-element */
import React from "react";
import { TbSquareRoundedArrowRight } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="bg-black w-full mt-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 lg:gap-12">
          <div className="text-white space-y-6">
            <h2 className="text-2xl font-bold">Exclusive</h2>
            <h3 className="text-lg">Subscribe</h3>
            <div className="flex items-center border border-white rounded-md overflow-hidden max-w-[300px]">
              <input
                type="text"
                className="flex-1 outline-none border-none bg-black py-3 px-4 text-sm"
                placeholder="Enter your email"
              />
              <button className=" hover:bg-white/10 transition-colors">
                <TbSquareRoundedArrowRight className="text-2xl cursor-pointer" />
              </button>
            </div>
          </div>

          <div className="text-white space-y-6">
            <h2 className="text-2xl font-bold">Support</h2>
            <address className="not-italic">
              111 Bijoy sarani, Dhaka
              <br />
              DH 1515, Bangladesh.
            </address>
            <p className="font-bold">exclusive@gmail.com</p>
            <p>+880 1234 5678</p>
          </div>

          <div className="text-white space-y-4">
            <h2 className="text-2xl font-bold mb-6">Account</h2>
            <nav className="flex flex-col gap-3">
              <a href="#" className="hover:text-gray-300 transition-colors">
                My Account
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Login / Register
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Cart
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Wishlist
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Shop
              </a>
            </nav>
          </div>

          <div className="text-white space-y-4">
            <h2 className="text-2xl font-bold mb-6">Quick Links</h2>
            <nav className="flex flex-col gap-3">
              <a href="#" className="hover:text-gray-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                FAQ
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Contact
              </a>
            </nav>
          </div>

          <div className="text-white space-y-6 sm:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-bold">Download App</h2>
            <div className="flex flex-col gap-4">
              <img
                src="/images/qr.png"
                alt="QR Code"
                className="w-32 h-32 bg-white p-2 rounded-lg"
              />
              <div className="flex gap-4">
                <img
                  src="/images/goo.png"
                  alt="Google Play"
                  className="h-10 w-auto cursor-pointer"
                />
                <img
                  src="/images/app.png"
                  alt="App Store"
                  className="h-10 w-auto cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
