import React, { useState } from "react";
import { Chips, Header, SideBar, VideoList } from "../../components";
import "./Home.css";

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar(v => !v);

  return (
    <div className={`home ${showSidebar ? "show-sidebar" : ""}`}>
      <Header toggleSidebar={toggleSidebar} />
      <Chips />
      <SideBar toggleSidebar={toggleSidebar} />
      <VideoList />
    </div>
  );
};

export { Home };
