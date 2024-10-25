import React from "react";

const MyIcon = () => (
  <svg
    role="img"
    width="24"
    height="24"
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z" />
  </svg>
);

export const Benefits = () => {
  // Define the content array with benefits and their descriptions
  const content = {
    imgPos: "left",
    headline: "Benefits of Our Service",
    description: "Explore how our services can enhance your business.",
    points: [
      {
        headline: "Understand your customers",
        description:
          "Gain insights into customer preferences and behavior to tailor your offerings.",
        icon: <MyIcon />,
      },
      {
        headline: "Improve acquisition",
        description:
          "Enhance your marketing strategies to attract new customers effectively.",
        icon: <MyIcon />, 
      },
      {
        headline: "Drive customer retention",
        description:
          "Implement loyalty programs and personalized experiences to keep customers coming back.",
        icon: <MyIcon />, 
      },
    ],
  };

  const SectionTitle = ({ preTitle, title, children }) => {
    return (
      <div className="mb-8 text-center">
        <h2 className="text-lg font-semibold text-indigo-500 uppercase">
          {preTitle}
        </h2>
        <h1 className="mt-2 text-3xl font-bold text-white">{title}</h1>
        <p className="mx-auto mt-4 text-lg w-[50%] text-white">{children}</p>
      </div>
    );
  };

  return (
    <>
      <section className="py-10 px-4 bg-black">
        <SectionTitle
          preTitle="Nextly Benefits"
          title="Why should you use this landing page"
        >
          Nextly is a free landing page & marketing website template for
          startups and indie projects. It's built with React and TailwindCSS.
          And it's completely open-source.
        </SectionTitle>
      </section>
      <div className="pt-10 flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            content.imgPos === "right" ? "lg:order-1" : ""
          }`}
        >
          <div>
            <img
              src="https://nextly.web3templates.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbenefit-one.a3b4f792.png&w=640&q=75"
              width={521}
              height={521}
              alt="Features"
              className="object-cover"
              placeholder="blur"
            />
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            content.imgPos === "right" ? "lg:justify-end" : ""
          }`}
        >
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                {content.headline}
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                {content.description}
              </p>
            </div>

            <div className="w-full mt-5">
              {content.points.map((item, index) => (
                <FeatureItem
                  key={index}
                  headline={item.headline}
                  icon={item.icon}
                >
                  {item.description}
                </FeatureItem>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function FeatureItem({ headline, icon, children }) {
  return (
    <div className="flex items-start mt-8 space-x-3">
      <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11">
        {React.cloneElement(icon, {
          className: "w-7 h-7 text-indigo-50",
        })}
      </div>
      <div>
        <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
          {headline}
        </h4>
        <p className="mt-1 text-gray-500 dark:text-gray-400">{children}</p>
      </div>
    </div>
  );
}
