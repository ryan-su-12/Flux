'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'; // Import useRouter for redirection

export default function LoginPage() {
  // States to store the input field values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const router = useRouter(); // Initialize useRouter

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form from refreshing the page

    try {
      const response = await axios.post(
        'http://localhost:8080/auth/login', // Adjust URL to your backend login endpoint
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json', // Set content type to JSON
          },
        }
      );

      // If login is successful
      setMessage('Login successful!');
      setError(null);

      // Redirect to homepage or dashboard after successful login
      router.push('http://localhost:3000/dashboard'); // Change to your preferred URL
    } catch (err: any) {
      // Handle error from the backend (like a 400 or 500 response)
      setError(err.response?.data?.detail || 'Invalid email or password.');
      setMessage(null); // Clear the success message
      console.error('Login error:', err);
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
          <h2 className="text-2xl font-bold text-center mb-6">Login to your account</h2>
          <p className="text-center mb-8">Enter your credentials below to log in</p>

          <form className="space-y-4" onSubmit={handleLogin}>
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
                Login
              </button>
            </div>
          </form>

          {message && <p className="text-center mt-4 text-green-500">{message}</p>}
          {error && <p className="text-center mt-4 text-red-500">{error}</p>}

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-600"></div>
            <p className="mx-4">OR CONTINUE WITH</p>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>

          <button className="w-full p-3 mb-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-600 transition flex items-center justify-center">
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23.74 12.277c0-.751-.068-1.469-.195-2.161H12v4.09h6.633c-.286 1.474-1.148 2.719-2.434 3.55v2.953h3.93c2.299-2.118 3.61-5.238 3.61-8.432z" />
              <path d="M12 24c3.24 0 5.955-1.073 7.94-2.908l-3.93-2.952c-1.087.728-2.458 1.164-4.01 1.164-3.084 0-5.692-2.084-6.626-4.884H1.316v3.061C3.294 21.398 7.314 24 12 24z" />
              <path d="M5.374 14.42c-.253-.728-.398-1.503-.398-2.32s.145-1.592.398-2.32V6.719H1.316C.48 8.352 0 10.112 0 11.999c0 1.887.48 3.647 1.316 5.28l4.058-2.86z" />
              <path d="M12 4.755c1.764 0 3.343.608 4.59 1.8l3.43-3.43C17.954 1.215 15.24 0 12 0 7.314 0 3.294 2.602 1.316 6.72l4.058 2.86c.934-2.8 3.542-4.884 6.626-4.884z" />
            </svg>
            Google
          </button>

          <button className="w-full p-3 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-600 transition flex items-center justify-center">
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C5.371 0 0 5.371 0 12C0 17.303 3.438 21.8 8.205 23.469C8.805 23.553 9.025 23.222 9.025 22.926C9.025 22.655 9.015 21.857 9.015 21.023C5.672 21.646 4.968 19.303 4.968 19.303C4.435 17.879 3.75 17.555 3.75 17.555C2.809 16.975 3.829 16.989 3.829 16.989C4.875 17.055 5.425 18.055 5.425 18.055C6.375 19.605 7.845 19.111 8.405 18.865C8.485 18.189 8.735 17.75 9.015 17.5C6.562 17.254 4.024 16.259 4.024 11.959C4.024 10.628 4.549 9.555 5.344 8.752C5.204 8.443 4.812 7.095 5.504 5.373C5.504 5.373 6.484 5.065 9.015 6.726C9.895 6.433 10.835 6.287 11.775 6.281C12.715 6.287 13.655 6.433 14.535 6.726C17.065 5.065 18.045 5.373 18.045 5.373C18.737 7.095 18.345 8.443 18.205 8.752C19 9.555 19.525 10.628 19.525 11.959C19.525 16.271 16.982 17.245 14.525 17.5C14.905 17.828 15.225 18.446 15.225 19.373C15.225 20.5 15.215 21.526 15.215 22.926C15.215 23.222 15.435 23.563 16.045 23.469C20.812 21.8 24 17.303 24 12C24 5.371 18.629 0 12 0Z" />
            </svg>
            GitHub
          </button>

          <p className="text-sm text-center mt-8">
            By clicking continue, you agree to our{' '}
            <a href="#" className="underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
