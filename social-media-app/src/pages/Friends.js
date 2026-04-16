import React, { useState } from "react";
import { Link } from "react-router-dom";
import AliImg from "../assets/Ali.jpg";
import saraImg from "../assets/sara.jpg";
import usmanImg from "../assets/usman.jpg";
import hinaImg from "../assets/hina.jpeg";

export default function Friends() {
  
  const [friends, setFriends] = useState([
    { id: 1, name: "Ali", image: AliImg },
    { id: 2, name: "Sara", image: saraImg },
    { id: 3, name: "Usman", image: usmanImg },
    { id: 4, name: "Hina", image: hinaImg },
  ]);

const removeFriend = (id) => {
    setFriends(friends.filter((friend) => friend.id !== id));
  };




  return (
    <div className="container mt-4"> 
      <h4 className="mb-3">Your Friends</h4>

      <ul className="list-group">
        {friends.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div className="d-flex align-items-center">
              <img
                src={user.image}
                alt={user.name}
                className="rounded-circle me-2"
                    style={{ width: "30px", height: "30px" }}
              />
              <span>{user.name}</span> {/*inline element k liye span use kiya hai*/}
            </div>
            <div>
               <Link to ="/messages" className="btn btn-sm btn-primary me-2" >Message</Link>
              <button className="btn btn-sm btn-danger" onClick={() => removeFriend(user.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
