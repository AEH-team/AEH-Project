import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className=" flex justify-center">
      <div className="flex items-center gap-3 lg:justify-between text-xs sm:text-sm lg:text-lg lg:w-1/2">
        {/* Alle NavLink mit underline-Style */}
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
          <p>organisation</p>
        </NavLink>

        <NavLink
          to="/mitglieder"
          className={({ isActive }) =>
            `hover:underline ${isActive ? "underline text-blue-600" : "text-black"}`
          }
        >
          <p>mitglieder</p>
        </NavLink>

        <NavLink
          to="/kontakt"
          className={({ isActive }) =>
            `hover:underline ${isActive ? "underline text-blue-600" : "text-black"}`
          }
        >
          <p>kontakt</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Menu;
