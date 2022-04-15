import {
  PlaylistAddOutlined,
  ShareOutlined,
  ThumbUpOutlined
} from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { useVideo } from "../../react-query/queries";
import "./Video.css";

const Video = () => {
  const { videoId } = useParams();
  const { data } = useVideo(videoId);
  const { title, creator, description } = data?.video ?? {};

  return (
    <>
      <div className="video-player-wrapper p-3">
        <iframe
          className="video-player"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>

        <h3 className="h3">{title}</h3>
        <div className="video-actions-container flex items-center py-2">
          <p className="fw-600 text-base m-0">{creator}</p>
          <button className="video-actions ml-auto">
            <ThumbUpOutlined />
            <span className="video-actions-text ml-1">Like</span>
          </button>
          <button className="video-actions">
            <ShareOutlined />
            <span className="video-actions-text ml-1">Share</span>
          </button>
          <button className="video-actions">
            <PlaylistAddOutlined />
            <span className="video-actions-text ml-1">Save</span>
          </button>
        </div>

        <div className="description-box">
          <h4 className="h4">Description</h4>
          <p className="text-base fw-500">{description}</p>
        </div>
      </div>
    </>
  );
};

export { Video };
