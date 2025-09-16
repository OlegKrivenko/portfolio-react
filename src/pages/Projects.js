import ProjectItem from "../components/ProjectItem/ProjectItem";
import { projects } from "../helpers/projectsList";

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects__list">
          {projects &&
            projects.map(({ id, title, skills, img }) => {
              return <ProjectItem key={id} title={title} skills={skills} img={img} id={id} />;
            })}
        </ul>
      </div>
    </main>
  );
};

export default Projects;
