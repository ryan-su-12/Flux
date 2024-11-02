'use client';
import React, { useState } from 'react';
import axios from 'axios';

export default function PromptPage() {
  const [prompt, setPrompt] = useState("");
  const [mermaidCode, setMermaidCode] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/generate-mermaid", { prompt });
      setMermaidCode(response.data.mermaidCode); // Set the returned Mermaid.js code
    } catch (error) {
      console.error("Error generating Mermaid code:", error);
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
          <h2 className="text-2xl font-bold text-center mb-6">Enter a Prompt</h2>
          <p className="text-center mb-8">Write a prompt for the AI to generate your mindmap</p>

          {/* Prompt Input Section */}
          <textarea
            className="w-full p-3 mb-4 bg-gray-700 rounded text-white"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Type your prompt here..."
          />

          <button
            className="w-full py-2 bg-blue-500 rounded text-white font-bold hover:bg-blue-600"
            onClick={handleSubmit}
          >
            Generate Mermaid Code
          </button>

          {/* Display Mermaid Code */}
          {mermaidCode && (
            <div className="mt-8 p-4 bg-gray-700 rounded">
              <h3 className="text-lg font-bold mb-2">Generated Diagram:</h3>
              <div className="mermaid">
                {mermaidCode}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

