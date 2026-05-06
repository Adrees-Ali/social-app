import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Dashboard() {

  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/posts")
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  const addPost = async () => {

    const response = await fetch("http://localhost:4000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: 1,
        content: content
      })
    });

    const data = await response.json();

    setPosts([data, ...posts]);
    setContent("");
  };

    const editPost = (id) => {
    console.log("Edit post:", id);
  };

  const deletePost = async (id) => {
    try {
      await fetch(`http://localhost:4000/posts/${id}`, {
        method: "DELETE",
      });

      setPosts(posts.filter(post => post.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">

        {/* Left Sidebar */}
        <div className="col-2 bg-light vh-100 p-3 border-end">
          <h5>Friendify</h5>

          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>

        {/* Center Container */}
        <div className="col-7 p-3">

          {/* Post Box */}
          <div className="card mb-3 shadow-sm">
            <div className="card-body">

              <textarea
                className="form-control mb-2"
                placeholder="What's on your mind?"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />

              <button
                className="btn btn-primary btn-sm" onClick={addPost}>
                Post
              </button>

            </div>
          </div>

          {/* Posts */}
          {posts.map((post) => (
            <div key={post.id} className="card mb-3 shadow-sm">
              <div className="card-body">

                <h6>User {post.user_id}</h6>
                <p>{post.content}</p>

                  <button
                    className="btn btn-outline-primary btn-sm me-2"
                    onClick={() => editPost(post.id)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => deletePost(post.id)}
                  >
                    Delete
                </button>

                <button className="btn btn-outline-primary btn-sm me-2">
                  Like
                </button>

                <button className="btn btn-outline-secondary btn-sm">
                  Comment
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}