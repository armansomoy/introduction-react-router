import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title, body} = post;
    return ( 
        <div style={{
            border: "1px solid gray",
            margin: "5px",
            padding: "5px",
            borderRadius: "5px",
            paddingBottom: '15px'
          }}>
            <h2>{title}</h2>
           <Link to={`/post/${id}`}><button>Post Details</button></Link>
        </div>
    );
};

export default Post;