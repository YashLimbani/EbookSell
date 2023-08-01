import React from "react";
import SimpleCard from "./card";
import { Typography } from "@material-ui/core";

export default function User(props) {
  return (
    <>
      <div>
        <Typography variant="h5" align="left" color="secondary">
          USER: {props.name} <br />
          ROLE: {props.role}
        </Typography>
      </div>
      <SimpleCard />
    </>
  );
}
