import { MoreVert, Close } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useOnClickOutside } from "../../hooks";
import { useRemoveFromHistory } from "../../react-query/mutations";
import { SavePlaylistModal } from "../PlaylistModals/SavePlaylistModal";
import "./Card.css";
import { CardDialog } from "./CardDialog";

const Card = ({ video }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const closeDialog = () => setIsDialogOpen(false);
  const dialogWrapperRef = useOnClickOutside(closeDialog, isDialogOpen);

  const [isPlaylistModalOpen, setIsPlaylistModalOpen] = useState(false);
  const openPlaylistModal = () => setIsPlaylistModalOpen(true);
  const closePlaylistModal = () => setIsPlaylistModalOpen(false);

  const { pathname } = useLocation();
  const { mutate: removeFromHistory } = useRemoveFromHistory();

  useEffect(() => {
    if (isDialogOpen) {
      window.addEventListener("resize", closeDialog);
    }
    return () => window.removeEventListener("resize", closeDialog);
  }, [isDialogOpen]);

  const { _id, title, creator } = video;

  return (
    <>
      <div className="video flex direction-column">
        {pathname === "/history" ? (
          <button
            className="close-icon flex"
            title="Remove from history"
            onClick={() => removeFromHistory(_id)}>
            <Close />
          </button>
        ) : null}
        <Link to={`/video/${_id}`}>
          <img
            className="video__thumbnail"
            src={`https://img.youtube.com/vi/${_id}/mqdefault.jpg`}
            alt="Liquid Paper | If Bruce Lee shuffled cards..."
          />
        </Link>
        <div className="flex">
          <h3 className="video__title fw-500 m-1">
            <Link to={`/video/${_id}`}>{title}</Link>
          </h3>
          <div className="dialog-wrapper ml-auto" ref={dialogWrapperRef}>
            <MoreVert
              onClick={() => setIsDialogOpen(o => !o)}
              className={`more-icon cursor-pointer my-1 ${
                isDialogOpen ? "more-icon-clicked" : ""
              }`}
            />
            {isDialogOpen ? (
              <CardDialog
                video={video}
                handleClose={closeDialog}
                openPlaylistModal={openPlaylistModal}
              />
            ) : null}
          </div>
        </div>
        <p className="video__creator px-1 mt-auto pb-1">{creator}</p>
      </div>
      {isPlaylistModalOpen ? (
        <SavePlaylistModal closeModal={closePlaylistModal} video={video} />
      ) : null}
    </>
  );
};

export { Card };
