import { FaFacebook, FaYoutube } from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";
import { BiSolidDownArrow } from "react-icons/bi";
import { useState } from "react";
import { TbWorld } from "react-icons/tb";

interface INavProps {
  isMenuActive: boolean;
  setIsMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav = ({ isMenuActive, setIsMenuActive }: INavProps) => {
  const [selectLanguage, setSelectLanguage] = useState("English");

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
   
  };

  const closeMenu = () => {
    setIsMenuActive(false);
  };

  return (
    <div className="relative  my-4 flex justify-between px-5 items-center w-full">
      <div className="flex gap-3 items-center">
        <FaFacebook className="w-7 h-7 text-PRIMARY_BLUE cursor-pointer" />
        <img
          src="/nav/X.png"
          alt=""
          className="w-7 h-7 rounded-full cursor-pointer"
        />
        <img
          src="/nav/instegram.jpeg"
          alt=""
          className="w-7 h-7 rounded-full cursor-pointer"
        />
        <FaYoutube className="w-7 h-7 rounded-full text-red-500 cursor-pointer" />
      </div>
      <div className="sm:flex hidden items-start justify-around gap-6">
        <div className="">
          <p
            onClick={() => setSelectLanguage("English")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <span
              className={selectLanguage === "English" ? "flex " : "invisible"}
            >
              <BiSolidDownArrow />
            </span>
            <span>
              <ReactCountryFlag countryCode="US" />
            </span>
            <span>English</span>
          </p>
          <p
            onClick={() => setSelectLanguage("Francais")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <span
              className={selectLanguage === "Francais" ? "flex " : "invisible"}
            >
              <BiSolidDownArrow />
            </span>
            <span>
              <ReactCountryFlag countryCode="FR" />
            </span>
            <span>Francais</span>
          </p>
          <p
            onClick={() => setSelectLanguage("Deutsch")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <span
              className={selectLanguage === "Deutsch" ? "flex " : "invisible"}
            >
              <BiSolidDownArrow />
            </span>
            <span>
              <ReactCountryFlag countryCode="DE" />
            </span>
            <span>Deutsch</span>
          </p>
        </div>
        
        <p className="hidden md:flex">Impressum</p>
      </div>
      <div className=" flex sm:hidden">
          <div
            onClick={toggleMenu}
            className=" flex cursor-pointer text-sm px-4 py-1 bg-PRIMARY_BLUE rounded-lg  items-center gap-1"
          >
            <TbWorld />
            <span>Sprachen</span>
          </div>
        </div>
      <div
        className={`absolute top-0 left-0 bg-transparent w-full h-screen z-50  ${
          isMenuActive ? "flex" : "hidden"
        }`}
        onClick={closeMenu}
      >
        <div className=" fixed top-11 transition-all duration-75 w-2/2 h-fit right-5  backdrop-filter backdrop-blur-lg rounded-lg">
          <div className=" flex flex-col gap-4 items-center justify-center my-5 p-2 cursor-pointer ">
            <p className="flex items-center gap-2 cursor-pointer p-2 border-b-2 hover:scale-110">
              <span>
                <ReactCountryFlag countryCode="FR" />
              </span>
              <span>Francais</span>
            </p>
            <p className="flex items-center gap-2  p-2 border-b-2 cursor-pointer hover:scale-110">
              <span>
                <ReactCountryFlag countryCode="DE" />
              </span>
              <span>Deutsch</span>
            </p>
            <p className="flex items-center gap-2  p-2 cursor-pointer hover:scale-110">
              <span>
                <ReactCountryFlag countryCode="EN" />
              </span>
              <span>English</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
