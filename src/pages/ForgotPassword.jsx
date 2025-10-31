import React, { useState } from "react";
import API from "../api";
import "./ForgotPassword.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setSending(true);

    try {
      // Use API instance for environment-aware baseURL
      const res = await API.post("/auth/forgot-password", { email });

      const data = res.data;

      setMessage(
        data.message || "If that email exists, a reset link has been sent."
      );
    } catch (err) {
      setError(
        err.response?.data?.message ||
          err.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="forgot-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <label>Email address</label>
        <input
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
        />
        <button type="submit" disabled={sending}>
          {sending ? "Sending..." : "Send reset link"}
        </button>
      </form>

      {message && (
        <p className="message" style={{ color: "#28a745" }}>{message}</p>
      )}
      {error && <p className="message" style={{ color: "#e63946" }}>{error}</p>}
    </div>
  );
}
