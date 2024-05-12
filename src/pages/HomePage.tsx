import MaxWithWrapper from "../components/MaxWithWrapper";
import AboutUsSection from "../components/aboutSection/AboutUsSection";
import Carousel from "../components/carousel/Carousel";
import ImageCard from "../components/imageCard/ImageCard";

const HomePage = () => {
  const slides: string[] = [
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ];

  const images = [
    {
      src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      title: "Europarat ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
    },
    {
      src: "https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      title: "EDF",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
    },
    {
      src: "https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      title: "UNSER AKTION",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
    },
  ];
  return (
    <MaxWithWrapper>
       <div className=" w-full  max-w-full   pt-8 ">
        <Carousel slides={slides} />
      </div> 
      <div className=" w-full  ">
        <div className=" w-full mx-3 ">
         
         <AboutUsSection/>
         
        </div>
      </div>
      <div className="flex  items-center justify-center bg-neutral-800">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <ImageCard key={index} {...image} />
            ))}
          </div>
        </div>
    </MaxWithWrapper>
  );
};

export default HomePage;
