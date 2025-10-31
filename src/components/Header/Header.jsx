import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/images/evangadi-logo-header.png";
import "./Header.css";

export default function Header() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header_container">
        <div className="brand">
          <Link to="/">
            <img src={logo} alt="Evangadi Logo" />
          </Link>
        </div>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((o) => !o)}
        >
          <span className="hamburger-icon">☰</span>
        </button>
      </div>

      <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
        <Link to="/" className="navigation_links" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link to="/how-it-works" className="navigation_links" onClick={() => setIsOpen(false)}>
          How it Works
        </Link>

        {user ? (
          <>
            <span className="welcome">
              Welcome:{" "}
              {user?.user?.firstName || user?.user?.username || "Guest"}
            </span>
            <button className="logout_btn" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="navigation_links login_btn" onClick={() => setIsOpen(false)}>
              Login
            </Link>
            <Link to="/signup" className="navigation_links login_btn" onClick={() => setIsOpen(false)}>
              Sign up
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
