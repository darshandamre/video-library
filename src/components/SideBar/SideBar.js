import {
  Close,
  HistoryOutlined,
  HomeOutlined,
  PlaylistPlayOutlined,
  ThumbUpOutlined,
  WatchLaterOutlined
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./SideBar.css";

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
          <li className="selected-tab flex items-center px-3 py-1 cursor-pointer">
            <HomeOutlined /> <span className="pl-2">Home</span>
          </li>
          <li className="flex items-center px-3 py-1 cursor-pointer">
            <WatchLaterOutlined /> <span className="pl-2">Watch Later</span>
          </li>
          <li className="flex items-center px-3 py-1 cursor-pointer">
            <ThumbUpOutlined /> <span className="pl-2">Liked Videos</span>
          </li>
          <li className="flex items-center px-3 py-1 cursor-pointer">
            <HistoryOutlined /> <span className="pl-2">History</span>
          </li>
          <li className="flex items-center px-3 py-1 cursor-pointer">
            <PlaylistPlayOutlined /> <span className="pl-2">Playlists</span>
          </li>
        </ul>
      </aside>
      <div className="overlay"></div>
    </>
  );
};

export { SideBar };
