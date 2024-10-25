"use client";
//import a from "next/a";
//import ThemeChanger from "./DarkSwitch";
//import img from "next/image";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = [
    "Product",
    "Features",
    "Pricing",
    "Company",
    "Get Started",
  ];

  return (
    <div className="w-full bg-black">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
        >
          <span>
            <img
              src="/img/logo.svg"
              width="32"
              alt="N"
              height="32"
              className="w-8"
            />
          </span>
          <span>Nextly</span>
        </a>

        {/* Hamburger Icon for Mobile */}
        <button
          className={`text-white lg:hidden ${isOpen ? "ml-auto" : ""}`}
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
        </button>

        {/* Get Started button */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          {/* <ThemeChanger /> */}
          <div className="hidden mr-3 lg:flex nav__item">
            <a
              href="/"
              className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Menu */}
        <div
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
        </div>
      </nav>
    </div>
  );
};
