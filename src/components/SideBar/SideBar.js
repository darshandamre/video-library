import React from "react";
import {
  HistoryOutlined,
  HomeOutlined,
  PlaylistPlayOutlined,
  ThumbUpOutlined,
  WatchLaterOutlined
} from "@mui/icons-material";
import "./SideBar.css";

const SideBar = ({ showSidebar }) => {
  return (
    <aside
      className={`sidebar ${
        showSidebar ? "sidebar--visible" : ""
      } fw-500 py-1`}>
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
        </li>{" "}
        <li className="flex items-center px-3 py-1 cursor-pointer">
          <PlaylistPlayOutlined /> <span className="pl-2">Playlists</span>
        </li>
        <li className="flex items-center px-3 py-1 cursor-pointer">
          <PlaylistPlayOutlined /> <span className="pl-2">Playlists</span>
        </li>
        <li className="flex items-center px-3 py-1 cursor-pointer">
          <PlaylistPlayOutlined /> <span className="pl-2">Playlists</span>
        </li>
        <li className="flex items-center px-3 py-1 cursor-pointer">
          <PlaylistPlayOutlined /> <span className="pl-2">Playlists</span>
        </li>
        <li className="flex items-center px-3 py-1 cursor-pointer">
          <PlaylistPlayOutlined /> <span className="pl-2">Playlists</span>
        </li>
        <li className="flex items-center px-3 py-1 cursor-pointer">
          <PlaylistPlayOutlined /> <span className="pl-2">Playlists</span>
        </li>
        <li className="flex items-center px-3 py-1 cursor-pointer">
          <PlaylistPlayOutlined /> <span className="pl-2">Playlists</span>
        </li>
        <li className="flex items-center px-3 py-1 cursor-pointer">
          <PlaylistPlayOutlined /> <span className="pl-2">Playlists</span>
        </li>
        <li className="flex items-center px-3 py-1 cursor-pointer">
          <PlaylistPlayOutlined /> <span className="pl-2">Playlists</span>
        </li>
        <li className="flex items-center px-3 py-1 cursor-pointer">
          <PlaylistPlayOutlined /> <span className="pl-2">Playlists</span>
        </li>
        <li className="flex items-center px-3 py-1 cursor-pointer">
          <PlaylistPlayOutlined /> <span className="pl-2">Playlists</span>
        </li>
        <li className="flex items-center px-3 py-1 cursor-pointer">
          <PlaylistPlayOutlined /> <span className="pl-2">Playlists</span>
        </li>
        <li className="flex items-center px-3 py-1 cursor-pointer">
          <PlaylistPlayOutlined /> <span className="pl-2">Playlists</span>
        </li>
        <li className="flex items-center px-3 py-1 cursor-pointer">
          <PlaylistPlayOutlined /> <span className="pl-2">Playlists</span>
        </li>
        <li className="flex items-center px-3 py-1 cursor-pointer">
          <PlaylistPlayOutlined /> <span className="pl-2">Playlists</span>
        </li>
        <li className="flex items-center px-3 py-1 cursor-pointer">
          <PlaylistPlayOutlined /> <span className="pl-2">Playlists</span>
        </li>
        <li className="flex items-center px-3 py-1 cursor-pointer">
          <PlaylistPlayOutlined /> <span className="pl-2">Playlists</span>
        </li>
        <li className="flex items-center px-3 py-1 cursor-pointer">
          <PlaylistPlayOutlined /> <span className="pl-2">Playlists</span>
        </li>
        <li className="flex items-center px-3 py-1 cursor-pointer">
          <PlaylistPlayOutlined /> <span className="pl-2">Playlists</span>
        </li>
        <li className="flex items-center px-3 py-1 cursor-pointer">
          <PlaylistPlayOutlined /> <span className="pl-2">Playlists</span>
        </li>
        <li className="flex items-center px-3 py-1 cursor-pointer">
          <PlaylistPlayOutlined /> <span className="pl-2">Playlists</span>
        </li>
        <li className="flex items-center px-3 py-1 cursor-pointer">
          <PlaylistPlayOutlined /> <span className="pl-2">Playlists</span>
        </li>
        <li className="flex items-center px-3 py-1 cursor-pointer">
          <PlaylistPlayOutlined /> <span className="pl-2">Playlists</span>
        </li>
        <li className="flex items-center px-3 py-1 cursor-pointer">
          <PlaylistPlayOutlined /> <span className="pl-2">Playlists</span>
        </li>
        <li className="flex items-center px-3 py-1 cursor-pointer">
          <PlaylistPlayOutlined /> <span className="pl-2">Playlists</span>
        </li>
        <li className="flex items-center px-3 py-1 cursor-pointer">
          <PlaylistPlayOutlined /> <span className="pl-2">Playlists</span>
        </li>
        <li className="flex items-center px-3 py-1 cursor-pointer">
          <PlaylistPlayOutlined /> <span className="pl-2">Playlists</span>
        </li>
        <li className="flex items-center px-3 py-1 cursor-pointer">
          <PlaylistPlayOutlined /> <span className="pl-2">Playlists</span>
        </li>
        <li className="flex items-center px-3 py-1 cursor-pointer">
          <PlaylistPlayOutlined /> <span className="pl-2">Playlists</span>
        </li>
        <li className="flex items-center px-3 py-1 cursor-pointer">
          <PlaylistPlayOutlined /> <span className="pl-2">Playlists</span>
        </li>
        <li className="flex items-center px-3 py-1 cursor-pointer">
          <PlaylistPlayOutlined /> <span className="pl-2">Playlists</span>
        </li>
        <li className="flex items-center px-3 py-1 cursor-pointer">
          <PlaylistPlayOutlined /> <span className="pl-2">Playlists</span>
        </li>
        <li className="flex items-center px-3 py-1 cursor-pointer">
          <PlaylistPlayOutlined /> <span className="pl-2">Playlists</span>
        </li>
        <li className="flex items-center px-3 py-1 cursor-pointer">
          <PlaylistPlayOutlined /> <span className="pl-2">Playlists</span>
        </li>
        <li className="flex items-center px-3 py-1 cursor-pointer">
          <PlaylistPlayOutlined /> <span className="pl-2">Playlists</span>
        </li>
        <li className="flex items-center px-3 py-1 cursor-pointer">
          <PlaylistPlayOutlined /> <span className="pl-2">Playlists</span>
        </li>
        <li className="flex items-center px-3 py-1 cursor-pointer">
          <PlaylistPlayOutlined /> <span className="pl-2">Playlists</span>
        </li>
        <li className="flex items-center px-3 py-1 cursor-pointer">
          <PlaylistPlayOutlined /> <span className="pl-2">Playlists</span>
        </li>
        <li className="flex items-center px-3 py-1 cursor-pointer">
          <PlaylistPlayOutlined /> <span className="pl-2">Playlists</span>
        </li>
        <li className="flex items-center px-3 py-1 cursor-pointer">
          <PlaylistPlayOutlined /> <span className="pl-2">Playlists</span>
        </li>
      </ul>
    </aside>
  );
};

export { SideBar };
