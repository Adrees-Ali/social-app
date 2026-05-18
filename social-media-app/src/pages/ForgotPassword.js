import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {

  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "http://localhost:4000/auth/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: email
          })
        }
      );

      const data = await response.json();

      setEmail("");
      alert(data.message);
       


    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="forgot-password-container">

      <header className="forgot-password-header">
        <h1>Forgot Your Password?</h1>

        <p>
          Enter your registered email address below
          to receive a password reset link.
        </p>
      </header>

      <form
        className="forgot-password-form"
        onSubmit={handleSubmit}
      >

        <label htmlFor="email">
          Email Address
        </label>

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your registered email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit" className="cta-btn">
          Send Reset Link
        </button>

      </form>

      <p className="back-to-login">
        Remembered your password?
        <Link to="/login"> Login here.</Link>
      </p>

    </div>
  );
}