import { Link } from "react-router-dom";
import { VideoList } from "../../components";
import { useLikes } from "../../react-query/queries";

const LikedVideos = () => {
  const { data, isLoading } = useLikes();

  return (
    <>
      <h3 className="h3 mx-4 my-2">Liked Videos</h3>
      {isLoading ? (
        "loading..."
      ) : data?.likes.length === 0 ? (
        <div className="mx-4">
          No liked videos,{" "}
          <Link to="/" className="btn btn--link mx-0 px-0">
            explore videos.
          </Link>
        </div>
      ) : (
        <VideoList videos={data?.likes} />
      )}
    </>
  );
};

export { LikedVideos };
