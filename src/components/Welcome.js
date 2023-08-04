import React from "react";
// import { Typography } from "@material-ui/core";
import { Typography } from "@mui/material";

export default function Welcome() {
  return (
    <div>
      {/* <Typography variant="h3" align="left" color="primary">
        Welcome
      </Typography> */}
      <Typography
        variant="h4"
        align="center"
        color="purple"
        sx={{ padding: "20px" }}
      >
        WELCOME TO OUR SITE 👋
      </Typography>
    </div>
  );
}
