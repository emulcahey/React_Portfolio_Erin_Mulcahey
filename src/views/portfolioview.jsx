// This is the portfolio view

//project component
import Project from './project.jsx';
// import ImgHexBg from '../images/hegaxon-background.jpg';
// import ImgStoneBg from '../images/stone-background.jpg';
// import ImgTriangleBg from '../images/triangle-background.jpg';
// import ImgCubeBg from '../images/cube-background.jpg';
import BirdFinder from '../images/birdfinder.png';
import EmployeePayrollTracker from '../images/employeetracker.png';
import OfficeBreakRoom from '../images/officebreakroom.png';
import PersonalBlog from '../images/personalblog.png';
import ProfessionalPortfolio from '../images/professionalportfolio.png';
import WeatherDashboard from '../images/weatherdashboard.png';

//portfolio view
export default function PortfolioView() {
    return (
      <div className="DarkGreenBackground flex-container">
        <title> Portfolio </title>
          <Project title="Office Break Room" deployedLink="https://office-break-room.onrender.com" githubLink=" https://github.com/emulcahey/Office_Break_Room.git" imageSrc={OfficeBreakRoom}/>
          <Project title="Weather Dashboard" deployedLink="https://emulcahey.github.io/Weather-Dashboard-Erin-Mulcahey/" githubLink=" https://github.com/emulcahey/Weather-Dashboard-Erin-Mulcahey.git" imageSrc={WeatherDashboard}/>
          <Project title="Bird/Chirp Finder" deployedLink="https://alarrabee.github.io/bird-finder/" githubLink=" https://github.com/alarrabee/bird-finder.git" imageSrc={BirdFinder}/>
          <Project title="Professional Portfolio" deployedLink="https://emulcahey.github.io/Professional-Portfolio-Erin-Mulcahey/" githubLink=" https://github.com/emulcahey/Professional-Portfolio-Erin-Mulcahey.git" imageSrc={ProfessionalPortfolio}/>
          <Project title="Personal Blog" deployedLink="https://emulcahey.github.io/Personal-Blog-Erin-Mulcahey/" githubLink=" https://github.com/emulcahey/Personal-Blog-Erin-Mulcahey.git" imageSrc={PersonalBlog}/>
          <Project title="Employee Payroll Tracker" deployedLink="https://emulcahey.github.io/Employee-Payroll-Tracker-Erin-Mulcahey/" githubLink=" https://github.com/emulcahey/Employee-Payroll-Tracker-Erin-Mulcahey.git" imageSrc={EmployeePayrollTracker}/>
      </div>
    );
  }
