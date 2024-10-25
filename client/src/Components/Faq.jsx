import React, { useState } from "react";

// FAQ data
const faqdata = [
  {
    question: "Is this template completely free to use?",
    answer: "Yes, this template is completely free to use.",
  },
  {
    question: "Can I use it in a commercial project?",
    answer: "Yes, you can.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
  },
  {
    question: "Do you offer technical support?",
    answer:
      "No, we don't offer technical support for free downloads. Please purchase a support plan to get 6 months of support.",
  },
];

// Faq Component
const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null); // State to track which FAQ is open

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close state
  };

  return (
    <div className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <div>
              <button
                onClick={() => toggleFAQ(index)} // Toggle FAQ on button click
                className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-900 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200"
              >
                <span className="text-white">{item.question}</span>
                <i
                  className={`${
                    openIndex === index ? "transform rotate-180" : ""
                  } w-5 h-5 text-indigo-400`}
                />
              </button>
              {openIndex === index && ( // Show answer if the current index is open
                <div className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                  {item.answer}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
