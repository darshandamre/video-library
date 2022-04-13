import { Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import { Home, Login, SignUp } from "./pages";
import { WatchLater } from "./pages/WatchLater/WatchLater";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="watch-later" element={<WatchLater />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export { App };
