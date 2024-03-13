import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email, phone } = user;
  return (
    <div
      style={{
        border: "1px solid gray",
        margin: "5px",
        padding: "5px",
        borderRadius: "5px",
        paddingBottom: '15px'
      }}
    >
      <h4>Name: {name}</h4>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <Link style={{padding: '8px 16px', border: '1px solid gray', marginBottom: '10px', borderRadius: '5px'}} to={`/user/${id}`}>Show Details</Link>
    </div>
  );
};

export default User;
