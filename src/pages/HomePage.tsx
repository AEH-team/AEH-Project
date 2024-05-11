import Carousel from "../components/carousel/Carousel";

const HomePage = () => {
  const slides: string[] = [
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ];
  return (
    <div className=" container ">
      <div className="w-1/2 m-auto pt-8 ">
        <Carousel slides={slides} />
      </div>
      <div className=" w-full flex justify-center">
        <div className=" w-1/2 flex flex-col justify-center">
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
    </div>
  );
};

export default HomePage;
