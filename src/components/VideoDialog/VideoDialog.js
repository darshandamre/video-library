import React, { useLayoutEffect, useRef } from "react";
import {
  PlaylistAddOutlined,
  ShareOutlined,
  WatchLaterOutlined
} from "@mui/icons-material";
import "./VideoDialog.css";

const VideoDialog = () => {
  const dialogRef = useRef();

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
    <div className="video-dialog fw-500 py-1" ref={dialogRef}>
      <div className="flex items-center cursor-pointer py-1">
        <WatchLaterOutlined className="mx-2" /> Save to Watch Later
      </div>
      <div className="flex items-center cursor-pointer py-1">
        <PlaylistAddOutlined className="mx-2" /> Save to Playlist
      </div>
      <div className="flex items-center cursor-pointer py-1">
        <ShareOutlined className="mx-2" /> Share
      </div>
    </div>
  );
};

export { VideoDialog };
