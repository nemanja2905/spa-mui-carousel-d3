import React, { useContext } from "react";
import { Container, Box, Typography, CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/styles";
import HomeBase from "../components/HomeBase";
import theme from "../components/themes/theme";
import { StyledEngineProvider } from "@mui/material";
import store from "../components/store/index";
import { AuthContext } from "../components/context/AuthProvider";
import Login from "../components/Login";
import AuthProvider from "../components/context/AuthProvider";
const HomeApplication = () => {
  const { isAuthenticated } = useContext(AuthContext);
  console.log("setAuthenticated ,isAuthenticated=", isAuthenticated);
  if (isAuthenticated) return <HomeBase />;
  else return <Login />;
};

const Home = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        {/* <Provider store={store}> */}
        <AuthProvider>
          {/* <CssBaseline> */}
          <Container sx={styles.container}>
            <HomeApplication />
          </Container>
          {/* </CssBaseline> */}
        </AuthProvider>
        {/* </Provider> */}
      </StyledEngineProvider>
    </ThemeProvider>
  );
};

const styles = {
  container: {
    // mx: 10,
  },
};

export default Home;
