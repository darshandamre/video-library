import {
  Close,
  History,
  Home,
  HomeOutlined,
  PlaylistPlay,
  ThumbUp,
  ThumbUpOutlined,
  WatchLater,
  WatchLaterOutlined
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./SideBar.css";
import { SideBarNavLink } from "./SideBarNavLink";

const SideBar = ({ toggleSidebar }) => {
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
            <SideBarNavLink
              to="/"
              onClick={toggleSidebar}
              icon={<HomeOutlined />}
              activeIcon={<Home />}
              text="Home"
            />
          </li>
          <li>
            <SideBarNavLink
              to="/watch-later"
              onClick={toggleSidebar}
              icon={<WatchLaterOutlined />}
              activeIcon={<WatchLater />}
              text="Watch Later"
            />
          </li>
          <li>
            <SideBarNavLink
              to="/liked-videos"
              onClick={toggleSidebar}
              icon={<ThumbUpOutlined />}
              activeIcon={<ThumbUp />}
              text="Liked Videos"
            />
          </li>
          <li>
            <SideBarNavLink
              to="/history"
              onClick={toggleSidebar}
              icon={<History />}
              activeIcon={
                <History
                  sx={{
                    stroke: "black"
                  }}
                />
              }
              text="History"
            />
          </li>
          <li>
            <SideBarNavLink
              to="/playlists"
              onClick={toggleSidebar}
              icon={<PlaylistPlay />}
              activeIcon={
                <PlaylistPlay
                  sx={{
                    stroke: "black"
                  }}
                />
              }
              text="Playlists"
            />
          </li>
        </ul>
      </aside>
      <div onClick={toggleSidebar} className="overlay"></div>
    </>
  );
};

export { SideBar };
