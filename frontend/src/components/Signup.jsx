import { useState } from "react";
import "./styles/signup.css"; // We'll create this file for styling
import logo from "./Assets/fitfreak.png";

function Signup({ onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = () => {
    if (!name || !email || !password || !confirmPassword) {
      setError("⚠️ Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("⚠️ Passwords do not match.");
      return;
    }

    setError("");
    alert(`Welcome, ${name}! 🎉 You have signed up successfully.`);
    onClose(); // Go back to home
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <img src={logo} alt="Fit Freak Logo" className="signup-logo" />
        <h2>Create an Account</h2>
        {error && <p className="error">{error}</p>}
        
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button className="signup-btn" onClick={handleSignup}>Sign Up</button>
        <button className="back-btn" onClick={onClose}>Back to Home</button>
      </div>
    </div>
  );
}

export default Signup;
