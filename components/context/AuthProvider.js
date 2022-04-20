import React, { useState, useContext } from "react";
import Cookies from "js-cookie";

export const _AUTH_COOKIE = "__AUTH_COOKIE";

export const AuthContext = React.createContext({
  isAuthenticated: false,
  setAuthenticated: () => {},
  setUser: () => {},
  user: {},
});

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(
    Cookies.get(_AUTH_COOKIE) === "ok"
  );
  const [user, setUser] = useState({});

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setAuthenticated, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useSiteBasicAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(
      "useSiteBasicAuth hook must be used within a SiteBasicAuthProvider component"
    );
  }
  return context;
};

export default AuthProvider;
