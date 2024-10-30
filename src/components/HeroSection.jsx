// src/components/HeroSection.jsx
import React from 'react';

const HeroSection = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-primary text-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary to-secondary opacity-80"></div>
      <div className="relative z-10 text-center p-8 rounded-lg bg-opacity-60 animate-fade-in-down">
        <h1 className="text-4xl md:text-6xl font-bold transition duration-500 ease-in-out transform hover:scale-105">
          Rethink Fashion Waste
        </h1>
        <p className="text-lg md:text-2xl mt-4 opacity-90 hover:opacity-100 transition duration-300">
          Learn how textile waste impacts our environment—and what we can do to reduce it.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
