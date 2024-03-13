import React from "react";
import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name} = user;
  return (
    <div
      style={{
        border: "1px solid gray",
        margin: "5px",
        padding: "5px",
        borderRadius: "5px",
        paddingBottom: "15px",
      }}
    >
      <h2>Details About User </h2>
      <p>{name}</p>
    </div>
  );
};

export default UserDetails;
