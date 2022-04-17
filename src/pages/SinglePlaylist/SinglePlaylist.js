import { Link, useParams } from "react-router-dom";
import { VideoList } from "../../components";
import { usePlaylist } from "../../react-query/queries";

const SinglePlaylist = () => {
  const { playlistId } = useParams();
  const { data, isLoading } = usePlaylist(playlistId);
  const { videos, name } = data?.playlist ?? {};

  return (
    <>
      <h3 className="h3 mx-4 my-2">{name}</h3>
      {isLoading ? (
        "loading..."
      ) : videos?.length === 0 ? (
        <div className="mx-4">
          No videos in {name} playlist, go to{" "}
          <Link to="/" className="btn btn--link mx-0 px-0">
            Home page
          </Link>{" "}
          and videos to playlist.
        </div>
      ) : (
        <VideoList videos={videos} />
      )}
    </>
  );
};

export { SinglePlaylist };
