import { NavLink } from "react-router-dom";

const Menu = () => {
  return (

    <div className=" mx-auto w-[50%] my-auto mb-14 max-w-screen-2l px-2,5 md:px-10 lg:px-24">
      <div className="flex items-center gap-3  text-xs sm:text-xs  lg:text-lg w-full justify-around font-bold ">

        <NavLink
          to="/home"
          className={({ isActive }) =>
            `hover:underline ${isActive ? "underline text-blue-600" : "text-black"}`
          }
        >
          <p>Willkommen bei der AEH!</p>
        </NavLink>

        <NavLink
          to="/organisation"
          className={({ isActive }) =>
            `hover:underline ${isActive ? "underline text-blue-600" : "text-black"}`
          }
        >
          <p>Organisation</p>
        </NavLink>

        <NavLink
          to="/mitglieder"
          className={({ isActive }) =>
            `hover:underline ${isActive ? "underline text-blue-600" : "text-black"}`
          }
        >
          <p>Mitglieder</p>
        </NavLink>

        <NavLink
          to="/kontakt"
          className={({ isActive }) =>
            `hover:underline ${isActive ? "underline text-blue-600" : "text-black"}`
          }
        >
          <p>Kontakt</p>
        </NavLink>
      </div>
    </div>

  );
};

export default Menu;
