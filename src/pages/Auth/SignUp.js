import { Link } from "react-router-dom";
import { InputField } from "../../components";
import "./Auth.css";

const SignUp = () => {
  return (
    <main className="min-height-100 flex items-center py-6">
      <div className="container">
        <form className="auth__content mx-auto p-6">
          <h2 className="h2 ta-center mt-0">SignUp</h2>
          <InputField label="Name" placeholder="bob" />
          <InputField label="Email" placeholder="example@xyz.com" />
          <InputField
            label="Password"
            type="password"
            placeholder="**********"
          />
          <div className="my-3">
            <button type="submit" className="btn btn--primary width-100 mx-0">
              Create New Account
            </button>
          </div>
          <p className="ta-center">
            <Link to="/login" className="btn btn--link">
              Already have an account
              <i className="fa-solid fa-greater-than ml-1"></i>
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export { SignUp };
