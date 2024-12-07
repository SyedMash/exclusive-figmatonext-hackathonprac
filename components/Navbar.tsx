"use client"
import { navLinks } from "@/constants";
import Link from "next/link";
import { BiCart, BiHeart, BiSearch } from "react-icons/bi";
import { useRouter } from "next/navigation"
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full h-[100px] border-b border-black/30 relative">
      <nav className="container mx-auto px-4 h-full flex items-center justify-between">
    
        <button 
          className="lg:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <RxHamburgerMenu />
        </button>

        <h1 className="font-bold text-xl md:text-3xl">Exclusive</h1>

     
        <ul className="gap-8 hidden lg:flex">
          {navLinks.map((links) => (
            <li
              className="active:underline cursor-pointer font-semibold"
              key={links.name}
            >
              <Link href={links.url}>{links.name}</Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 bg-[#f5f5f5] rounded-lg p-1">
            <input
              type="text"
              className="border-none outline-none bg-transparent text-black p-1 placeholder-black/50 hidden md:block"
              placeholder="What are you looking for?"
            />
            <BiSearch className="text-xl cursor-pointer" />
          </div>
          <BiHeart 
            className="text-2xl cursor-pointer" 
            onClick={() => { router.push("/wishlist") }}
          />
          <BiCart 
            className="text-2xl cursor-pointer" 
            onClick={() => { router.push("/cart") }}
          />
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div className={`
        fixed top-0 left-0 w-full h-full z-50 lg:hidden
        ${isMenuOpen ? 'visible' : 'invisible'}
        transition-all duration-300
      `}>
        {/* Overlay */}
        <div 
          className={`
            absolute inset-0 bg-black/50
            ${isMenuOpen ? 'opacity-100' : 'opacity-0'}
            transition-opacity duration-300
          `}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu Content */}
        <div className={`
          absolute top-0 left-0 w-[80%] max-w-[400px] h-full bg-white
          transform transition-transform duration-300 ease-out
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          p-6 overflow-y-auto
        `}>
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-bold text-xl">Menu</h2>
            <button 
              className="text-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              <IoMdClose />
            </button>
          </div>

          {/* Mobile Search */}
          <div className="flex items-center gap-2 bg-[#f5f5f5] rounded-lg p-2 mb-6">
            <input
              type="text"
              className="flex-1 border-none outline-none bg-transparent text-black placeholder-black/50"
              placeholder="What are you looking for?"
            />
            <BiSearch className="text-xl" />
          </div>

          {/* Mobile Navigation Links */}
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="font-semibold py-2 border-b border-gray-100"
              >
                <Link 
                  href={link.url}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
