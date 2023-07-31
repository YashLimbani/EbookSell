import React from "react";
import SimpleCard from "./card";

export default function User(props) {
  return (
    <>
      <div>
        <h1>{props.name}</h1>
        <h2>{props.role}</h2>
      </div>
      <SimpleCard />
    </>
  );
}
