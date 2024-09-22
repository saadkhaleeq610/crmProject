import React, { useState } from 'react';

const JoinCompanyRequest = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Role:', role);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white p-6 rounded-md shadow-md">
        <div className="flex justify-between mb-4">
          <h1 className="font-bold text-xl">Pursuit</h1>
          <button className="text-gray-600 hover:underline">Signup</button>
        </div>
        <form onSubmit={handleSubmit}>
          <h2 className="text-center text-lg mb-6">Send Request to join (company name)</h2>

          <div className="mb-4">
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Send
          </button>

          <p className="mt-4 text-sm text-gray-600 text-center">
            You will receive an onboarding email once the company admin has approved your request to join their company.
          </p>
        </form>
      </div>
    </div>
  );
};

export default JoinCompanyRequest;
