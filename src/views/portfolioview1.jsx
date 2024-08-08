// This is the portfolio view

//project component
import Project from './project1.jsx';
// import ImgHexBg from '../images/Hegaxon-Background.jpg';
// import ImgStoneBg from '../images/Stone-Background.jpg';
// import ImgTriangleBg from '../images/Triangle-Background.jpg';
// import ImgCubeBg from '../images/Cube-Background.jpg';
import BirdFinder from '../images/BirdFinder.png';
import EmployeePayrollTracker from '../images/EmployeeTracker.png';
import OfficeBreakRoom from '../images/OfficeBreakRoom.png';
import PersonalBlog from '../images/PersonalBlog.png';
import ProfessionalPortfolio from '../images/ProfessionalPortfolio.png';
import WeatherDashboard from '../images/WeatherDashboard.png';

//portfolio view
export default function PortfolioView() {
    return (
      <div className="DarkGreenBackground flex-container">
        <title> Portfolio </title>
          <Project title="Office Break Room" deployedLink="https://emulcahey.github.io/Office_Break_Room/" githubLink=" https://github.com/emulcahey/Office_Break_Room.git" imageSrc={OfficeBreakRoom}/>
          <Project title="Weather Dashboard" deployedLink="https://emulcahey.github.io/Weather-Dashboard-Erin-Mulcahey/" githubLink=" https://github.com/emulcahey/Weather-Dashboard-Erin-Mulcahey.git" imageSrc={WeatherDashboard}/>
          <Project title="Bird/Chirp Finder" deployedLink="https://alarrabee.github.io/bird-finder/" githubLink=" https://github.com/alarrabee/bird-finder.git" imageSrc={BirdFinder}/>
          <Project title="Professional Portfolio" deployedLink="https://emulcahey.github.io/Professional-Portfolio-Erin-Mulcahey/" githubLink=" https://github.com/emulcahey/Professional-Portfolio-Erin-Mulcahey.git" imageSrc={ProfessionalPortfolio}/>
          <Project title="Personal Blog" deployedLink="https://emulcahey.github.io/Personal-Blog-Erin-Mulcahey/" githubLink=" https://github.com/emulcahey/Personal-Blog-Erin-Mulcahey.git" imageSrc={PersonalBlog}/>
          <Project title="Employee Payroll Tracker" deployedLink="https://emulcahey.github.io/Employee-Payroll-Tracker-Erin-Mulcahey/" githubLink=" https://github.com/emulcahey/Employee-Payroll-Tracker-Erin-Mulcahey.git" imageSrc={EmployeePayrollTracker}/>
      </div>
    );
  }