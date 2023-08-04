import "./App.css";
import { Route, Routes, NavLink } from "react-router-dom";
import Welcome from "./components/Welcome";
// import User from "./components/User";
import { CssBaseline } from "@material-ui/core";
import Home from "./components/Home";
import { Button } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
// import { ThemeProvider } from '@material-ui/styles';
import { purple } from "@material-ui/core/colors";
import Login from "./components/Login";
import Register from "./components/Register";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      // main: purple[500],
      light: "#ff4010",
      main: "#f50057",
      dark: "#c51162",
      contrastText: "#fff",
    },
    secondary: {
      // light: "#ff4010",
      // This is green.A700 as hex.
      // main: "#11cb5f",
      main: "#800080 ",
    },
    typography: {
      h1: {
        fontWeight: 300,
        fontSize: "6rem",
        lineHeight: 1.167,
        letterSpacing: "-0.01562em",
        color: "#ff4081 !important",
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            // background: "linear-gradient(45deg,pink,rgb(193, 132, 250))",
            background: "orange",
            height: 70,
          }}
        >
          <NavLink
            to="/"
            style={{ fontSize: "1.2rem", textDecoration: "none" }}
          >
            HOME
          </NavLink>
          <br />
          <NavLink
            to="/welcome"
            style={{ fontSize: "1.3rem", textDecoration: "none" }}
          >
            {" "}
            WELCOME
          </NavLink>
          <br />
          <NavLink
            to="/Register"
            style={{ fontSize: "1.3rem", textDecoration: "none" }}
          >
            {" "}
            USER{" "}
          </NavLink>
        </div>

        <Routes path="/">
          <Route index element={<Home />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
