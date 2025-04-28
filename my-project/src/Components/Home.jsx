import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-6">Welcome to My App</h2>
      <p className="text-lg mb-6 text-gray-700">Please sign up or login to continue.</p>

      <div className="space-x-4">
        <Link
          to="/signup"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full text-lg transition"
        >
          Sign Up
        </Link>
        <Link
          to="/login"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full text-lg transition"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Home;
