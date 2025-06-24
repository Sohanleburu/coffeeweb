import React, { useState } from "react";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { auth, provider } from "./firebase";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => setUser(result.user))
      .catch((error) => alert(error.message));
  };

  const loginWithEmail = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCred) => setUser(userCred.user))
      .catch((error) => alert(error.message));
  };

  const registerWithEmail = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCred) => setUser(userCred.user))
      .catch((error) => alert(error.message));
  };

  const logout = () => {
    auth.signOut().then(() => setUser(null));
  };

  return (
    <div className="app">
      {user ? (
        <div className="user-card">
          <img src={user.photoURL || "https://via.placeholder.com/90"} alt="Profile" className="profile-pic" />
          <h2>Welcome, {user.displayName || user.email}!</h2>
          <button className="login-btn" onClick={logout}>Logout</button>
        </div>
      ) : (
        <div className="login-card">
          <h1>CoffeeWeb ☕</h1>
          <p>{isRegistering ? "Create an account" : "Sign in to continue"}</p>

          <input
            type="email"
            placeholder="Email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="login-btn"
            onClick={isRegistering ? registerWithEmail : loginWithEmail}
          >
            {isRegistering ? "Register" : "Login"}
          </button>

          <p
            style={{ marginTop: "15px", cursor: "pointer", color: "#555" }}
            onClick={() => setIsRegistering(!isRegistering)}
          >
            {isRegistering ? "Already have an account? Login" : "New here? Create an account"}
          </p>

          <hr style={{ margin: "20px 0" }} />
          <button className="login-btn" onClick={loginWithGoogle}>
            Sign in with Google
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
