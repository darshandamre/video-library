import { useEffect, useReducer } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header, SideBar } from "../../components";
import "./Layout.css";

const Layout = () => {
  const [showSidebar, toggleSidebar] = useReducer(state => !state, false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

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
