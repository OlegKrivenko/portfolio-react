import { NavLink } from "react-router-dom";
import "./style.css";

const ProjectItem = ({ title, img, id }) => {
  return (
    <NavLink to={`/project/${id}`}>
      <li className="projects__item">
        <img src={img} alt={title} className="projects__img" />
        <h3 className="projects__title">{title}</h3>
      </li>
    </NavLink>
  );
};

export default ProjectItem;
