import React from 'react';

const RequestSent = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white p-6 rounded-md shadow-md">
        <div className="flex justify-between mb-4">
          <h1 className="font-bold text-xl">Pursuit</h1>
        </div>
        <div className="text-center">
          <h2 className="text-lg mb-6">Request sent</h2>
          <p className="text-gray-600">
            You will receive an onboarding email once the company admin has approved your request to join their company.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RequestSent;
