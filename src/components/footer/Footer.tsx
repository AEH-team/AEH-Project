import {  BiSolidRightArrow } from "react-icons/bi";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="  flex  h-[375px] items-start justify-around p-4 ">
      <div className=" flex flex-col items-center justify-center gap-2">
        <h1 className=" font-FONT_VIGA font-bold">Menu</h1>
        <ul className=" text-xs lg:text-lg mt-5">
          <li className="flex gap-2 items-center">
            <span>
              {" "}
              <BiSolidRightArrow className="  " />
            </span>
            Willkommen bei der AEH!
          </li>
          <li className="flex gap-2 items-center">
            <span>
              {" "}
              <BiSolidRightArrow className=" " />
            </span>
            Organisation
          </li>
          <li className="flex gap-2 items-center">
            <span>
              {" "}
              <BiSolidRightArrow className=" " />
             
            </span>
            Mitglieder
          </li>
          <li className="flex gap-2 items-center">
            <span>
              {" "}
              <BiSolidRightArrow className=" " />
            
            </span>
            Kontakt
          </li>
          <li className="flex gap-2 items-center">
            <span>
              {" "}
              <BiSolidRightArrow className=" " />
              
            </span>
            Datenschutzerklärung
          </li>
          <li className="flex gap-2 items-center">
            <span>
              {" "}
              <BiSolidRightArrow className=" " />
            
            </span>
            Impressum
          </li>
        </ul>
      </div>
      <div className=" flex items-center justify-center flex-col gap-5">
        <div className=" flex w-full   items-center gap-2">
          <p><FaYoutube  className=" w-5 h-5 md:w-7 md:h-7"/></p>
          <p><FaFacebook className=" w-5 h-5 md:w-7 md:h-7" /></p>
          <p><img src="/linkidin.png" className = " w-5 h-5 md:w-7 md:h-7 rounded-full" alt="" /></p>
          <p><img src="/X.png" className = " w-5 h-5 md:w-7 md:h-7 rounded-full" alt="" /></p>
          <p><img src="/instegram.jpeg" className = " w-5 h-5 md:w-7 md:h-7 rounded-full" alt="" /></p>
          <p><FaTiktok className="md:w-7 md:h-7"/></p>
        </div>
        <div>
          <img className=" lg:w-[441px] lg:h-[235px] w-62 h-32" src="/web5.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
