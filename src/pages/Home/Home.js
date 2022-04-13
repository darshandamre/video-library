import React, { useState } from "react";
import { Chips, Header, SideBar, VideoList } from "../../components";
import { useVideos } from "../../react-query/queries/useVidoes";
import "./Home.css";

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar(v => !v);

  const { data, isLoading } = useVideos();

  return (
    <div className={`home ${showSidebar ? "show-sidebar" : ""}`}>
      <Header toggleSidebar={toggleSidebar} />
      <Chips />
      <SideBar toggleSidebar={toggleSidebar} />
      {isLoading ? "loading..." : <VideoList videos={data?.videos} />}
    </div>
  );
};

export { Home };
