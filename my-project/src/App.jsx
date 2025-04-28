import React from 'react'
import SignUp from './Components/SignUp'
import Login from './Components/Login'
function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome to My App</h1>
      <p className="text-lg">This is a simple React application.</p>
      <SignUp />
      <Login />
      <p className="text-lg mt-4">Please sign up to get started!</p>
    </div>
  )
}

export default App
