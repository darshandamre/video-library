import { Chips, VideoList } from "../../components";
import { useVideos } from "../../react-query/queries/useVidoes";
import "./Home.css";

const Home = () => {
  const { data, isLoading } = useVideos();

  return (
    <>
      <Chips />
      {isLoading ? "loading..." : <VideoList videos={data?.videos} />}
    </>
  );
};

export { Home };
