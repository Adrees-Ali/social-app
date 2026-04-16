import React from "react";
import { Link } from "react-router-dom";
import khanImg from "../assets/khan.jpg";


export default function ViewProfile() {

  const user = {
    name: "Ali Khan",
    email: "ali@gmail.com",
    bio: " stack learner, coffee lover ",
    image: khanImg
  };

  return (

    <div className="container mt-4">
      <div className="card text-center p-3">
        <img
          src={user.image}
          alt={user.name}
          className="rounded-circle mx-auto mb-3"
          style={{ width: "120px", height: "120px" }}
        />

        <h4>{user.name}</h4>
        <p className="text-muted">{user.email}</p>
        <p>{user.bio}</p>

        <div> 
          <button className="btn btn-primary me-2">
            <Link to="/editprofile" className="text-white text-decoration-none">
              Edit Profile
            </Link>
            <Link></Link>
          </button>
          </div>

      </div>
    </div>
  );
}
