import React from 'react';

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="flex justify-between items-center p-4 bg-gray-100">
        <div className="text-lg font-semibold">Pursuit</div>
        <div className="text-sm">Signup</div>
      </header>
      
      <main className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6">Register</h1>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border border-gray-300 rounded bg-gray-100"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded bg-gray-100"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded bg-gray-100"
            />
            <button
              type="submit"
              className="w-full bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300"
            >
              Register
            </button>
          </form>
          <p className="text-center mt-4 text-sm">
            Already have an account? <a href="#" className="text-blue-500 hover:underline">Login</a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default RegisterPage;