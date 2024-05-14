import {  BiSolidRightArrow } from "react-icons/bi";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motin";



const Footer = () => {
  return (
      <div className="mx-auto w-[53%] my-auto  max-w-screen-2l px-2,5 md:px-10 lg:px-24">
        <div className=" container  flex h-full  w-full items-center justify-around p-4 ">
          <motion.div
              variants={fadeIn("left", 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{margin: "100px"}}
          >
            <div className=" flex flex-col items-center justify-center gap-2">
              <h1 className=" w-full text-start font-FONT_VIGA text-xl ">Menu</h1>
              <ul className="text-xs font-medium  ">
                <li className="flex gap-2 items-center cursor-pointer hover:underline">
            <span>
              {" "}
              <BiSolidRightArrow className="  "/>
            </span>
                  Willkommen bei der AEH!
                </li>
                <li className="flex gap-2 items-center cursor-pointer hover:underline">
            <span>
              {" "}
              <BiSolidRightArrow className=" "/>
            </span>
                  Organisation
                </li>
                <li className="flex gap-2 items-center cursor-pointer hover:underline">
            <span>
              {" "}
              <BiSolidRightArrow className=" "/>
             
            </span>
                  Mitglieder
                </li>
                <li className="flex gap-2 items-center cursor-pointer hover:underline">
            <span>
              {" "}
              <BiSolidRightArrow className=" "/>
            
            </span>
                  Kontakt
                </li>
                <li className="flex gap-2 items-center cursor-pointer hover:underline">
            <span>
              {" "}
              <BiSolidRightArrow className=" "/>
              
            </span>
                  Datenschutzerklärung
                </li>
                <li className="flex gap-2 items-center cursor-pointer hover:underline">
            <span>
              {" "}
              <BiSolidRightArrow className=" "/>
            
            </span>
                  Impressum
                </li>
                <li className=" font-bold font-FONT_ROBOTO text-sm mt-2">© AEH 2024</li>
              </ul>
              <p></p>
            </div>
          </motion.div>
          <div style={{width: "150px"}}></div>
          <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{margin: "100px"}}
          >
            <div className=" flex items-center justify-center flex-col gap-5">
              <div className=" flex w-full   items-center gap-2">
                <p><img src="/footer/youtube.png" alt="youtube"
                        className="  w-5 h-5 lg:w-10 lg:h-10 rounded-full text-LIGHT_BLUE"/></p>
                <p><img src="/footer/facebook.png" className="  w-5 h-5 lg:w-5 lg:h-5"/></p>
                <p><img src="/footer/linkedin.png" className=" w-5 h-5 md:w-7 md:h-7 rounded-full" alt=""/></p>
                <p><img src="/footer/twitter.png" className=" w-5 h-5 md:w-7 md:h-7 rounded-full" alt=""/></p>
                <p><img src="/footer/instegram.png" className=" w-5 h-5 md:w-7 md:h-7 rounded-full" alt=""/></p>
                <p><img src="/footer/tiktok.png" className="  w-5 h-5 lg:w-10 lg:h-10"/></p>
              </div>
              <div>
                <img className=" lg:w-[441px] lg:h-[150px] w-62 h-32" src="/footer/image4.png" alt=""/>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
  );
};

export default Footer;
