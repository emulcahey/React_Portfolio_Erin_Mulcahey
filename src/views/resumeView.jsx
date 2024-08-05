// This is the resume view
export default function ResumeView() {
    return (
      <div className="DarkGreenBackground CreamFont ResumePage">
      <div className="ResumeTitle"> Resume </div> 
      <a className="ResumeLink" href="https://drive.google.com/file/d/1H3JY4XV1yJ6R9YtJ9G0vz3ZzK0lXQe6N/view?usp=sharing" target="_blank" rel="noreferrer">Click here to view resume</a>
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
  