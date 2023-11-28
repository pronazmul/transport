import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token");

    // Redirect the user to the login page (you can change the path as needed)
    navigate("/login");
  }, [navigate]);

  return (
    <div>
      <p>Logging out...</p>
      {/* You can optionally display a loading message or spinner here */}
    </div>
  );
}

export default Logout;
