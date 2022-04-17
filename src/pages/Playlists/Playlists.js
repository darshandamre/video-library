import { useState } from "react";
import { Link } from "react-router-dom";
import { CreatePlaylistModal, PlaylistCard } from "../../components";
import { usePlaylists } from "../../react-query/queries";
import "./Playlists.css";

const Playlists = () => {
  const { data, isLoading } = usePlaylists();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="flex items-center">
        <h3 className="h3 mx-4 my-2">Playlists</h3>
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn btn--primary ml-auto mr-4">
          Create Playlist
        </button>
      </div>
      {isLoading ? (
        "loading..."
      ) : data?.playlists?.length === 0 ? (
        <div className="mx-4">
          No playlists, you can go to{" "}
          <Link to="/" className="btn btn--link mx-0 px-0">
            Home page
          </Link>{" "}
          and videos to playlist.
        </div>
      ) : (
        <div className="playlists-container mx-4 my-1">
          {data?.playlists?.map(playlist => (
            <PlaylistCard key={playlist._id} playlist={playlist} />
          ))}
        </div>
      )}
      {isModalOpen ? (
        <CreatePlaylistModal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
        />
      ) : null}
    </>
  );
};

export { Playlists };
