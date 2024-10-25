//import Link from "next/link";
//import Image from "next/image";
import React from "react";
//import { Container } from "@/components/Container";

export function Footer() {
  const navigation = ["Product", "Features", "Pricing", "Company", "Blog"];
  const legal = ["Terms", "Privacy", "Legal"];

  return (
    <div className="relative min-h-[45vh] bg-black">
      <div>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <a
              href="/"
              className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
            >
              <img
                src="/img/logo.svg"
                alt="N"
                width="32"
                height="32"
                className="w-8"
              />
              <span>Nextly</span>
            </a>
            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              Nextly is a free landing page & marketing website template for
              startups and indie projects. Its built with Next.js & TailwindCSS.
              And its completely open-source.
            </div>
            <div className="mt-5">
              <a
                href="https://vercel.com/?utm_source=web3templates&utm_campaign=oss"
                target="_blank"
                rel="noopener"
                className="relative block w-44"
              >
                <img
                  src="/img/vercel.svg"
                  alt="Powered by Vercel"
                  width="212"
                  height="44"
                />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
            {navigation.map((item, index) => (
              <a
                key={index}
                href="/"
                className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
            {legal.map((item, index) => (
              <a
                key={index}
                href="/"
                className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social Media Links */}
          <div>
            <div>Follow us</div>
            <div className="flex justify-center mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              <a href="https://twitter.com/web3templates">Twitter</a>
              <a href="https://facebook.com/web3templates">Facebook</a>
              <a href="https://instagram.com/web3templates" />
              <a href="https://linkedin.com/">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. Made with ♥ by{" "}
          
          Illustrations from{" "}
          <a href="https://www.glazestock.com/" target="_blank" rel="noopener">
            Glazestock
          </a>
        </div>
      </div>
    </div>
  );
}

// Social Media Icons as Components
const SocialLink = ({ href, icon }) => (
  <a href={href} target="_blank" rel="noopener">
    <span className="sr-only">{icon.type.displayName}</span>
    {icon}
  </a>
);

const Twitter = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
  >
    <path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z" />
  </svg>
);

// Similar components for Facebook, Instagram, and Linkedin...

const Backlink = () => (
  <a
    href="https://web3templates.com"
    target="_blank"
    rel="noopener"
    className="absolute flex px-3 py-1 space-x-2 text-sm font-semibold text-gray-900 bg-white border"
  >
    {/* Backlink content goes here */}
  </a>
);
