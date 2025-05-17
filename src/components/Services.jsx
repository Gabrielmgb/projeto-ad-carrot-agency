import { useState } from "react";
import { SERVICES } from "../constants";
import { motion } from "motion/react";

const Services = () => {
  const [activeTab, setActiveTab] = useState(SERVICES[0]);
  return (
    <section
      className="bg-stone-50
     p-6 text-blackBrown"
      id="services"
    >
      <div className="container mx-auto">
        <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
          Services
        </h2>
        <div className="flex items-center justify-center space-x-4">
          {SERVICES.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-semibold tracking-tighter transition-colors lg:text-2xl cursor-pointer ${
                activeTab.id === tab.id
                  ? "border-b-2 border-orange text-orange-500"
                  : "text-blackBrown"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}

          key={activeTab.id}
          className="mt-8 flex flex-col items-center lg:flex-row"
        >
          <div className="p-4 lg:w-1/2">
            <h2 className="mb-4 text-3xl lg:text-4xl">{activeTab.content}</h2>
            <p className="text-lg tracking-tighter text-blackBrown lg:text-2xl">
              {activeTab.description}
            </p>
          </div>
          <div className="p-4 lg:w-1/2">
            <img
              src={activeTab.imgSrc}
              alt={activeTab.title}
              className="h-auto w-full rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
