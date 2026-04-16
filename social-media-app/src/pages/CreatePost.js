import React, { useState } from "react";

export default function CreatePost() {
  const [post, setPost] = useState("");


  const handlePost = () => {
    if (post === "") return;
    setPost(""); 
  };

  return (
    <div className="container mt-4">
      <h3>Create Post</h3>

      <textarea
        className="form-control mb-2"
        rows="3"
        placeholder="What's on your mind?"
        value={post}
        onChange={(e) => setPost(e.target.value)}
      />
      <button className="btn btn-primary mb-3" onClick={handlePost}>
        Post
      </button>

      
    </div>
  );
}
