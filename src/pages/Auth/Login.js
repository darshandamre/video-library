import { Link, useNavigate } from "react-router-dom";
import { InputField } from "../../components";
import { useForm } from "../../hooks/useForm";
import { useLogin } from "../../react-query/mutations/useLogin";
import { toErrorMap } from "../../utils/toErrorMap";
import { loginValidator } from "../../utils/validator";
import "./Auth.css";

const initialLoginData = {
  email: "",
  password: ""
};

const testCredentials = {
  email: "bob@bob.com",
  password: "bob"
};

const Login = () => {
  const {
    values,
    errors: formErrors,
    fields,
    isSubmitting,
    setSubmitting,
    setErrors
  } = useForm(initialLoginData, loginValidator);
  const { mutate: login } = useLogin();
  const navigate = useNavigate();

  const loginWithUserCredentials = e => {
    e.preventDefault();
    setSubmitting(true);
    if (!formErrors) {
      login(values, {
        onSuccess: () => navigate("/"),
        onError: err => setErrors(toErrorMap(err.response.data.errors))
      });
    }
    setSubmitting(false);
  };

  const loginWithTestCredentials = e => {
    e.preventDefault();
    login(testCredentials, {
      onSuccess: () => navigate("/"),
      onError: err => setErrors(toErrorMap(err.response.data.errors))
    });
  };

  return (
    <main className="min-height-100 flex items-center py-6">
      <div className="container">
        <form
          onSubmit={loginWithUserCredentials}
          className="auth__content mx-auto p-6">
          <h2 className="h2 ta-center mt-0">Login</h2>
          <InputField
            {...fields.email}
            label="Email"
            placeholder="example@xyz.com"
          />
          <InputField
            {...fields.password}
            label="Password"
            type="password"
            placeholder="**********"
          />
          <div className="mt-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn--primary width-100 mx-0">
              Login
            </button>
          </div>
          <div className="ta-center">
            <button
              type="button"
              disabled={isSubmitting}
              onClick={loginWithTestCredentials}
              className="btn btn--link fw-400 mt-0 mb-2">
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
