import { useState } from "react";
import { FAQ_DESCRIPTION, FAQS } from "../constants";
import { FaMinus, FaPlus } from "react-icons/fa";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section className="mt-20" id="faq">
      <div className="container mx-auto flex flex-col gap-12 p-8 lg:flex-row">
        <div className="lg:w-1/3">
          <h2 className="mb-8 text-4xl font-semibold tracking-tighter">
            Frequently asked questions
          </h2>
          <p className="mb-12 text-lg">{FAQ_DESCRIPTION}</p>
        </div>
        <div className="lg:w-2/3">
          {FAQS.map((faq, index) => (
            <div key={index} className="mb-4 border-b pb-4">
              <div
                className="flex cursor-pointer items-center justify-between p-8"
                onClick={() => handleToggle(index)}
              >
                <h3 className="text-2xl">{faq.question}</h3>
                <div>
                  {activeIndex === index ? (
                    <FaMinus className="text-xl hover:text-orange duration-200" />
                  ) : (
                    <FaPlus className="text-xl hover:text-orange duration-200" />
                  )}
                </div>
              </div>
              <div
                className={`mt-4 overflow-hidden text-lg transition-all duration-500 ${
                  activeIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <p className="p-8">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
