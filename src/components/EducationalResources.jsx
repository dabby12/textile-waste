// src/components/EducationalResources.jsx
import React from 'react';

const EducationalResources = () => {
  return (
    <section className="py-16 px-4 bg-background animate-fade-in-up">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-primary">Educational Resources</h2>
        <p className="text-gray-700 mb-8">
          Explore these resources to learn more about textile waste and sustainable fashion:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {[
            { title: 'The True Cost', description: 'Documentary on the impact of fast fashion' },
            { title: 'Fashionopolis by Dana Thomas', description: 'Book on sustainable fashion' },
            { title: 'More articles and online resources' },
          ].map((resource, index) => (
            <li
              key={index}
              className="transition duration-300 hover:text-accent"
            >
              <strong>{resource.title}</strong> - {resource.description}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EducationalResources;
