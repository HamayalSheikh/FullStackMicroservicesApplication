// import React, { useState } from "react";
// import axios from "axios";

// function ForgotPassword() {
//   const [email, setEmail] = useState("");

//   const handleForgot = async () => {
//     try {
//       await axios.post("http://localhost:5000/api/auth/forgot-password", {
//         email,
//       });
//       alert("Reset link sent (simulated)");
//     } catch (err) {
//       alert("Failed to send reset link");
//     }
//   };

//   return (
//     <div>
//       <h2>Forgot Password</h2>
//       <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//       <button onClick={handleForgot}>Send Reset Link</button>
//     </div>
//   );
// }

// export default ForgotPassword;
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
    <div style={styles.container}>
      <h2>Forgot Password</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleForgot} style={styles.button}>
        Send Reset Link
      </button>
      <p style={styles.link}>
        <Link to="/login">Back to Login</Link>
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  link: {
    marginTop: "15px",
  },
};

export default ForgotPassword;
