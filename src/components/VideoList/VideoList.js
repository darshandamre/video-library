import React from "react";
import { Card } from "../../components";
import "./VideoList.css";

const VideoList = () => {
  return (
    <div className="video-list m-1">
      {Array.from({ length: 20 }).map((x, i) => (
        <Card key={i} />
      ))}
    </div>
  );
};

export { VideoList };
