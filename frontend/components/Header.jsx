import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Header = () => {
  // const navigate = useNavigate();

  const handleSignupClick = () => {
    // Navigate to the signup page when the "Signup" button is clicked
    // navigate('/signup');
  };

  return (
    <header className="w-full bg-gray-100 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left Section: Title */}
        <h1 className="text-xl font-bold">Pursuit</h1>

        {/* Right Section: Signup Button */}
        <button
          onClick={handleSignupClick}
          className="text-gray-600 hover:underline"
        >
          Signup
        </button>
      </div>
    </header>
  );
};

export default Header;
