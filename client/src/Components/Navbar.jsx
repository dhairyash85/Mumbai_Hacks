"use client";
//import a from "next/a";
//import ThemeChanger from "./DarkSwitch";
//import img from "next/image";
//import { Disclosure } from "@headlessui/react";

export const Navbar = () => {
  // const navigation = ["Product", "Features", "Pricing", "Company", "Blog"];

  return (
    <div className="w-full bg-black">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
        {/* Logo  */}
        <a href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
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
          </span>
        </a>

        {/* get started  */}
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

        <button>
            Get Started
        </button>

        {/* menu  */}
        {/* <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <a
                  href="/"
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  {menu}
                </a>
              </li>
            ))}
          </ul>
        </div> */}
      </nav>
    </div>
  );
};
