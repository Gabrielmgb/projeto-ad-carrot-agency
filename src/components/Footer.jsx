import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-blackBrown py-6 text-orange-100">
      <div
        className="container mx-auto flex flex-col items-center
       justify-center space-y-4 md:space-y-0"
      >
        <div className="mb-4 flex space-x-4">
          <a href="#" className="hover:text-orange duration-200">
            {" "}
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="hover:text-orange duration-200">
            {" "}
            <FaTwitter size={20} />
          </a>
          <a href="#" className="hover:text-orange duration-200">
            {" "}
            <FaInstagram size={20} />
          </a>
          <a href="#" className="hover:text-orange duration-200">
            {" "}
            <FaLinkedinIn size={20} />
          </a>
        </div>
        <div className="text-sm opacity-50">
          &copy; {new Date().getFullYear()} adCarrot. All rights reserverd
        </div>
      </div>
    </footer>
  );
};

export default Footer;
