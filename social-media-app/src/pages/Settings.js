import React, { useState } from "react";

export default function Settings() {

const [fullname, setFullName] = useState("");
const [email, setEmail] = useState ("");
const [changepassword, setChangePassword] = useState("");
const [profilepicture, setProfilePicture] = useState("");




const handleUpdate = ()=>{
  if(!fullname || !email || !changepassword || !profilepicture){
    alert("please fill out this fields");
    } else {
      alert("save changes updated successfully");
    }
  }



  return (
    <div className="container mt-4">
      <h3>Settings</h3>
      <form className="mt-3">

        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" placeholder="Enter your name"  value={fullname} onChange={(e) => setFullName(e.target.value)} required/>
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>

        <div className="mb-3">
          <label className="form-label">Change Password</label>
          <input type="password" className="form-control" placeholder="New password" value={changepassword} onChange={(e) => setChangePassword(e.target.value)}/>
        </div>

        <div className="mb-3">
          <label className="form-label">Profile Picture</label>
          <input type="file" className="form-control"  value={profilepicture} onChange={(e) => setProfilePicture(e.target.value)}/>
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleUpdate}>Save Changes</button>
      </form>
    </div>
  );
}
