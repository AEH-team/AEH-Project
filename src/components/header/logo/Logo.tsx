import AEHLogo from "../../../assets/AEHLogo.png";

const Logo = () => {
  return (
    <div className=" px-5 mt-2 relative container flex items-center justify-center  w-full">
      <div className=" w-full flex justify-center h-auto p-2">
        <img className="lg:w-1/2 rounded-lg sm:rounded-none" src={AEHLogo} alt="AEH Logo" />
      </div>
      <div
        className=" flex flex-col items-end gap-1 absolute bottom-0 lg:right-64 xl:right-96 md:right-48 sm:right-40 right-10 m-4 text-xs sm:text-xs lg:text-sm "   
      >
        <p>Action Européenne des Handicapés</p>
        <p>European Action of Persons with Disabilities</p>
        <p>Europäische Behindertenaktion</p>
      </div>
    </div>
  );
};

export default Logo;
