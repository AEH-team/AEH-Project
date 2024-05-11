import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Logo from "./components/header/logo/Logo";
import Nav from "./components/header/nav/Nav";
import Menu from "./components/menu/Menu";
import Carousel from "./components/carousel/Carousel.tsx";

const App = () => {
    const slides: string[] = [
        "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
        "https://wallpapercave.com/wp/wp3386769.jpg",
        "https://wallpaperaccess.com/full/809523.jpg",
        "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
    ];
  return (
    <div className=" ">
        <div className=" container ">
            <div>
                <Nav/>
            </div>
            <div className=" mt-10">
                <Logo/>
            </div>
            <div className=" mt-10">
                <Menu/>
            </div>
            <div className="w-[60%] m-auto pt-11">
                <Carousel slides={slides}/>
            </div>
            <div>
          <Outlet/>
        </div>
        </div>

      <div className=" w-full bg-LIGHT_BLUE  bottom-0 mt-10  ">
        <Footer />

      </div>
    </div>
  );
};

export default App;
