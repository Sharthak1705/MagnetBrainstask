import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ isAuthenticated, handleLogout }) => {
  const navigate = useNavigate();

  const handleUserLogout = () => {
    handleLogout();
    navigate("/sign_in"); // Redirect to login page after logout
  };

  return (
    <header className="bg-gray-800 text-white py-4 px-6 shadow-lg flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <span className="ml-3 text-gray-300 text-xl font-bold hover:text-blue-400 transition-colors">
            Tasks
          </span>
        </Link>
      </div>

      <nav className="flex items-center hover:text-blue-300 space-x-6">
        Task Management
      </nav>

      {/* Show Sign In if not logged in, otherwise show Logout */}
      <div className="flex items-center space-x-4">
        {isAuthenticated ? (
          <button
            onClick={handleUserLogout}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/sign_in"
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg"
          >
            Sign In
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
