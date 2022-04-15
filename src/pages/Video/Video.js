import {
  PlaylistAddOutlined,
  ShareOutlined,
  ThumbUp,
  ThumbUpOutlined
} from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { useAddToLikes, useRemoveFromLikes } from "../../react-query/mutations";
import { useLikes, useVideo } from "../../react-query/queries";
import "./Video.css";

const Video = () => {
  const { videoId } = useParams();
  const { data: videoData } = useVideo(videoId);
  const { video } = videoData ?? {};
  const { title, creator, description } = video ?? {};

  const { data: likesData } = useLikes();
  const { mutate: addToLikes } = useAddToLikes();
  const { mutate: removeFromLikes } = useRemoveFromLikes();

  const liked = likesData?.likes?.some(
    likedVideo => likedVideo._id === videoId
  );

  const handleLikes = () => {
    liked ? removeFromLikes(videoId) : addToLikes(video);
  };

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
          <button
            className="video-actions ml-auto"
            onClick={handleLikes}
            title={liked ? "unlike" : "I like this"}>
            {liked ? <ThumbUp /> : <ThumbUpOutlined />}
            <span className="video-actions-text ml-1">
              {liked ? "liked" : "like"}
            </span>
          </button>
          <button className="video-actions" title="Share">
            <ShareOutlined />
            <span className="video-actions-text ml-1">Share</span>
          </button>
          <button className="video-actions" title="Save">
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
