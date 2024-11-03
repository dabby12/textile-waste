// src/Credits.js
import React from 'react';

const Credits = () => {
  return (
    <div className="bg-gray-800 text-purple-500 p-8">
      <h2 className="text-2xl font-bold mb-4 hover:text-yellow-400">Credits</h2>
      <ul className="list-disc list-inside space-y-2">
        <li className="hover:text-green-300">Design: <span className="font-semibold hover:text-green-500">Chris Liu</span></li>
        <li className="hover:text-indigo-400">Development: <span className="font-semibold hover:text-blue-500">Chris Liu</span></li>
        <li className="transition duration-300 hover:text-orange-500">Copywriting: <span className="font-semibold">Chris Liu/span></li>
        <li>Idea/ Leaders: <span classname="font-semibold">Ian Tay, Isaac Poh</li>
      </ul>
      <p className="mt-4 ">Thank you to everyone who contributed!</p>
    </div>
  );
};

export default Credits;
