import { createContext, useContext, useMemo } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BASE_URL = "http://localhost:3000";

const configuration = (method, path, data) => ({
  method: method,
  url: `${BASE_URL}${path}`,
  data: data,
});

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [cookies, setCookies, removeCookie] = useCookies();

  const login = ({ username, passwd }) => {
    return axios(configuration("post", "/auth/login", { username, passwd }))
      .then((res) => {
        if (res.data?.token) {
          removeCookie("token");
          setCookies("token", res.data?.token.toString());
          navigate("/user-about");

          return res.data;
        }
      })
      .catch((err) => err.response.data);
  };

  const logout = () => {
    ["token", "name"].forEach((obj) => removeCookie(obj)); // remove data save in cookies
    navigate("/login");
  };

  const value = useMemo(
    () => ({
      cookies,
      login,
      logout,
    }),
    [cookies]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useAuth = () => {
  return useContext(UserContext);
};
