import React from 'react'
import { Link } from 'react-router-dom'


export default function NavbarPrivate() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid"> 
            <Link className="navbar-brand" to="/"> 
                <img src="/friendify-logo-icon-currentColor.svg" alt="Logo" width="30" height="28" className="d-inline-block align-text-top"/> {/*d-inline-block:Element ko inline rakhta hai, magar block ke ander rehty howy wid or hei change ker skaty hain*/}
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">  
                <Link className="nav-link active" aria-current="page" to="/dashboard">Dashboard</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/friends">Friends</Link>  
                                              
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/messages">Messages</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/createPost">Create_Post</Link>
                </li>
                

      
            <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Profile
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/viewprofile">view Profile</Link></li>
                    <li><Link className="dropdown-item" to="/settings">Settings</Link></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><Link className="dropdown-item" to="/login">logout</Link></li>
                  </ul>
                </li>

            </ul>   
            <form className="d-flex ms-auto" role="search">
              <input 
                className="form-control me-2" 
                type="search" 
                placeholder="Search" 
                aria-label="Search" 
              />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> 
              </div>
          </div>
      </nav>
    </div>
  )
}

