import { createContext, useContext } from "react";
import { useUser } from "../react-query/queries";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { data, isLoading } = useUser();
  const isAuth = isLoading || !!data?.user?._id;

  return (
    <AuthContext.Provider value={{ isAuth }}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
