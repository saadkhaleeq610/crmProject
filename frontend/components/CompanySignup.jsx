import React, { useState } from 'react';

const CompanySignup = () => {
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedRole, setSelectedRole] = useState('');

  const handleCompanyChange = (e) => {
    setSelectedCompany(e.target.value);
  };

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic
    console.log('Selected Company:', selectedCompany);
    console.log('Selected Role:', selectedRole);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white p-6 rounded-md shadow-md">
        <div className="flex justify-between mb-4">
          <h1 className="font-bold text-xl">Pursuit</h1>
          <button className="text-gray-600 hover:underline">Signup</button>
        </div>
        <form onSubmit={handleSubmit}>
          <h2 className="text-center text-lg mb-6">Select the company you want to join</h2>

          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Companies</label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              value={selectedCompany}
              onChange={handleCompanyChange}
            >
              <option value="">Select a company</option>
              <option value="Company1">Company 1</option>
              <option value="Company2">Company 2</option>
              <option value="Company3">Company 3</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-gray-700">Select Role</label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              value={selectedRole}
              onChange={handleRoleChange}
            >
              <option value="">Select a role</option>
              <option value="Role1">Role 1</option>
              <option value="Role2">Role 2</option>
              <option value="Role3">Role 3</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompanySignup;
