import { useState } from "react";
import { Chips, VideoList } from "../../components";
import { useVideos } from "../../react-query/queries";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { data, isLoading } = useVideos();
  const { videos } = data ?? {};

  const filteredVideos =
    selectedCategory === "All"
      ? videos
      : videos?.filter(video => video.category === selectedCategory);

  return (
    <>
      <Chips
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {isLoading ? "loading..." : <VideoList videos={filteredVideos} />}
    </>
  );
};

export { Home };
