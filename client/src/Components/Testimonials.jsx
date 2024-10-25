import React from "react";
//import { div } from "@/components/div"; // Ensure this component is compatible with React

// Import user images
//import userOneImg from "../../public/img/user1.jpg"; // Adjust paths as necessary
//import userTwoImg from "../../public/img/user2.jpg";
//import userThreeImg from "../../public/img/user3.jpg";

// SectionTitle Component
const SectionTitle = ({ preTitle, title, children }) => {
  return (
    <div className="mb-12 text-center">
      <h4 className="text-lg font-semibold text-indigo-600 uppercase">
        {preTitle}
      </h4>
      <h2 className="mt-2 text-3xl font-bold text-white">{title}</h2>
      <p className="mt-4 text-lg text-white">{children}</p>
    </div>
  );
};

// Testimonials Component
export const Testimonials = () => {
  return (
    <div>
      <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-600 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal text-white">
              Share a real <Mark>testimonial</Mark> that hits some of your
              benefits from one of your popular customers.
            </p>
            <Avatar
              image="https://nextly.web3templates.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser1.71c84e11.jpg&w=48&q=75"
              name="Sarah Steiner"
              title="VP Sales at Google"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-between w-full h-full bg-gray-600 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal text-white">
              Make sure you only pick the <Mark>right sentence</Mark> to keep it
              short and simple.
            </p>
            <Avatar
              image="https://nextly.web3templates.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser2.33ea1ca7.jpg&w=48&q=75"
              name="Dylan Ambrose"
              title="Lead marketer at Netflix"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-between w-full h-full bg-gray-600 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal text-white">
              This is an <Mark>awesome</Mark> landing page template I&apos;ve
              seen. I would use this for anything.
            </p>
            <Avatar
              image="https://nextly.web3templates.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser3.b804ab99.jpg&w=48&q=75"
              name="Gabrielle Winn"
              title="Co-founder of Acme Inc"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Avatar Component
function Avatar({ image, name, title }) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <img
          src={image}
          width="40"
          height="40"
          alt="Avatar"
          className="object-cover"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{name}</div>
        <div className="text-gray-600 dark:text-white">{title}</div>
      </div>
    </div>
  );
}

// Mark Component
function Mark({ children }) {
  return (
    <mark className="text-white bg-white rounded-md ring-white ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
      {children}
    </mark>
  );
}

export default Testimonials;
