import Carousel from "../components/carousel/Carousel";
import ImageCard from "../components/imagecard/ImageCard";
import AboutUsSection from "../components/aboutussection/AboutUsSection";
const HomePage = () => {
  const slides: string[] = [
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ];

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      title: 'Europarat ',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.',
    },
    {
      src: 'https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
      title: 'EDF',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.',
    },
    {
      src: 'https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
      title: 'UNSER AKTION',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.',
    },
  ];

  return (

      <div className="container">
        <div className="w-1/2 m-auto pt-8">
          <Carousel slides={slides}/>
        </div>
        <div className="container">
          <AboutUsSection/>
        </div>
        <div className="flex min-h-screen items-center justify-center bg-neutral-800">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
                <ImageCard key={index} {...image} />
            ))}

    <div className=" container mx-auto ">
       <div className="md:w-1/2  max-w-full mx-3 md:m-auto pt-8 ">
        <Carousel slides={slides} />
      </div> 
      <div className=" w-full flex justify-center">
        <div className=" sm:w-1/2 w-full mx-3 flex flex-col justify-center">
          <div className=" w-1/2  flex  justify-start mt-8">
            <h1 className=" lg:text-4xl text-xl">
              {" "}
              <span className=" font-bold">Wer</span> sind wir
            </h1>
          </div>
          <div className="  flex flex-col gap-6 justify-center mt-5">
            <div className=" w-full flex justify-start">
              <img src="/biqQoteOben.png" alt="" />
            </div>
            <p className="relative text-justify leading-8  ">
              Die AEH wurde 1979 gegründet, um Menschen mit Behinderungen zu
              unterstützen, wobei die Implementierung der
              UN-Behindertenrechtskonvention (UNBRK) ein zentrales Ziel
              darstellt.
            </p>
            <p className=" text-balance leading-8  ">
              Als Mitbegründerin des Europäischen Behindertenforums (EDF) ist
              die AEH Teil einer bedeutenden Institution, die sich auf
              europäischer und internationaler Ebene für die Interessen von
              Menschen mit Behinderungen einsetzt.
            </p>
            <p className=" text-justify leading-8  ">
              {" "}
              Aktuell konzentriert sich die AEH auf die Herausforderungen, die
              sich aus der Alterung von Menschen mit Behinderungen ergeben,
              insbesondere im Hinblick auf die Verbesserung ihrer Wohnsituation.
            </p>
            <div className=" w-full flex justify-end">
              <img className=" " src="/biQuoteUnten.png" alt="" />
            </div>

          </div>

        </div>
      </div>
  );
};

export default HomePage;
