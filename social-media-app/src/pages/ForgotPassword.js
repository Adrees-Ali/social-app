import React from 'react'
import { Link } from 'react-router-dom'

export default function ForgotPassword() {
  return (
    <div className="forgot-password-container">
      <header className="forgot-password-header">
        <h1>Forgot Your Password?</h1>
        <p>Enter your registered email address below to receive a password reset link.</p>
      </header>

      <form className="forgot-password-form">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your registered email"
          required
          autoComplete="email"
        />

        <button type="submit" className="cta-btn">Send Reset Link</button>
      </form>

      <p className="back-to-login">
        Remembered your password? <Link to="/login">Login here.</Link>
      </p>
    </div>
  )
}
