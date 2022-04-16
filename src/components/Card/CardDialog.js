import {
  DeleteOutlined,
  PlaylistAddOutlined,
  ShareOutlined,
  WatchLaterOutlined
} from "@mui/icons-material";
import React, { useLayoutEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";
import {
  useAddToWatchLater,
  useRemoveFromLikes,
  useRemoveFromWatchLater
} from "../../react-query/mutations";
import "./CardDialog.css";

const CardDialog = ({ video, handleClose }) => {
  const dialogRef = useRef();
  const { isAuth } = useAuth();
  const { mutate: addToWatchLater } = useAddToWatchLater();
  const { mutate: removeFromWatchLater } = useRemoveFromWatchLater();
  const { mutate: removeFromLikes } = useRemoveFromLikes();
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();

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
    <div className="dialog fw-500" ref={dialogRef}>
      <div className="py-1">
        {pathname === "/watch-later" ? (
          <div
            onClick={() => {
              removeFromWatchLater(video._id);
              handleClose();
            }}
            className="dialog-options">
            <DeleteOutlined className="mx-2" />
            Remove From Watch Later
          </div>
        ) : (
          <div
            onClick={() => {
              if (!isAuth)
                return navigate("/login", {
                  state: { from: location },
                  replace: true
                });
              addToWatchLater(video);
              handleClose();
            }}
            className="dialog-options">
            <WatchLaterOutlined className="mx-2" />
            Save to Watch Later
          </div>
        )}

        <div className="dialog-options">
          <PlaylistAddOutlined className="mx-2" /> Save to Playlist
        </div>
        <div className="dialog-options">
          <ShareOutlined className="mx-2" /> Share
        </div>
      </div>
      {pathname === "/liked-videos" ? (
        <>
          <div className="border-top-grey mx-2"></div>
          <div className="py-1">
            <div
              className="dialog-options"
              onClick={() => {
                removeFromLikes(video._id);
                handleClose();
              }}>
              <DeleteOutlined className="mx-2" /> Remove from liked videos
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export { CardDialog };
