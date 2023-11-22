import { ProjectInfo } from "@/@types/interfaces";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
library.add(faGithub);
import { motion } from "framer-motion";
import { ProjectsAnimation } from "../util/animations";
interface ProjectProps extends ProjectInfo {}
const Project: React.FC<ProjectProps> = ({ projectId, projectName, technologies, githubLink, projectDescription, projectImage }) => {
  if (projectId % 2 != 0) {
    return (
      <>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={ProjectsAnimation} className={`project-container`}>
          <div className={`project-info-left`}>
            <div className={`project-title-left`}>{projectName}</div>
            <div className={`project-desc`}>{projectDescription}</div>
            <div className="project-tech">
              {technologies.map((tech, idx) => {
                return (
                  <span key={idx} className="project-tech-name">
                    {tech}
                  </span>
                );
              })}
            </div>
            <div className={`project-links`}>
              <a href={githubLink} className="github-link">
                <FontAwesomeIcon className={"github-icon"} icon={faGithub} />
              </a>
            </div>
          </div>

          <div className={`project-image-right`}>
            <a href={githubLink}>
              <img className="w-full h-full" src={projectImage} alt={projectName} />
            </a>
          </div>
        </motion.div>
      </>
    );
  } else {
    return (
      <>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={ProjectsAnimation} className={`project-container`}>
          <div className={`project-image-left`}>
            <a href={githubLink}>
              <img className="w-full h-full" src={projectImage} alt={projectName} />
            </a>
          </div>
          <div className={`project-info-right`}>
            <div className={`project-title-right`}>{projectName}</div>
            <div className={`project-desc`}>{projectDescription}</div>
            <div className="project-tech">
              {technologies.map((tech, idx) => {
                return (
                  <span key={idx} className="project-tech-name">
                    {tech}
                  </span>
                );
              })}
            </div>
            <div className={`project-links`}>
              <a href={githubLink} className="github-icon">
                <FontAwesomeIcon className={"github-icon"} icon={faGithub} />
              </a>
            </div>
          </div>
        </motion.div>
      </>
    );
  }
};

export default Project;
