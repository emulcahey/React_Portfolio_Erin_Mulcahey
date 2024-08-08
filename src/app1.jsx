// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import githubLogo from './images/GitHub-logo.png';
import linkedInLogo from './images/LinkedIn-logo.png';
import StackOverflowLogo from './images/Stack_Overflow_logo.png';

//import views
import AboutMeView from './views/aboutmeview1.jsx';
import PortfolioView from './views/portfolioview1.jsx';
import ContactView from './views/contactview1.jsx';
import ResumeView from './views/resumeview1.jsx';
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
          <a href='https://github.com/emulcahey' target="_blank">
            <img className="footerIcon" src={githubLogo} alt="github icon" />
          </a>
        </div>
        <div className="leftFooterBorder">
          <a href='https://www.linkedin.com/in/erin-mulcahey-5a0a38188/' target="_blank">
            <img className="footerIcon" src={linkedInLogo} alt="LinkedIn icon" />
          </a>
        </div>
        <div className="leftFooterBorder">
          <a href='https://try.stackoverflow.co/' target="_blank">
            <img className="footerIcon" src={StackOverflowLogo} alt="Stack Overflow icon" />
          </a>
        </div>
    </div>
  );
};

export default App;