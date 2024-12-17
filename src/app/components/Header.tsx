"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarBattery, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Define page titles
  const pageTitles: { [key: string]: string } = {
    "/": "Home",
    "/menu": "Our Menu",
    "/error": "Blogs",
    "/pages": "Pages",
    "/about": "About Us",
    "/shop": "Our Shop",
    "/contact": "Contact Us",
  };
  if (pathname === "/") return null;

  // Get the current page title or fallback
  const currentPage = pageTitles[pathname] || "Welcome";
  return (
    <div>
      <div className="w-full h-[410px] bg-black  bg-[url('/images/unsplash.png')] bg-cover">
        <div className="w-full h-[90px]">
          <div className="w-full h-[32px] px-4 py-6 font-bold flex justify-between items-center">
            <p className="text-white text-lg md:text-xl">
              Food <span className="text-orange-500">Luck</span>
            </p>
            {/* Hamburger Menu for Mobile */}
        <button
          className="text-white text-3xl sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        {/* Navbar Links (Hidden on Small Screens) */}
        <ol
          className={`absolute top-[90px] left-0 w-full bg-black text-white sm:static sm:flex sm:bg-transparent sm:gap-6 sm:text-base font-medium transition-all duration-300 ease-in-out ${
            menuOpen ? "block" : "hidden"
          }`}
        ></ol>
            <ol className="text-white  gap-4 font-medium hidden sm:flex ">
              
            
              
              <Link href={"/"}>
                <li className="text-orange-500">Home</li>
              </Link>
              <Link href={"/menu"}>
                <li>Menu</li>
              </Link>
              <Link href={"/error"}>
                <li>Blogs</li>
              </Link>
              <Link href={"/pages"}>
                <li>Pages</li>
              </Link>
              <Link href={"/about"}>
                <li>About</li>
              </Link>
              <Link href={"/shop"}>
                <li>Shop</li>
              </Link>
              <Link href={"/contact"}>
                <li>Contact</li>
              </Link>
            </ol>
            <ol className="flex gap-2">
              <i className="fa-solid fa-magnifying-glass text-white text-lg"></i>
              <i className="fa-regular fa-user text-white text-lg"></i>
              <i className="fa-solid fa-car-battery text-white text-lg"></i>
              <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white text-2xl" />
<FontAwesomeIcon icon={faUser} className="text-white text-2xl" />
<FontAwesomeIcon icon={faCarBattery} className="text-white text-2xl" />
            </ol>
          </div>
          <div className="w-[219px] h-[104px] mt-[198px] ml-[600px] text-white">
            <div className="w-[219px] h-[104px] font-extrabold text-2xl sm:text-4xl">
              {currentPage}
              <div className="w-[129pxpx] h-[28px]  text-base">
                <p>
                  Home <i className="fa-solid fa-chevron-right"></i>{" "}
                  <span className="text-orange-500">{currentPage}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
