import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { LINKS } from "../constants";
import { GiHidden } from "react-icons/gi";
import { AnimatePresence, motion } from "motion/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, isOpen);

  useEffect(() => {
    const handleScroll = (e) => {
      if (isOpen) {
        e.preventDefault();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("Scroll", handleScroll);
    };
  }, [isOpen]);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const offset = -70;
    const element = document.getElementById(id);
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition + offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

const linkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

  return (
    <>
      <nav className="fixed z-10 w-full border-b border-orange-50/10 bg-emerald-950">
        <div className=" container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <a href="/">
                <img src={logo} alt="AdCarrot" width={120} height={20} />
              </a>
            </div>
            <div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center bg-emerald-950 p-2 text-orange-50"
              >
                <FaBars className="h-6 w-6 cursor-pointer hover:scale-110 duration-300 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>

      {isOpen && (
        <motion.div 
        initial={{ opacity: 0, y: "-100%"}}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-100%" }}
        transition={{ duration: 0.5 }}

        className="fixed inset-0 z-20 flex flex-col space-y-8 bg-emerald-950 px-20 pt-20 text-5xl font-bold uppercase text-emerald-100 lg:text-6xl">
          <button
            onClick={() => setIsOpen(false)}
            type="button"
            className="absolute right-4 top-4 rounded-full bg-emerald-900 hover:bg-emerald-800 p-2 text-orange-50 lg:right-20 cursor-pointer"
          >
            <FaTimes className="h-6 w-6" />
          </button>
          {LINKS.map((link, index) => (
            <motion.a
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: index * 0.2 }}

              key={index}
              href={`#${link.id}`}
              onClick={() => handleLinkClick(e, link.id)}
              className="transition-colors duration-500 hover:text-orange-500"
            >
              {link.name}
            </motion.a>
          ))}
        </motion.div>
      )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
