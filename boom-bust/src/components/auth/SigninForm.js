/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import { Link as RouterLink } from "react-router-dom";


const login_api = async (username, password, success, fail) => {
  const response = await fetch(`users/token/obtain/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  const text = await response.json();

  if (response.status === 200) {    
    console.log("success", text);
    success(text);
  } else {
    console.log("failed", text);
    Object.entries(text).forEach(([key, value]) => {
      fail(`${key}: ${value}`);
    });
  }
};

const validationSchema = yup.object({
  username: yup.string().trim().required("Username is required."),
  password: yup
    .string()
    .required("Please specify your password")
    .min(8, "The password should have at minimum length of 8"),
});

const Form = () => {
  const [message, setMessage] = React.useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [isModalActive, setIsModalActive] = useState(false);

  const handleCloseModal = () => setIsModalActive(false);

  const initialValues = {
    username: "",
    password: "",
  };

  const onSubmit = (values) => {
    setIsLoading(true);
    if (isLogin) {
    } else {
      const success = async text => {
        setMessage(text);
        setIsLogin((prevState) => !prevState);
        setIsSuccess(true);
        await localStorage.setItem("userToken", text.access);
        window.location = "/";
      };
      login_api(values.username, values.password, success, async (text) => {
        setMessage(text);
        setIsLoading(false);
        setIsSuccess(false);
        setIsModalActive(true);
      });
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <Box>
      {isLoading && <LinearProgress />}
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontWeight: "medium",
          }}
          gutterBottom
          color={"text.secondary"}
        >
          Login
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
          }}
        >
          Welcome back
        </Typography>
        <Typography color="text.secondary">
          Login to manage your account.
        </Typography>
      </Box>

      {!isSuccess && (
        <Dialog
          open={isModalActive}
          onClose={handleCloseModal}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"We have a problem!"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {message.slice(7)}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant='contained' onClick={handleCloseModal}>Ok</Button>
          </DialogActions>
        </Dialog>
      )}
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant={"subtitle2"} sx={{ marginBottom: 2 }}>
              Enter your username
            </Typography>
            <TextField
              label="Username *"
              variant="outlined"
              name={"username"}
              fullWidth
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
          </Grid>
          <Grid item xs={12}>
            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "stretched", sm: "center" }}
              justifyContent={"space-between"}
              width={1}
              marginBottom={2}
            >
              <Box marginBottom={{ xs: 1, sm: 0 }}>
                <Typography variant={"subtitle2"}>
                  Enter your password
                </Typography>
              </Box>
              <Typography variant={"subtitle2"}>
                <Link
                  component={"a"}
                  color={"primary"}
                  href={"/password-reset-cover"}
                  underline={"none"}
                >
                  Forgot your password?
                </Link>
              </Typography>
            </Box>
            <TextField
              label="Password *"
              variant="outlined"
              name={"password"}
              type={"password"}
              fullWidth
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>
          <Grid item container xs={12}>
            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "stretched", sm: "center" }}
              justifyContent={"space-between"}
              width={1}
              maxWidth={600}
              margin={"0 auto"}
            >
              <Box marginBottom={{ xs: 1, sm: 0 }}>
                <Typography variant={"subtitle2"}>
                  Don't have an account yet?{" "}
                  <Link
                    component={RouterLink}
                    color={"primary"}
                    to={"/signup"}
                    underline={"none"}
                  >
                    Sign up here.
                  </Link>
                </Typography>
              </Box>
              <Button size={"large"} variant={"contained"} type={"submit"}>
                Login
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Form;
