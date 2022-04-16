import { createContext, useContext, useEffect, useState } from "react";
import { getToken } from "../utils/token";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const isAuth = !!getToken();
  const [value, setValue] = useState({ isAuth });

  useEffect(() => {
    setValue({ isAuth });
  }, [isAuth]);

  return (
    <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
