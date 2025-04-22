import React, { useState } from "react";
import axios from "axios";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleForgot = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/forgot-password", {
        email,
      });
      alert("Reset link sent (simulated)");
    } catch (err) {
      alert("Failed to send reset link");
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleForgot}>Send Reset Link</button>
    </div>
  );
}

export default ForgotPassword;
