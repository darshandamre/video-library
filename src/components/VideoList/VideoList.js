import React from "react";
import { Card } from "../../components";
import "./VideoList.css";

const VideoList = ({ videos }) => {
  return (
    <div className="video-list m-1">
      {videos?.map(video => (
        <Card key={video._id} video={video} />
      ))}
    </div>
  );
};

export { VideoList };
