import {
  Card,
  CardContent,
  Container,
  Box,
  Grid,
  FormControlLabel,
  Button,
  Typography,
} from "@mui/material";

import React, { useState, useCallback, useEffect, useContext } from "react";
import CustomInput from "./Common/CustomInput";
import { AuthContext } from "./context/AuthProvider";
import { _AUTH_COOKIE } from "./context/AuthProvider";
import Cookies from "js-cookie";
import { useSiteBasicAuth } from "./context/AuthProvider";

export default function Login(props) {
  const { setUser } = useContext(AuthContext);
  const { setAuthenticated } = useSiteBasicAuth();
  const [users, setUsers] = useState([]);
  const [formInput, setFormInput] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("FormInput = ", formInput, "users=", users);
    let email = formInput.email;
    let exists = false;
    let _user = null;

    users.forEach((user, idx) => {
      if (user.username === email || user.email === email) {
        exists = true;
        _user = user;
      }
    });

    if (exists) {
      Cookies.set(_AUTH_COOKIE, "ok");
      setAuthenticated(true);
      setUser(_user);
    }
  };
  console.log("Cookies", Cookies.get(_AUTH_COOKIE));
  //notice! this is just test, not real!

  useEffect(() => {
    loadUserData();
  }, []);
  const loadUserData = async () => {
    const _users = await (
      await fetch("https://jsonplaceholder.typicode.com/users/")
    ).json();

    setUsers(_users);
  };

  const handleChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Grid
      container
      flex
      spacing={1}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Card component="form" onSubmit={handleSubmit} item xs={3} md={3}>
        <CardContent>
          <Typography variant="h4">Login Page</Typography>
          <CustomInput
            labelText="Email"
            id="email"
            name="email"
            formControlProps={{
              fullWidth: true,
            }}
            labelProps={{
              sx: {
                fontSize: 24,
              },
            }}
            handleChange={handleChange}
            type="text"
          />
          <CustomInput
            labelText="Password"
            id="password"
            name="password"
            formControlProps={{
              fullWidth: true,
            }}
            labelProps={{
              sx: {
                fontSize: 24,
              },
            }}
            handleChange={handleChange}
            type="password"
          />
          <Button
            variant="contained"
            type="submit"
            color="primary"
            sx={{ my: 2, mx: 0 }}
          >
            Log in
          </Button>
        </CardContent>
      </Card>

      <Container row>
        {users.map((user, idx) => (
          <Box item key={idx}>
            <Typography sx={{ color: "grey" }}>{user.email}</Typography>
          </Box>
        ))}
      </Container>
    </Grid>
  );
}
