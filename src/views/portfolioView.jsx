// This is the portfolio view

//project component
import Project from './Project.jsx';
import ImgHexBg from '../images/Hegaxon-Background.jpg';
import ImgStoneBg from '../images/Stone-Background.jpg';
import ImgTriangleBg from '../images/Triangle-Background.jpg';
import ImgCubeBg from '../images/Cube-Background.jpg';

//portfolio view
export default function PortfolioView() {
    return (
      <div className="DarkGreenBackground flex-container">
        <title> Portfolio </title>
          <Project title="Project 1" deployedLink="https://emulcahey.github.io/Office_Break_Room/" githubLink=" https://github.com/emulcahey/Office_Break_Room.git" imageSrc={ImgHexBg}/>
          <Project title="Project 2" deployedLink="https://www.google.com" githubLink=" https://www.github.com" imageSrc={ImgStoneBg}/>
          <Project title="Project 3" deployedLink="https://www.google.com" githubLink=" https://www.github.com" imageSrc={ImgTriangleBg}/>
          <Project title="Project 4" deployedLink="https://www.google.com" githubLink=" https://www.github.com" imageSrc={ImgCubeBg}/>
          <Project title="Project 5" deployedLink="https://www.google.com" githubLink=" https://www.github.com" imageSrc={ImgHexBg}/>
          <Project title="Project 6" deployedLink="https://www.google.com" githubLink=" https://www.github.com" imageSrc={ImgStoneBg}/>
      </div>
    );
  }