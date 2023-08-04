import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { Typography } from "@mui/material";

export default function Home() {
  const [num, setNum] = useState(0);
  const clickHandler = () => {
    setNum((prev) => {
      return prev + 1;
    });
  };
  return (
    <>
      <Typography
        variant="h2"
        color="purple"
        align="center"
        padding="100"
        sx={{ padding: "20px" }}
      >
        {" "}
        Home 🏠
      </Typography>
      <Typography variant="h2" color="purple" align="center">
        <Button variant="contained" onClick={clickHandler}>
          {" "}
          cilck to say HII 👋
        </Button>
      </Typography>
      <Typography variant="h2" color="purple" align="center">
        {num}
      </Typography>
    </>
  );
}
