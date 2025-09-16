import gitHubIcon from "../../img/icons/gitHub-black.svg";
import "./style.css";

const ButtonGitHub = ({ link }) => {
  return (
    <a href={link} target="_blank" className="btn-outline" rel="noopener noreferrer">
      <img src={gitHubIcon} alt="" className="btn-outline__icon" />
      GitHub repo
    </a>
  );
};

export default ButtonGitHub;
