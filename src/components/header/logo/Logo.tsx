import AEHLogo from "../../../assets/AEHLogo.png";

const Logo = () => {
  return (
    <div className=" mt-2 relative container flex items-center justify-center bg-red-400 w-fit">
      <div>
        <img className="lg:w-[554px] lg:h-[260px]" src={AEHLogo} alt="AEH Logo" />
      </div>
      <div
        className="flex flex-col items-end gap-1 absolute bottom-0 right-0 m-4 text-xs sm:text-sm"   
      >
        <p>Action Européenne des Handicapés</p>
        <p>European Action of Persons with Disabilities</p>
        <p>Europäische Behindertenaktion</p>
      </div>
    </div>
  );
};

export default Logo;
