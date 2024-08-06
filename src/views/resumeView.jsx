// This is the resume view
export default function ResumeView() {
    return (
      <div className="DarkGreenBackground CreamFont ResumePage">
      <div className="ResumeTitle"> Resume </div> 
      <a className="ResumeLink" href="https://docs.google.com/document/d/16MCd5UNsvc4wRTfsuvJirVF3gNh2jlPS/edit?usp=sharing&ouid=108671301899384271592&rtpof=true&sd=true" target="_blank" rel="noreferrer">Click here to view resume</a>
        <div className="ResumeText DarkGreenBackground ResumeContainer">
          <div className="ResumeItemBox">
            <p>
              Front-End Proficiencies:
            </p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>responsive design</li>
              <li>React</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div className="ResumeItemBox">
            <p>
              Back-End Proficiencies:
            </p>
            <ul>
              <li>APIs</li>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL, Sequelize</li>
              <li>MongoDB, Mongoose</li>
              <li>REST</li>
              <li>GraphQL</li>
            </ul>
          </div>
          <div className="ResumeItemBox">
            <p>
              Dev Tools:
            </p>
            <ul>
              <li>Git</li>
              <li>npm</li>
              <li>Webpack</li>
              <li>Babel</li>
            </ul>
          </div>
          <div className="ResumeItemBox">
            <p>
              Additional Skills:
            </p>
            <ul>
              <li>Project Management</li>
              <li>Leadership</li>
              <li>Teamwork</li>
              <li>Problem Solving</li>
              <li>Communication</li>
              <li>Time Management</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  