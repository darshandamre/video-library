import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = () => {
  return (
    <div className="video">
      <Link to="/video">
        <img
          className="video__thumbnail"
          src="https://i.ytimg.com/vi/I0KSaqiv5C0/hq720.jpg"
          alt="Liquid Paper | If Bruce Lee shuffled cards..."
        />
        <h3 className="fw-500 p-1">
          Liquid Paper | If Bruce Lee shuffled cards... | Cardistry by Virtuoso
        </h3>
        <p className="video__creator px-1">thevirts</p>
        <div className="px-1 pb-1">
          <span>5.4M views </span>
          {" | "}
          <span>5 months ago</span>
        </div>
      </Link>
    </div>
  );
};

export { Card };
