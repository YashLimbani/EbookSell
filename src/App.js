import "./App.css";
import { Route, Routes, NavLink } from "react-router-dom";
import Welcome from "./components/Welcome";
import User from "./components/User";
import { CssBaseline } from "@material-ui/core";
import Home from "./components/Home";
import { Button } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
// import { ThemeProvider } from '@material-ui/styles';
import { purple } from "@material-ui/core/colors";

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
      main: "#11cb5f",
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
            background: "linear-gradient(45deg,pink,rgb(193, 132, 250))",
            height: 70,
          }}
        >
          <NavLink
            to="/"
            style={{ fontSize: "1.2rem", textDecoration: "none" }}
          >
            HOME 🏠
          </NavLink>
          <br />
          <NavLink
            to="/welcome"
            style={{ fontSize: "1.3rem", textDecoration: "none" }}
          >
            {" "}
            WELCOME 👋
          </NavLink>
          <br />
          <NavLink
            to="/user"
            style={{ fontSize: "1.3rem", textDecoration: "none" }}
          >
            {" "}
            USER 🤵{" "}
          </NavLink>
        </div>

        <Routes path="/">
          <Route index element={<Home />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route
            path="/user"
            element={<User name="Y.S Limbani" role="student" />}
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
