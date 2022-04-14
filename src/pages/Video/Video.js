import {
  PlaylistAddOutlined,
  ShareOutlined,
  ThumbUpOutlined,
  WatchLaterOutlined
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
        <div>
          <div className="video-actions-container mx-auto">
            <button className="video-actions">
              <ThumbUpOutlined className="mr-1" /> Like
            </button>
            <button className="video-actions">
              <ShareOutlined className="mr-1" />
              Share
            </button>
            <button className="video-actions">
              <PlaylistAddOutlined className="mr-1" />
              Save
            </button>
            <button className="video-actions">
              <WatchLaterOutlined className="mr-1" />
              Watch Later
            </button>
          </div>
          <p className="creator fw-600 text-base mb-0">{creator}</p>
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
