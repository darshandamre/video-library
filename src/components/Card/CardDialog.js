import {
  DeleteOutlined,
  PlaylistAddOutlined,
  ShareOutlined,
  WatchLaterOutlined
} from "@mui/icons-material";
import React, { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import {
  useAddToWatchLater,
  useRemoveFromWatchLater
} from "../../react-query/mutations";
import "./CardDialog.css";

const CardDialog = ({ video, handleClose }) => {
  const dialogRef = useRef();
  const { mutate: addToWatchLater } = useAddToWatchLater();
  const { mutate: removeFromWatchLater } = useRemoveFromWatchLater();
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const dialogDimensions = dialogRef.current.getBoundingClientRect();
    if (dialogDimensions.right >= document.body.clientWidth) {
      dialogRef.current.style.right = 0;
    }

    if (dialogDimensions.bottom >= window.innerHeight) {
      dialogRef.current.style.bottom = "4.5rem";
    }
  }, []);

  return (
    <div className="dialog fw-500 py-1" ref={dialogRef}>
      {pathname === "/watch-later" ? (
        <div
          onClick={() => {
            removeFromWatchLater(video._id);
            handleClose();
          }}
          className="flex items-center cursor-pointer py-1">
          <DeleteOutlined className="mx-2" />
          Remove From Watch Later
        </div>
      ) : (
        <div
          onClick={() => {
            addToWatchLater(video);
            handleClose();
          }}
          className="flex items-center cursor-pointer py-1">
          <WatchLaterOutlined className="mx-2" />
          Save to Watch Later
        </div>
      )}

      <div className="flex items-center cursor-pointer py-1">
        <PlaylistAddOutlined className="mx-2" /> Save to Playlist
      </div>
      <div className="flex items-center cursor-pointer py-1">
        <ShareOutlined className="mx-2" /> Share
      </div>
    </div>
  );
};

export { CardDialog };
