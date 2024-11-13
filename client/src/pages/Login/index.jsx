import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogin = () => {
    // Perform login logic here (for example, check credentials)

    // If login is successful, navigate to /home
    navigate("/home");
  };

  return (
    <div
      style={{
        margin: "50px auto",
        width: "300px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#333" }}>Login Page</h2>
      {/* Login form */}
      <form>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="username"
            style={{ display: "block", fontSize: "14px", color: "#333" }}
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            style={{
              width: "100%",
              padding: "8px",
              fontSize: "14px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="password"
            style={{ display: "block", fontSize: "14px", color: "#333" }}
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            style={{
              width: "100%",
              padding: "8px",
              fontSize: "14px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <button
          id="red"
          type="button"
          onClick={(e) => {
            e.preventDefault(); // Prevent form submission if it's a form
            handleLogin(); // Trigger login and navigation
            alert("Redirecting to Home..."); // Optional: Display an alert for demonstration
          }}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#d9534f",
            color: "#fff",
            fontSize: "16px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
