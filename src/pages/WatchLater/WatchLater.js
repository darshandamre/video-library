import { Link } from "react-router-dom";
import { VideoList } from "../../components";
import { useWatchLater } from "../../react-query/queries";

const WatchLater = () => {
  const { data, isLoading } = useWatchLater();

  return (
    <>
      <h3 className="h3 mx-4 my-2">Watch Later</h3>
      {isLoading ? (
        "loading..."
      ) : data?.watchlater.length === 0 ? (
        <div className="mx-4">
          No videos in Watch Later, go to{" "}
          <Link to="/" className="btn btn--link mx-0 px-0">
            Home page
          </Link>{" "}
          and videos to watch later.
        </div>
      ) : (
        <VideoList videos={data?.watchlater} />
      )}
    </>
  );
};

export { WatchLater };
