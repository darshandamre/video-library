import { Link } from "react-router-dom";
import { VideoList } from "../../components";
import { useHistory } from "../../react-query/queries";

const History = () => {
  const { data, isLoading } = useHistory();

  return (
    <>
      <h3 className="h3 mx-4 my-2">History</h3>
      {isLoading ? (
        "loading..."
      ) : data?.history?.length === 0 ? (
        <div className="mx-4">
          No videos in History, go to{" "}
          <Link to="/" className="btn btn--link mx-0 px-0">
            Home page.
          </Link>
        </div>
      ) : (
        <VideoList videos={data?.history} />
      )}
    </>
  );
};

export { History };
