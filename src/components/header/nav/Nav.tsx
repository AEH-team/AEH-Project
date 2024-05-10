import { FaFacebook, FaYoutube } from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";
import { BiSolidDownArrow } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {

    const [selectLanguage , setSelectLanguage ] = useState("English")
    
  return (
    <div className=" container mt-2 flex justify-around items-center w-full">
      <div className=" flex gap-3">
        <FaFacebook className=" w-7 h-7 text-PRIMARY_BLUE" />
        <img src="/public/X.png" alt="" className=" w-7 h-7 rounded-full" />
        <img
          src="/public/instegram.jpeg"
          alt=""
          className=" w-7 h-7 rounded-full"
        />
        <FaYoutube className=" w-7 h-7 rounded-full text-red-500" />
      </div>
      <div className="  flex items-start justify-around gap-6">
        <div>
          <p 
          onClick={()=>setSelectLanguage("English")}
          className=" flex items-center gap-2 cursor-pointer">
            <span className={selectLanguage === "English" ? "flex " : "invisible"}>
              <BiSolidDownArrow />
            </span>
            <span>
              <ReactCountryFlag countryCode="US" />
            </span>
            <span>English</span>
          </p>
          <p 
          onClick={()=>setSelectLanguage("Francais")}
          className=" flex items-center gap-2 cursor-pointer">
            <span className={selectLanguage === "Francais" ? "flex " : "invisible"}>
              <BiSolidDownArrow  />
            </span>
            <span>
              <ReactCountryFlag countryCode="FR" />
            </span>
            <span>Francais</span>
          </p>
          <p
           onClick={()=>setSelectLanguage("Deutsch")}
          className=" flex items-center gap-2 cursor-pointer">
            <span className={selectLanguage === "Deutsch" ? "flex " : "invisible"}>
              <BiSolidDownArrow />
            </span>
            <span>
              <ReactCountryFlag countryCode="DE" />
            </span>
            <span>Deutsch</span>
          </p>
        </div>
        <p>Impressum</p>
      </div>
    </div>
  );
};

export default Nav;
