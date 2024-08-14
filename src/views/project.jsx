//project component
// import Image from './Image.jsx';
import githubLogo from '../images/GitHub-logo.png';
import internetLogo from '../images/internet-Photoroom.png';

export default function Project ({ title, deployedLink, githubLink, imageSrc }) {
    return (
    <>
        <div className="projectBox" style={{backgroundImage: `url(${imageSrc})`}}>
            <div className="project-info">
                <h3>{title}</h3>
                <div className="projectLinks">
                    <p>
                        <a href={deployedLink} target="_blank">
                            <img className="portfolioIcon" src={internetLogo}/>
                        </a>
                    </p>
                    <p>
                        <a href={githubLink} target="_blank">
                        <img className="portfolioIcon " src={githubLogo}/></a>
                    </p>
                </div>
            </div>
        </div>
    </>
    );
    }