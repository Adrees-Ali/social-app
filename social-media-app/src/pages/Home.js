import React from 'react'


export default function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Friendify 👋</h1>
        <p>Connect, share, and discover amazing moments with friends!</p>
        <button className="cta-btn">Join Now</button>
      </header>

      <section className="features">
        <div className="feature-card">
          <h3>📸 Share Moments</h3>
          <p>Post your favorite photos, videos, and thoughts instantly.</p>
        </div>
        <div className="feature-card">
          <h3>💬 Stay Connected</h3>
          <p>Message your friends and comment on their latest updates.</p>
        </div>
        <div className="feature-card">
          <h3>🌍 Discover More</h3>
          <p>Explore trending posts and make new friends every day.</p>
        </div>
      </section>
    </div>
  )
}
