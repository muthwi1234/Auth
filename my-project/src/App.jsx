import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Home from './Components/Home'; // ✅ import Home

function App() {
  return (
    <Router>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
