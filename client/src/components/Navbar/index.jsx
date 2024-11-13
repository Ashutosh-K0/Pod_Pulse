import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/profile")}>Profile</button>
      {/* Add more navigation buttons as needed */}
    </nav>
  );
};

export default Navbar;
