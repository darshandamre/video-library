import { Menu } from "@mui/icons-material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { privateReq } from "../../axios";
import { queryClient } from "../../react-query/client";
import { useUser } from "../../react-query/queries/useUser";
import { removeToken } from "../../utils/token";
import "./Header.css";

const Header = ({ toggleSidebar }) => {
  const { data } = useUser();
  const location = useLocation();
  const navigate = useNavigate();

  const logoutHandler = () => {
    removeToken();
    privateReq.defaults.headers.authorization = null;
    queryClient.setQueriesData("user", () => undefined);
    navigate("/");
  };

  return (
    <header className="header py-2 px-3">
      <div className="flex items-center">
        <Menu
          className="menu cursor-pointer mr-2"
          fontSize="large"
          onClick={toggleSidebar}
        />
        <Link to="/">
          <h1 className="logo">52 streams</h1>
        </Link>
      </div>

      <div className="header__actions flex">
        {data?.user?._id ? (
          <span onClick={logoutHandler} className="btn btn--link m-0">
            Logout
          </span>
        ) : (
          <Link
            to="/login"
            state={{ from: location }}
            className="btn btn--primary m-0">
            Login
          </Link>
        )}
      </div>
    </header>
  );
};

export { Header };
