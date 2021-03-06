import { Add, Close } from "@mui/icons-material";
import { useState } from "react";
import { useOnClickOutside } from "../../hooks";
import {
  useAddToPlaylist,
  useCreatePlaylist,
  useRemoveFromPlaylist
} from "../../react-query/mutations";
import { usePlaylists } from "../../react-query/queries";
import "./PlaylistModal.css";

const SavePlaylistModal = ({ closeModal, video }) => {
  const [isNewPlaylist, setIsNewPlaylist] = useState(false);
  const [name, setName] = useState("");
  const modalRef = useOnClickOutside(closeModal);

  const { data, isLoading } = usePlaylists();
  const { mutate: createPlaylist } = useCreatePlaylist();
  const { mutate: addToPlaylist } = useAddToPlaylist();
  const { mutate: removeFromPlaylist } = useRemoveFromPlaylist();

  return (
    <div className="playlist-modal-wrapper">
      <div ref={modalRef} className="playlist-modal fw-500 pt-2 pb-1">
        <div className="flex mx-3 mb-1">
          <h3 className="h3 m-0">Save to...</h3>
          <button
            title="close"
            onClick={closeModal}
            className="playlist-close flex cursor-pointer ml-auto">
            <Close role="button" />
          </button>
        </div>

        <div className="border-top-grey mx-2 pt-1"></div>
        <div className="pb-1">
          {isLoading ? (
            "loading..."
          ) : data?.playlists?.length === 0 ? (
            <div className="mx-3 py-1">No saved playlists, create one now.</div>
          ) : (
            <div className="playlist-option-wrapper">
              {data?.playlists?.map(({ _id, name, videos }) => {
                const isVideoInPlaylist = videos?.some(
                  ({ _id }) => video._id === _id
                );

                return (
                  <div
                    key={_id}
                    className="playlist-option flex items-center cursor-pointer py-1">
                    <input
                      className="ml-3 mr-2"
                      checked={isVideoInPlaylist}
                      onChange={() =>
                        isVideoInPlaylist
                          ? removeFromPlaylist({
                              playlistId: _id,
                              videoId: video._id
                            })
                          : addToPlaylist({ playlistId: _id, video })
                      }
                      type="checkbox"
                      name={name}
                      id={_id}
                    />
                    <label className="width-100 cursor-pointer" htmlFor={_id}>
                      {name}
                    </label>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="border-top-grey mx-2 pt-1"></div>

        {isNewPlaylist ? (
          <form
            className="mx-2 mt-1"
            onSubmit={e => {
              e.preventDefault();
              if (!!name) {
                createPlaylist({ name });
                setName("");
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
            <button type="submit" className="width-100 btn btn--primary m-0">
              Create Playlist
            </button>
          </form>
        ) : (
          <button
            onClick={() => setIsNewPlaylist(true)}
            className="playlist-option flex items-center cursor-pointer width-100 bg-inherit py-1">
            <Add className="playlist-add-icon" /> Create a new playlist
          </button>
        )}
      </div>
    </div>
  );
};

export { SavePlaylistModal };
