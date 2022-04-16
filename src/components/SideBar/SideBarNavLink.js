import { NavLink } from "react-router-dom";

const SideBarNavLink = ({ icon, activeIcon, text, onClick, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${
          isActive ? "sidebar-link-selected" : ""
        } sidebar-link flex items-center px-3 py-1 cursor-pointer`
      }
      onClick={onClick}>
      {({ isActive }) => (
        <>
          {isActive ? activeIcon : icon}
          <span className="pl-2">{text}</span>
        </>
      )}
    </NavLink>
  );
};

export { SideBarNavLink };
