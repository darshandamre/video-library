import React, { useState } from "react";
import { Chips, Header, SideBar, VideoList } from "../../components";
import "./Home.css";

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className={`home ${showSidebar ? "show-sidebar" : ""}`}>
      <Header setShowSidebar={setShowSidebar} />
      <Chips />
      <SideBar showSidebar={showSidebar} />
      <VideoList />
    </div>
  );
};

export { Home };
