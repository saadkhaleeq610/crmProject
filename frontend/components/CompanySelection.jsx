import React, { useState } from 'react';

const CompanySelectionPage = () => {
  const [selection, setSelection] = useState('');

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="flex justify-between items-center p-4 bg-gray-100">
        <div className="text-lg font-semibold">Pursuit</div>
        <div className="text-sm">Signup</div>
      </header>
      
      <main className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-md">
          <h1 className="text-xl font-bold text-center mb-6">Do you have your own company?</h1>
          <form className="space-y-4">
            <div 
              className={`p-3 bg-gray-100 rounded cursor-pointer ${selection === 'own' ? 'border-2 border-blue-500' : ''}`}
              onClick={() => setSelection('own')}
            >
              Yes, I've my own company and want to use pursuit for managing it
            </div>
            <div 
              className={`p-3 bg-gray-100 rounded cursor-pointer ${selection === 'other' ? 'border-2 border-blue-500' : ''}`}
              onClick={() => setSelection('other')}
            >
              No, I want to join an already registered company
            </div>
            <button
              type="submit"
              className="w-full bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300"
            >
              Next
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CompanySelectionPage;