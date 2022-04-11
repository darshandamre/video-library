import MoreVertIcon from "@mui/icons-material/MoreVert";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import "./Card.css";
import { CardDialog } from "./CardDialog";

const Card = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const closeDialog = () => setIsDialogOpen(false);
  const dialogWrapperRef = useOnClickOutside(closeDialog, isDialogOpen);
  const topRef = useRef();

  useEffect(() => {
    if (isDialogOpen) {
      topRef.current = document.documentElement.scrollTop;
      document.body.style.top = `-${topRef.current}px`;
    }

    document.body.classList.toggle("stop-scroll");

    if (!isDialogOpen) {
      document.body.style.top = "";
      window.scrollTo(0, topRef.current);
    }
  }, [isDialogOpen]);

  useEffect(() => {
    if (isDialogOpen) {
      window.addEventListener("resize", closeDialog);
    }
    return () => window.removeEventListener("resize", closeDialog);
  }, [isDialogOpen]);

  return (
    <div className="video">
      <Link to="/video">
        <img
          className="video__thumbnail"
          src="https://i.ytimg.com/vi/I0KSaqiv5C0/hq720.jpg"
          alt="Liquid Paper | If Bruce Lee shuffled cards..."
        />
      </Link>
      <div className="flex">
        <Link to="/video">
          <h3 className="fw-500 p-1">
            Liquid Paper | If Bruce Lee shuffled cards... | Cardistry by
            Virtuoso
          </h3>
        </Link>
        <div className="dialog-wrapper" ref={dialogWrapperRef}>
          <MoreVertIcon
            onClick={() => setIsDialogOpen(o => !o)}
            className={`more-icon cursor-pointer my-1 ${
              isDialogOpen ? "more-icon-clicked" : ""
            }`}
          />
          {isDialogOpen ? <CardDialog handleClose={closeDialog} /> : null}
        </div>
      </div>
      <p className="video__creator px-1">thevirts</p>
      <div className="video__info px-1 pb-1">
        <span> 5.4M views </span>|<span> 5 months ago </span>
      </div>
    </div>
  );
};

export { Card };
