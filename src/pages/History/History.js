import { Link } from "react-router-dom";
import { VideoList } from "../../components";
import { useRemoveAllHistory } from "../../react-query/mutations";
import { useHistory } from "../../react-query/queries";

const History = () => {
  const { data, isLoading } = useHistory();
  const { mutate: removeAllHistory } = useRemoveAllHistory();

  return (
    <>
      <div className="flex items-center">
        <h3 className="h3 mx-4 my-2">History</h3>
        {data?.history?.length > 0 ? (
          <button
            onClick={removeAllHistory}
            className="btn btn--primary ml-auto mr-4">
            Clear All
          </button>
        ) : null}
      </div>
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
