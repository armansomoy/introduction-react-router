import React from "react";
import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { title, body } = post;
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
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default PostDetails;
