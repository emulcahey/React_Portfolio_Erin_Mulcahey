//project component
// import Image from './Image.jsx';

export default function Project ({ title, deployedLink, githubLink, imageSrc }) {
    return (
    <>
        <div className="projectBox" style={{backgroundImage: `url(${imageSrc})`}}>
            <div className="project-info">
                <h3>{title}</h3>
                <p>Deployed Application: <a href={deployedLink} target="_blank">{deployedLink}</a></p>
                <p>GitHub Repository: <a href={githubLink} target="_blank">{githubLink}</a></p>
            </div>
        </div>
    </>
    );
    }