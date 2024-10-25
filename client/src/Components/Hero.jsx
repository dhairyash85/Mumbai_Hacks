//import { div } from "./components/div";
//import heroImg from "./img/hero.png";

export const Hero = () => {
  return (
    <>
      <div className="flex flex-wrap bg-black">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Credify Pro
            </h1>
            <div className="py-5 leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
              Nextly is a free landing page & marketing website template for
              startups and indie projects. It&apos;s built with React.js &
              TailwindCSS. And it&apos;s completely open-source.
            </div>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div>
            <img
              src="https://nextly.web3templates.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&w=640&q=75"
              width="350"
              height="350"
              className="object-cover"
              alt="Hero Illustration"
              loading="eager"
            />
          </div>
        </div>
      </div>
      <div>
        {/* <div className="bg-black flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Trusted by <span className="text-indigo-600">2000+</span> customers
            worldwide
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around py-3">
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <AmazonLogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <VerizonLogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <MicrosoftLogo />
            </div>
            <div className="pt-1 text-gray-400 dark:text-gray-400">
              <NetflixLogo />
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <SonyLogo />
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

