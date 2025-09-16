import { useParams } from "react-router-dom";
import ButtonGitHub from "../components/ButtonGitHub/ButtonGitHub";
import { projects } from "../helpers/projectsList";

const Project = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === id);
  const { title, skills, imgBig, gitHubLink } = project;

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{title}</h1>

          <img src={imgBig} alt={title} className="project-details__img" />
          <div className="project-details__description">
            <p>Skills: {skills}</p>

            <ButtonGitHub link={gitHubLink} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Project;
