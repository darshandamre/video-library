import { VideoList } from "../../components";
import { useWatchLater } from "../../react-query/queries/useWatchLater";

const WatchLater = () => {
  const { data, isLoading } = useWatchLater();

  return (
    <>
      <h3 className="h3 mx-4 my-0">Watch Later</h3>

      {isLoading ? "loading..." : <VideoList videos={data?.watchlater} />}
    </>
  );
};

export { WatchLater };
