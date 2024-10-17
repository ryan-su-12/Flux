'use client';
import axios from 'axios';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import the useRouter hook

interface SignupResponse {
  message: string;
}

export default function SignupPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter(); // Initialize useRouter

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form from refreshing the page

    try {
      const response = await axios.post<SignupResponse>(
        'http://localhost:8080/auth/signup',  // Ensure backend URL is correct
        {
          email, // Send email and password in the request body
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json', // Set content type to JSON
          },
        }
      );

      // If signup is successful
      setMessage(response.data.message);
      setError(null); // Clear any error messages
      router.push('http://localhost:3000/login');
    } catch (err: any) {
      // Handle error from the backend (like a 400 or 500 response)
      setError(err.response?.data?.detail || 'An error occurred during signup.');
      setMessage(null); // Clear the success message
      console.error('Signup error:', err);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left section */}
      <div className="w-1/2 bg-gray-900 text-white flex flex-col justify-between p-10">
        <div>
          <h1 className="text-xl font-bold">WealthComplicated</h1>
        </div>
      </div>

      {/* Right section */}
      <div className="w-1/2 bg-gray-800 text-white flex flex-col justify-center items-center">
        <div className="w-full max-w-md px-8">
          <h2 className="text-2xl font-bold text-center mb-6">Create an account</h2>
          <p className="text-center mb-8">Enter your email below to create your account</p>

          <form className="space-y-4" onSubmit={handleSignup}>
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full p-3 mt-4 rounded-md bg-gray-700 border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full p-3 mt-4 rounded-md bg-gray-700 border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full p-3 bg-white text-gray-800 font-semibold rounded-md hover:bg-gray-300 transition"
              >
                Sign Up with Email
              </button>
            </div>
          </form>

          {message && <p className="text-center mt-4 text-green-500">{message}</p>}
          {error && <p className="text-center mt-4 text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  );
}

