// src/components/HowToReduce.jsx
import React from 'react';

const HowToReduce = () => {
  return (
    <section className="bg-secondary py-16 px-4 text-white animate-slide-in">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">How to Reduce Textile Waste</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-100">
          {['Buy Less, Choose Well', 'Thrift and Buy Second-Hand', 'Repair and Upcycle', 'Donate and Recycle', 'Support Sustainable Brands'].map(
            (item, index) => (
              <li
                key={index}
                className="transition duration-300 ease-in-out transform hover:translate-x-2 hover:text-accent"
              >
                {item}
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
};

export default HowToReduce;
