import Carousel from "../components/carousel/Carousel";

const HomePage = () => {
  const slides: string[] = [
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ];
  return (
    <div>
      <div className="w-[60%] m-auto pt-11 ">
        <Carousel slides={slides} />
      </div>
    </div>
  );
};

export default HomePage;
