import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid"> {/*use of container-fluid:Navbar ke andar ka content full width tk stretch kerta hai*/}

            <Link className="navbar-brand" to="/"> {/*use of navbar-brand:Text ko thoda bada, bold*/}

            <img src="/friendify-logo-icon-currentColor.svg" alt="Logo" width="30" height="28" className="d-inline-block align-text-top"/> {/*d-inline-block:Element ko inline rakhta hai, magar block ke ander rehty howy wid or hei change ker skaty hain*/}
            Friendify</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">  {/* nav-item: aik single list item ka spacing aur alignment fix karta hai.*/}
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>  {/* nav-link: Text ko slightly bold aur clickable banata hai.
                                              active: thora bold ho jatta hai,  User ko dikhata hai ki wo kis page pe hai.*/}
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
                </li>
            </ul>
              </div>
          </div>
      </nav>
    </div>
  )
}
