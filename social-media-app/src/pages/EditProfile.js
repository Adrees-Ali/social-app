import React from "react";
import { useState } from "react";




export default function EditProfile() {


const [firstname, setFirstName] = useState("");
const [lastname, setLastName] = useState("");
const [bio, setBio] = useState("");

const handleUpdate = async (e) => {

  e.preventDefault();

  if (!firstname || !lastname || !bio) {
    alert("Please fill all fields");
    return;
  }

  try {

    const response = await fetch(
      "http://localhost:4000/auth/profile/1",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          first_name: firstname,
          last_name: lastname,
          bio: bio
        })
      }
    );

    const data = await response.json();

    alert(data.message);
   
  } catch (error) {
    console.log(error);
  }
};



  return (
    <div className="container mt-4">
      <h3>Edit Profile</h3>
      <form className="mt-3">

        <div className="mb-3">
          <label className="form-label">Fisrt Name</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Enter your full name" 
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
            required
            
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Enter username" 
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Bio</label>
          <textarea 
            className="form-control" 
            rows="3" 
            placeholder="Write something about yourself..."
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Profile Picture</label>
          <input type="file" className="form-control" />
        </div>

        <button
          type="button"
          className="btn btn-success mb-3"
          onClick={handleUpdate}
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}
