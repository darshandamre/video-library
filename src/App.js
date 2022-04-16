import { Route, Routes } from "react-router-dom";
import { Layout, RequireAuth } from "./components";
import {
  History,
  Home,
  LikedVideos,
  Login,
  SignUp,
  Video,
  WatchLater
} from "./pages";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="video/:videoId" element={<Video />} />
          <Route element={<RequireAuth />}>
            <Route path="watch-later" element={<WatchLater />} />
            <Route path="liked-videos" element={<LikedVideos />} />
            <Route path="history" element={<History />} />
          </Route>
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export { App };
