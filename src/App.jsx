// src/App.jsx
import React from 'react';
import HeroSection from './components/HeroSection';
import WhatIsTextileWaste from './components/WhatIsTextileWaste';
import EnvironmentalImpacts from './components/EnvironmentalImpacts';
import WhyReduce from './components/WhyReduce';
import HowToReduce from './components/HowToReduce';
import EducationalResources from './components/EducationalResources';
import Credits from './components/Credits';


function App() {
  return (
    <div className="App bg-gradient-to-tr from-blue-300 via-indigo-400 to-violet-300 ">
      <HeroSection />
      <WhatIsTextileWaste />
      <EnvironmentalImpacts />
      <WhyReduce />
      <HowToReduce />
      <EducationalResources />
      <Credits />
    </div>
  );
}

export default App;
