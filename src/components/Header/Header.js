import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.css";

const Header = ({ setShowSidebar }) => {
  return (
    <header className="header">
      <div className="flex items-center">
        <MenuIcon
          className="cursor-pointer"
          fontSize="large"
          onClick={() => setShowSidebar(v => !v)}
        />
        <Link to="/">
          <h1 className="logo ml-2">52 streams</h1>
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
