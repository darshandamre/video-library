import { Link } from "react-router-dom";
import { InputField } from "../../components";
import "./Auth.css";

const Login = () => {
  return (
    <main className="min-height-100 flex items-center py-6">
      <div className="container">
        <form className="auth__content mx-auto p-6">
          <h2 className="h2 ta-center mt-0">Login</h2>
          <InputField label="Email" placeholder="example@xyz.com" />
          <InputField
            label="Password"
            type="password"
            placeholder="**********"
          />
          <div className="mt-3">
            <button type="submit" className="btn btn--primary width-100 mx-0">
              Login
            </button>
          </div>
          <div className="ta-center">
            <button type="button" className="btn btn--link fw-400 mt-0 mb-2">
              Login with test credentials
            </button>
          </div>
          <p className="ta-center">
            <Link to="/signup" className="btn btn--link">
              Create New Account
              <i className="fa-solid fa-greater-than ml-1"></i>
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export { Login };
