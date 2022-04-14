import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUser } from "../react-query/queries";

const RequireAuth = () => {
  const { data } = useUser();
  const location = useLocation();

  if (!data?.user?._id) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export { RequireAuth };
