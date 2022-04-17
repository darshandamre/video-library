import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDeletePlaylist } from "../../react-query/mutations";
import "./PlaylistCard.css";

const PlaylistCard = ({ playlist }) => {
  const { mutate: deletePlaylist } = useDeletePlaylist();

  return (
    <div className="single-playlist flex items-center px-2 py-1">
      <Link to={`/playlist/${playlist._id}`} className="width-100">
        <p className="single-playlist-name fw-600 mb-1 mr-1">{playlist.name}</p>
        <p>{playlist.videos.length} Videos</p>
      </Link>
      <button
        onClick={() => deletePlaylist(playlist._id)}
        className="delete cursor-pointer">
        <DeleteOutline />
      </button>
    </div>
  );
};

export { PlaylistCard };
