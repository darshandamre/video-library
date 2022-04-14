import { Link, useLocation, useNavigate } from "react-router-dom";
import { InputField } from "../../components";
import { useForm } from "../../hooks/useForm";
import { useSignup } from "../../react-query/mutations";
import { toErrorMap } from "../../utils/toErrorMap";
import { signupValidator } from "../../utils/validator";
import "./Auth.css";

const initialSignupData = {
  name: "",
  email: "",
  password: ""
};

const SignUp = () => {
  const {
    values,
    errors: formErrors,
    fields,
    isSubmitting,
    setSubmitting,
    setErrors
  } = useForm(initialSignupData, signupValidator);

  const { mutate: signup } = useSignup();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from ?? { pathname: "/" };

  const signupHandler = e => {
    e.preventDefault();
    setSubmitting(true);
    if (!formErrors) {
      signup(values, {
        onSuccess: () => navigate(from, { replace: true }),
        onError: err => setErrors(toErrorMap(err.response.data.errors))
      });
    }
    setSubmitting(false);
  };

  return (
    <main className="min-height-100 flex items-center py-6">
      <div className="container">
        <form onSubmit={signupHandler} className="auth__content mx-auto p-6">
          <h2 className="h2 ta-center mt-0">SignUp</h2>
          <InputField {...fields.name} label="Name" placeholder="bob" />
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
          <div className="my-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn--primary width-100 mx-0">
              Create New Account
            </button>
          </div>
          <p className="ta-center">
            <Link
              to="/login"
              state={{ from }}
              replace
              className="btn btn--link">
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
