import {
  PlaylistAddOutlined,
  ShareOutlined,
  WatchLaterOutlined
} from "@mui/icons-material";
import { Portal } from "../../components";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import "./VideoDialog.css";

const VideoDialog = ({ handleClose }) => {
  const dialogRef = useOnClickOutside(handleClose);
  return (
    <Portal>
      <div className="dialog-container">
        <div className="video-dialog fw-500 py-1" ref={dialogRef}>
          <div className="flex items-center cursor-pointer py-1">
            <WatchLaterOutlined className="mx-2" /> Save to Watch Later
          </div>
          <div className="flex items-center cursor-pointer py-1">
            <PlaylistAddOutlined className="mx-2" /> Save to Playlist
          </div>
          <div className="flex items-center cursor-pointer py-1">
            <ShareOutlined className="mx-2" /> Share
          </div>
        </div>
      </div>
    </Portal>
  );
};

export { VideoDialog };
