// import logo from './logo.svg';
import './App.css';
//flexbox within react
// import * as React from 'react';

import React, { useState } from 'react';

const App = () => {
  const [currentView, setCurrentView] = useState('AboutMe');

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  return (
    <div>
      <Navigation handleViewChange={handleViewChange} currentView={currentView} />
      {currentView === 'AboutMe' && <AboutMe />}
      {currentView === 'Portfolio' && <Portfolio />}
      {currentView === 'Contact' && <Contact />}
      {currentView === 'Resume' && <Resume />}
    </div>
  );
};

const Navigation = ({ handleViewChange, currentView }) => {
  return (
    <div className='App-header'>
      <div>Erin Mulcahey</div>
      <button className={ currentView ==='AboutMe' ? 'HeaderButton nav-button-active' : 'HeaderButton'} onClick={() => handleViewChange('AboutMe')}>About Me</button>
      <button className={ currentView ==='Portfolio' ? 'HeaderButton nav-button-active' : 'HeaderButton'} onClick={() => handleViewChange('Portfolio')}>Portfolio</button>
      <button className={ currentView ==='Contact' ? 'HeaderButton nav-button-active' : 'HeaderButton'} onClick={() => handleViewChange('Contact')}>Contact</button>
      <button className={ currentView ==='Resume' ? 'HeaderButton nav-button-active' : 'HeaderButton'} onClick={() => handleViewChange('Resume')}>Resume</button>
    </div>
  );
};

const AboutMe = () => <div>About Me Content</div>;
const Portfolio = () => <div>Portfolio Content</div>;
const Contact = () => <div>Contact Content</div>;
const Resume = () => <div>Resume Content</div>;

export default App;