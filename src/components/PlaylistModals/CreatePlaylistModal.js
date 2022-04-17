import { Close } from "@mui/icons-material";
import { useState } from "react";
import { useOnClickOutside } from "../../hooks";
import { useCreatePlaylist } from "../../react-query/mutations";
import "./CreatePlaylistModal.css";

const CreatePlaylistModal = ({ closeModal }) => {
  const [name, setName] = useState("");
  const { mutate: createPlaylist } = useCreatePlaylist();
  const modalRef = useOnClickOutside(closeModal);

  return (
    <div className="create-playlist-modal-wrapper">
      <div ref={modalRef} className="create-playlist-modal p-2">
        <div className="flex mb-2">
          <h3 className="h3 m-0">Create New Playlist</h3>
          <button
            title="close"
            onClick={closeModal}
            className="create-playlist-close flex cursor-pointer ml-auto">
            <Close role="button" />
          </button>
        </div>
        <form
          onSubmit={e => {
            e.preventDefault();
            if (!!name) {
              createPlaylist({ name });
              closeModal();
            }
          }}>
          <label htmlFor="playlist-name">Playlist Name</label>
          <div className="my-1">
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              autoFocus
              className="input"
              type="text"
              id="playlist-name"
            />
          </div>
          <button type="submit" className="width-100 btn btn--primary mx-0">
            Create Playlist
          </button>
        </form>
      </div>
    </div>
  );
};

export { CreatePlaylistModal };
