// This is the about me view
import logo from '../images/mountain-icon.avif';

export default function AboutMeView() {
  return (
    <div className="DarkGreenBackground AboutMeContainer OrangeFont">
      <title> About Me </title>
      <img src={logo} className="App-logo" alt="logo" />

        <div className="AboutMeText DarkGreenBackground">
          <p>Erin Mulcahey is a Senior Legal Assistant, with experience managing a team of Legal Assistants while assisting Case Managers and Attorneys. 
          Her background in managing groups, completing large projects, and working with the public shows her ability to adjust to different scenarios and work well with others.
          </p>
          <p>
          Erin enjoys solving puzzles and learning new ways to solve them. She want's to keep furthering her knowledge, to help build on the knowledge she already has, 
          and to stay up to date with the latest coding news and developments.
          </p>
          <p>
          Erin's ability to thrive in multiple types of jobs and teams has lead to her having the ability to function well in any environment. In multiple jobs, she was quickly
          promoted to a higher position, showing her ability to learn quickly and adapt to new situations. Many of the higher positions were leadership roles, where she was able to 
          train others and help them succeed in their roles. The current Senior Legal position has her keeping track of multiple tasks between the legal assistants and training new 
          members that join the team. 
          </p>
          <p>
          Erin has had a life long interest in coding, has completed the University of Minnesota's Coding BootCamp course, and is currently interested in learning more 
          about coding and web development.
          </p>
        </div>
    </div>
  );
}