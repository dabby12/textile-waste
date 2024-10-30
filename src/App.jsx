// src/App.jsx
import React from 'react';
import HeroSection from './components/HeroSection';
import WhatIsTextileWaste from './components/WhatIsTextileWaste';
import EnvironmentalImpacts from './components/EnvironmentalImpacts';
import WhyReduce from './components/WhyReduce';
import HowToReduce from './components/HowToReduce';
import EducationalResources from './components/EducationalResources';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <WhatIsTextileWaste />
      <EnvironmentalImpacts />
      <WhyReduce />
      <HowToReduce />
      <EducationalResources />
    </div>
  );
}

export default App;
