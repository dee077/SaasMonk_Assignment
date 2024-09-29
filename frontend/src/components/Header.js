import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  // const navigate = useNavigate();  // useNavigate is used for navigation

  // Logout function
  const handleLogout = () => {
    // Remove the token from sessionStorage
    // sessionStorage.removeItem('token');
    // Redirect the user to the login page
    // navigate('/');
  };

  return (
    <header className="bg-gray-200 shadow-lg">
      <div className="container flex justify-between items-center">
        <h1 className="text-xl p-5 mx-5 font-semibold">MOVIECRITIC</h1>
        <div className="flex mx-7 gap-4">
          <button
            onClick={handleLogout}
            className="bg-gray-50 hover:bg-gray-100 border-2 border-purple-200 text-purple-400 py-2 px-4 font-bold rounded-sm"
          >
            Add New Movie
          </button>
          <button
            onClick={handleLogout}
            className="bg-purple-600 hover:bg-purple-500 text-white py-2 px-4 font-bold rounded-sm"
          >
            Add New Review
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
