import React, { useState } from 'react';

const CompanyDetailsPage = () => {
  const [companyName, setCompanyName] = useState('');
  const [category, setCategory] = useState('');

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="flex justify-between items-center p-4 bg-gray-100">
        <div className="text-lg font-semibold">Pursuit</div>
        <div className="text-sm">Signup</div>
      </header>
      
      <main className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-md">
          <h1 className="text-xl font-bold text-center mb-6">Enter company details</h1>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Company name"
              className="w-full p-2 border border-gray-300 rounded bg-gray-100"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <div className="relative">
              <select
                className="w-full p-2 border border-gray-300 rounded bg-gray-100 appearance-none"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="" disabled selected>Category</option>
                <option value="tech">Technology</option>
                <option value="finance">Finance</option>
                <option value="healthcare">Healthcare</option>
                {/* Add more categories as needed */}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300"
            >
              Create
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CompanyDetailsPage;