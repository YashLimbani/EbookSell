import "./App.css";
import { Route, Routes, NavLink } from "react-router-dom";
import Welcome from "./components/Welcome";
import User from "./components/User";
import { Button } from "@material-ui/core";

function App() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          // background: "linear-gradient(120deg,black,white)",
          background: "pink",
          height: 50,
        }}
      >
        <Button variant="outlined" color="primary">
          <NavLink to="/"> HOME PAGE</NavLink> <br />
        </Button>

        <Button variant="outlined" color="primary">
          <NavLink to="/welcome"> WELCOME PAGE</NavLink> <br />
        </Button>

        <Button variant="outlined" color="primary">
          <NavLink to="/user"> USER </NavLink>
        </Button>
      </div>

      <Routes path="/">
        <Route index element={<h1>You are at HOME PAGE</h1>} />
        <Route path="/welcome" element={<Welcome />} />
        <Route
          path="/user"
          element={<User name="Yash Limbani" role="student" />}
        />
      </Routes>
    </div>
  );
}

export default App;
