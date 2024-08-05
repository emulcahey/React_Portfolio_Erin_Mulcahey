// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import githubLogo from './images/GitHub-logo.png';
import linkedInLogo from './images/LinkedIn-logo.png';
import StackOverflowLogo from './images/Stack_Overflow_logo.png';

//import views
import AboutMeView from './views/AboutMeView.jsx';
import PortfolioView from './views/PortfolioView.jsx';
import ContactView from './views/ContactView.jsx';
import ResumeView from './views/ResumeView.jsx';
import { Link } from 'react-router-dom';

//set current views
const App = () => {
  const [currentView, setCurrentView] = useState('AboutMe');

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  return (
    <div>
      <Navigation handleViewChange={handleViewChange} currentView={currentView} />
      {currentView === 'AboutMe' && <AboutMeView/>}
      {currentView === 'Portfolio' && <PortfolioView/>}
      {currentView === 'Contact' && <ContactView/>}
      {currentView === 'Resume' && <ResumeView/>}
      <Footer />
    </div>
  );
};

//nav buttons - trigger view change
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

const Footer = () => {
  return (
    <div className='App-footer'>
        <div className="leftFooterBorder">
          <img className="footerIcon" src={githubLogo} alt="github icon" />
        </div>
        <div className="leftFooterBorder">
          <img className="footerIcon" src={linkedInLogo} alt="LinkedIn icon" />
        </div>
        <div className="leftFooterBorder">
          <img className="footerIcon" src={StackOverflowLogo} alt="Stack Overflow icon" />
        </div>
    </div>
  );
};

export default App;