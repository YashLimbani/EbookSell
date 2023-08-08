import "./App.css";
import "./index.js";
import { Route, Routes, NavLink } from "react-router-dom";
import Welcome from "./components/Welcome";
// import User from "./components/User";
import { CssBaseline } from "@material-ui/core";
import Home from "./components/Home";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
// import { ThemeProvider } from '@material-ui/styles';
import { purple } from "@material-ui/core/colors";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import { AuthProvider } from "./contexts/auth";
import { ToastContainer, toa } from "react-toastify";

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
      <AuthProvider>
        <Header />
        <ToastContainer />
        <CssBaseline />

        <Routes path="/">
          <Route index element={<Home />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
