import {
  Close,
  HistoryOutlined,
  HomeOutlined,
  PlaylistPlayOutlined,
  ThumbUpOutlined,
  WatchLaterOutlined
} from "@mui/icons-material";
import { Link, NavLink } from "react-router-dom";
import "./SideBar.css";

const SideBar = ({ toggleSidebar }) => {
  const navLinkClasses = ({ isActive }) =>
    `${
      isActive ? "selected-tab" : ""
    } flex items-center px-3 py-1 cursor-pointer`;

  return (
    <>
      <aside className="sidebar fw-500">
        <div className="sidebar__header flex items-center fw-400 py-2 px-3">
          <Close
            className="cursor-pointer mr-2"
            fontSize="large"
            onClick={toggleSidebar}
          />
          <Link to="/">
            <h1 className="logo">52 streams</h1>
          </Link>
        </div>
        <ul>
          <li>
            <NavLink to="/" onClick={toggleSidebar} className={navLinkClasses}>
              <HomeOutlined /> <span className="pl-2">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/watch-later"
              onClick={toggleSidebar}
              className={navLinkClasses}>
              <WatchLaterOutlined /> <span className="pl-2">Watch Later</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/liked-videos"
              onClick={toggleSidebar}
              className={navLinkClasses}>
              <ThumbUpOutlined /> <span className="pl-2">Liked Videos</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/history"
              onClick={toggleSidebar}
              className={navLinkClasses}>
              <HistoryOutlined /> <span className="pl-2">History</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/playlists"
              onClick={toggleSidebar}
              className={navLinkClasses}>
              <PlaylistPlayOutlined /> <span className="pl-2">Playlists</span>
            </NavLink>
          </li>
        </ul>
      </aside>
      <div onClick={toggleSidebar} className="overlay"></div>
    </>
  );
};

export { SideBar };
