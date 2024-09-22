import React from 'react';

const WelcomePage = ({ companyName = '{company name}' }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="flex justify-between items-center p-4 bg-gray-100">
        <div className="text-lg font-semibold">Pursuit</div>
        <nav className="flex space-x-4">
          <div className="text-sm">Manage {companyName}</div>
          <div className="text-sm">Your Profile</div>
        </nav>
      </header>
      
      <main className="flex-grow flex items-center justify-center">
        <h1 className="text-2xl font-bold">
          Welcome to {companyName}
        </h1>
      </main>
    </div>
  );
};

export default WelcomePage;