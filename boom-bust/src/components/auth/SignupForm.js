import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

const validationSchema = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(2, "Please enter a valid name")
    .max(50, "Please enter a valid name")
    .required("Please specify your first name"),
  lastName: yup
    .string()
    .trim()
    .min(2, "Please enter a valid name")
    .max(50, "Please enter a valid name")
    .required("Please specify your last name"),
  email: yup
    .string()
    .trim()
    .email("Please enter a valid email address")
    .required("Email is required."),
  password: yup
    .string()
    .required("Please specify your password")
    .min(8, "The password should have at minimum length of 8"),
});

const Form = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {    
    if (localStorage.getItem("userToken") !== null) {
      console.log("Redirecting");
/* Redirecting the user to the logged page. */
      // window.location.replace("/logged");
    } else {
      setLoading(false);
    }
  }, []);

  const onSubmit = async (values) => {
    const user = {
      first_name: values.firstName,
      last_name: values.lastName,
      username: values.username,
      email: values.email,
      password: values.password,
    };

   const response = await fetch(`users/user/create/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({...user}),
  }).catch(err => err);

  const text = await response.text();
  console.log(response.status);
  if (response.status === 201) {    
    console.log("success", JSON.parse(text));
    
  } else {
    console.log("failed", JSON.parse(text));
    
  }

  /*   fetch("http://127.0.0.1:8000/users/user/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .catch((error) => {
        console.log("Oops!");
        console.log(error);
        setErrors(true);
        //console.log(error.response);
      })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        let fail = function (error) {console.log("Errors"); 
        console.log(error)};
        fail(res.json());
        console.log("Is res ok? " + res.ok);      
        console.log("Resp");
        console.log(res);
      })
      .then((data) => {
        if (data.key) {
          localStorage.clear();
          localStorage.setItem("userToken", data.key);
          window.location.replace("/logged");
        } else {
          setEmail("");
          setPassword("");
          setUsername("");
          localStorage.clear();
          setErrors(true);
          console.log(errors);
        }
      }); */
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    username: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontWeight: "medium",
          }}
          gutterBottom
          color={"text.secondary"}
        >
          Signup
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
          }}
        >
          Create an account
        </Typography>
        <Typography color="text.secondary">
          Fill out the form to get started.
        </Typography>
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography variant={"subtitle2"} sx={{ marginBottom: 2 }}>
              Enter your first name
            </Typography>
            <TextField
              label="First name *"
              variant="outlined"
              name={"firstName"}
              fullWidth
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant={"subtitle2"} sx={{ marginBottom: 2 }}>
              Enter your last name
            </Typography>
            <TextField
              label="Last name *"
              variant="outlined"
              name={"lastName"}
              fullWidth
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant={"subtitle2"} sx={{ marginBottom: 2 }}>
              Enter your email
            </Typography>
            <TextField
              label="Email *"
              variant="outlined"
              name={"email"}
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant={"subtitle2"} sx={{ marginBottom: 2 }}>
              Choose a username
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
            <Typography variant={"subtitle2"} sx={{ marginBottom: 2 }}>
              Enter your password
            </Typography>
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
                  Already have an account?{" "}
                  <Link
                    component={RouterLink}
                    color={"primary"}
                    to={"/signin"}
                    underline={"none"}
                  >
                    Login.
                  </Link>
                </Typography>
              </Box>
              <Button size={"large"} variant={"contained"} type={"submit"}>
                Sign up
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            container
            xs={12}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography
              variant={"subtitle2"}
              color={"text.secondary"}
              align={"center"}
            >
              By clicking "Sign up" button you agree with our{" "}
              <Link
                component={"a"}
                color={"primary"}
                href={"/company-terms"}
                underline={"none"}
              >
                company terms and conditions.
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Form;
