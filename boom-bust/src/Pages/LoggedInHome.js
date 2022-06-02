import React from "react";
import { useContext, useEffect, useState } from "react";
import Container from "../components/UI/Container";
import NavBar from "../components/UI/NavBar";
import SimpleTable from "../components/sections/SimpleTable";
import { Typography } from "@mui/material";

import AuthContext from "../store/AuthContext";
import axios from "axios";

const HomePage = () => {
  const authCtx = useContext(AuthContext);
  function parseJWT(token) {
    if (!token) {
      return;
    }
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  }
  const [currentUserData, setCurrentUserData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const tokenData = parseJWT(authCtx.token);
  const userId = tokenData.user_id;

  const getUser = () => {
    axios
    .get("http://127.0.0.1:8000/users/users/?id=" + userId + "", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      const userData = response.data[0];
      setCurrentUserData(userData);
    })};
  
  useEffect(getUser, [userId] );

  return (
    <React.Fragment>
      <NavBar />
      <Container>
        <Typography variant={"h3"} align={"center"} sx={{ mt: 5}}>
          {`Welcome back, ${currentUserData.first_name}.`}
        </Typography>
      </Container>
      <Container>
        <SimpleTable id="signals" />
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
