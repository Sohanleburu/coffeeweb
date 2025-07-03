import React from "react";
import "./HomePage.css"; // Make sure to add some coffee-themed styles!

function HomePage({ user, logout }) {
  return (
    <div className="coffee-home">
      <h1 className="coffee-heading">☕ Welcome to CoffeeWeb</h1>
      <p className="coffee-subtext">
        Brewed specially for <strong>{user.displayName || user.email}</strong>
      </p>

      <div className="coffee-card">
        <img
          src={user.photoURL || "https://via.placeholder.com/90"}
          alt="Profile"
          className="coffee-profile"
        />
        <h2 className="coffee-message">Grab a cup and stay awhile.</h2>
        <button className="coffee-logout-btn" onClick={logout}>
          🚪 Logout
        </button>
      </div>

      <footer className="coffee-footer">Made with ☕ & React</footer>
    </div>
  );
}

export default HomePage;
