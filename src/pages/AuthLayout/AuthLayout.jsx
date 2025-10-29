import { useState } from "react";
import "./authLayout.css";
import Login from "../Login/Login.jsx";
import SignUp from "../Signup";
import About from "../About/About.jsx";
import Layout from "../../Layout/Layout.jsx";

export default function AuthLayout() {
  const [isLogin, setisLogin] = useState(true); // Renamed the setter to match the state
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Function to toggle between SignUp and Login forms
  const toggleForm = () => {
    setIsTransitioning(true); // Start the transition
    setTimeout(() => {
      setisLogin((prev) => !prev); // Change the component after fade-out
      setIsTransitioning(false); // End the transition after fade-in
    }, 500); // 500ms - CSS transition duration
  };

  return (
    <Layout>
      <div className="container">
        <div className="inner_container">
          <div
            className={`formContainer ${
              isTransitioning ? "fadeOut" : "fadeIn"
            }`}
          >
            {isLogin ? (
              <Login onSwitch={toggleForm} />
            ) : (
              <SignUp onSwitch={toggleForm} />
            )}
          </div>
          <div className="about">
            <About />
          </div>
        </div>
      </div>
    </Layout>
  );
}
