"use client";

import { Link } from "react-router-dom";
import { useWalletContract } from "../Context/WalletProvider";
import { useState } from "react";

export const Navbar = () => {
  const navigation = ["Product", "Features", "Pricing", "Company", "Blog"];
  const context = useWalletContract();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full px-[100px] sm:px-[0px] bg-black border-b-[1px] mb-10 border-white">
      <nav className="container relative flex flex-wrap items-center justify-between py-8 lg:justify-between xl:px-1">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center justify-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
        >
          <img
            src="/logo.png" // Update this path to your logo image
            width="32"
            alt="Logo"
            className="w-8"
          />
          <span>Credify Pro</span>
        </Link>

        {/* Get Started button - only show on medium and larger screens */}
        <div className="hidden lg:flex gap-3 nav__item mr-2 lg:ml-auto lg:order-2">
          <Link
            to="/kyc"
            className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
            onClick={() => {
              connectWallet;
            }}
          >
            Get Started
          </Link>
        </div>

        {/* Hamburger Icon for Mobile - only show on small screens */}
        {/* <button
          className="text-white lg:hidden ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button> */}

        {/* Menu - Adjust visibility based on state */}
        {/* <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full lg:flex lg:w-auto lg:items-center text-center`}
        >
          <ul className="justify-end flex-1 list-none lg:flex lg:pt-0 pt-6">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <a
                  href="/kyc"
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  {menu}
                </a>
              </li>
            ))}
          </ul>
        </div>  */}
      </nav>
    </div>
  );
};
