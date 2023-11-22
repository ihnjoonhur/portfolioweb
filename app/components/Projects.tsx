'use client'
import projects from "../../data/projects";
import Project from "./Project";
import { motion } from "framer-motion";
import { SectionAnimation } from "../util/animations";

const Projects = () => {
  return (
    <>
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={SectionAnimation} id="projects" className="project-section mb-48">
        <h2 className="flex justify-start items-center text-xl lg:text-3xl font-medium relative section-header-line after:w-[9vw] sm:after:w-[33vw] lg:after:w-[300px]">Some Things I've Built</h2>

        <div className="projects-section-container mt-14 mb-48">
          {projects.map((project) => {
            return (
              <Project
                key={project.projectId}
                projectId={project.projectId}
                projectName={project.projectName}
                technologies={project.technologies}
                githubLink={project.githubLink}
                projectDescription={project.projectDescription}
                projectImage={project.projectImage}
              />
            );
          })}
        </div>
      </motion.section>
    </>
  );
};

export default Projects;
