import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { title, body } = post;
  const navigate = useNavigate();
  const {postId} = useParams();
  console.log(postId);

  const handleGoBack = () => {
    navigate(-1);
  };
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
      <button onClick={handleGoBack}>Go back</button>
    </div>
  );
};

export default PostDetails;
