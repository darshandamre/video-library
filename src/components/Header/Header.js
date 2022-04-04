import { Link } from "react-router-dom";
import { Menu } from "@mui/icons-material";
import "./Header.css";

const Header = ({ toggleSidebar }) => {
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
        <Link to="/signup" className="btn btn--primary m-0">
          SignUp
        </Link>
      </div>
    </header>
  );
};

export { Header };
