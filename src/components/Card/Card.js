import { useEffect, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import { VideoDialog } from "../../components";
import "./Card.css";

const Card = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("modal-open");
  }, [isDialogOpen]);

  return (
    <>
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
          <MoreVertIcon
            onClick={() => setIsDialogOpen(true)}
            className="more-icon cursor-pointer my-1"
          />
        </div>
        <p className="video__creator px-1">thevirts</p>
        <div className="video__info px-1 pb-1">
          <span>5.4M views </span>
          {" | "}
          <span>5 months ago</span>
        </div>
      </div>
      {isDialogOpen ? (
        <VideoDialog handleClose={() => setIsDialogOpen(false)} />
      ) : null}
    </>
  );
};

export { Card };
