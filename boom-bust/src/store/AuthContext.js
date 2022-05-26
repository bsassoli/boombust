import { createContext } from "react";

const retrieveUserToken = () => {
    const token = localStorage.getItem("userToken"); 
    return token;
};

const AuthContext = createContext({
  token: retrieveUserToken(),
  isLoggedIn: retrieveUserToken() && false,
  userId: localStorage.getItem("userId"),
  username: "",
  login: (token) => {},
  logout: () => {},
});


export default AuthContext;