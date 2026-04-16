import './App.css';
import Navbar from './Components/Navbar';
import NavbarPrivate from './Components/NavbarPrivate';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Dashboard from './pages/Dashboard';
import Friends from './pages/Friends';
import Messages from './pages/Messages';
import CreatePost from './pages/CreatePost';
import Settings from './pages/Settings';
import Profile from './pages/ViewProfile';
import ViewProfile from './pages/ViewProfile';
import { useState } from 'react';
import EditProfile from './pages/EditProfile';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)


  return (
    <>
      <Router>
        
      {isLoggedIn ? (
        <NavbarPrivate setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Navbar/>
      )}
      <Routes>
        <Route path="/home" element={<Home />} />  
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />  
        <Route path="/register" element={<Register />} /> 
        <Route path="/forgotPassword" element={<ForgotPassword/>} /> 

            {/* after login routes*/}
        <Route path="/dashboard" element={<Dashboard />} /> 
         <Route path="/friends" element={<Friends />} /> 
         <Route path="/messages" element={<Messages/>} /> 
        <Route path="/viewprofile" element={<ViewProfile />} />
        <Route path="/editprofile" element={<EditProfile />} />
         <Route path="/createPost" element={<CreatePost />} /> 
         <Route path="/settings" element={<Settings />} /> 
      </Routes>
    </Router>
    </>
  );
}

export default App;
