import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Dashboard() {

  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);
  const [commentText, setCommentText] = useState({});
  const [comments, setComments] = useState({});

  useEffect(() => {
  fetch("http://localhost:4000/posts")
    .then(res => res.json())
    .then(data => {

      setPosts(data);

      data.forEach(post => {
        fetchComments(post.id);
      });

    });
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

const editPost = async (id) => {

  const newContent = prompt("Edit your post");

  await fetch(`http://localhost:4000/posts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ content: newContent })
  });

  alert("Post updated");
  setPosts(posts.map(post =>
  post.id === id
    ? { ...post, content: newContent }
    : post
));
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

  const likePost = async (id) => {

  const response = await fetch(`http://localhost:4000/posts/like/${id}`, {
    method: "PUT"
  });

  const updatedPost = await response.json();

  setPosts(posts.map(post =>
    post.id === id ? updatedPost : post
  ));
};

const addComment = async (postId) => {

  await fetch("http://localhost:4000/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      post_id: postId,
      user_id: 1,
      content: commentText[postId]
    })
  });

  alert("Comment added");

  
  fetchComments(postId);

  setCommentText({
    ...commentText,
    [postId]: ""
  });
};

const fetchComments = async (postId) => {

  const response = await fetch(
    `http://localhost:4000/comments/${postId}`
  );

  const data = await response.json();

  setComments(prev => ({
    ...prev,
    [postId]: data
  }));
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

                {/* Show Comments */}
                {comments[post.id]?.map((comment) => (
                  <div key={comment.id} className="mt-2">

                    <small>
                      {comment.content}
                    </small>

                  </div>
                ))}

                  <button
                    className="btn btn-outline-primary btn-sm me-2"
                    onClick={() => editPost(post.id)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-outline-danger btn-sm me-2"
                    onClick={() => deletePost(post.id)}
                  >
                    Delete
                  </button>

                <button
                  className="btn btn-outline-primary btn-sm me-2"
                  onClick={() => likePost(post.id)}
                >
                  Like ({post.likes || 0})
                </button>

                <input
                  type="text"
                  className="form-control mt-2"
                  placeholder="Write a comment..."
                  value={commentText[post.id] || ""}
                  onChange={(e) =>
                  setCommentText({
                    ...commentText,
                    [post.id]: e.target.value
                  })
                }
                />

                <button
                  className="btn btn-sm btn-secondary mt-2"
                  onClick={() => addComment(post.id)}
                >
                  Add Comment
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}