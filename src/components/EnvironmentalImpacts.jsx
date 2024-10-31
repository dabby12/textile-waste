// src/components/EnvironmentalImpacts.jsx
import React from 'react';

const EnvironmentalImpacts = () => {
  return (
    <section className="bg-secondary py-16 px-4 text-white animate-slide-in">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Environmental Impacts of Textile Waste</h2>
        <p className="mb-8 opacity-90 hover:opacity-100 transition duration-300 text-2xl font-bold hover:text-black transition  ">
          Textile waste contributes to issues like landfill overflow, water pollution from dyeing processes, and a high carbon footprint due to the resource-intensive processes involved in textile production.
        </p>
      </div>
    </section>
  );
};

export default EnvironmentalImpacts;
