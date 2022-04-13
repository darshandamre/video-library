import { useReducer } from "react";
import { Outlet } from "react-router-dom";
import { Header, SideBar } from "../../components";
import "./Layout.css";

const Layout = () => {
  const [showSidebar, toggleSidebar] = useReducer(state => !state, false);

  return (
    <div className={`layout ${showSidebar ? "show-sidebar" : ""}`}>
      <Header toggleSidebar={toggleSidebar} />
      <SideBar toggleSidebar={toggleSidebar} />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export { Layout };
