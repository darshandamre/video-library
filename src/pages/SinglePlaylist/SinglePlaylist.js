import { Link, useNavigate, useParams } from "react-router-dom";
import { VideoList } from "../../components";
import { useDeletePlaylist } from "../../react-query/mutations";
import { usePlaylist } from "../../react-query/queries";

const SinglePlaylist = () => {
  const { playlistId } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = usePlaylist(playlistId);
  const { videos, name } = data?.playlist ?? {};

  const { mutate: deletePlaylist } = useDeletePlaylist();

  return (
    <>
      <div className="flex items-center">
        <h3 className="h3 mx-4 my-2">{name}</h3>
        <button
          onClick={() =>
            deletePlaylist(playlistId, {
              onSuccess: () => navigate("/playlists")
            })
          }
          className="btn btn--primary ml-auto mr-4">
          Delete Playlist
        </button>
      </div>
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
