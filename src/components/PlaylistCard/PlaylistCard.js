import { DeleteOutline } from "@mui/icons-material";
import { useDeletePlaylist } from "../../react-query/mutations";
import "./PlaylistCard.css";

const PlaylistCard = ({ playlist }) => {
  const { mutate: deletePlaylist } = useDeletePlaylist();

  return (
    <div className="single-playlist flex items-center px-2 py-1">
      <div>
        <p className="single-playlist-name fw-600 mb-1 mr-1">{playlist.name}</p>
        <p>{playlist.videos.length} Videos</p>
      </div>
      <button
        onClick={() => deletePlaylist(playlist._id)}
        className="delete cursor-pointer ml-auto">
        <DeleteOutline />
      </button>
    </div>
  );
};

export { PlaylistCard };
