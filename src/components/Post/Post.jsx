import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id } = post;
  const navigate = useNavigate();

  const handleShowDetails = () => {
    navigate(`/post/${id}`);
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
      <h2> Post No: {id}</h2>
      <Link to={`/post/${id}`}>
        <button>Post Details</button>
      </Link>

      <button onClick={handleShowDetails}>Click To See Details</button>
    </div>
  );
};

export default Post;
