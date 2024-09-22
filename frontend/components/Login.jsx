import React from 'react';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="flex justify-between items-center p-4">
        <div className="text-lg font-semibold">Pursuit</div>
        <div className="text-sm">Signup</div>
      </header>
      
      <main className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="email"
              className="w-full p-2 border border-gray-300 rounded bg-gray-100"
            />
            <input
              type="password"
              placeholder="password"
              className="w-full p-2 border border-gray-300 rounded bg-gray-100"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Login
            </button>
          </form>
          <p className="text-center mt-4 text-sm">
            Don't have an account? <a href="#" className="text-blue-500 hover:underline">Register</a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;