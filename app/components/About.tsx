"use client";
import { VscChevronRight } from "react-icons/vsc";
import Img from "next/image";
import { motion } from "framer-motion";
import { SectionAnimation } from "../util/animations";

const About = () => {
  return (
    <>
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={SectionAnimation} id="about" className="about-section mb-48">
        <h2 className="flex justify-start items-center font-medium text-xl md:text-2xl lg:text-3xl relative section-header-line">About Me</h2>

        <div className="text-secondary text-lg flex flex-col md:grid grid-cols-aboutGrid mt-8 gap-x-7">
          <div className="about-me-copy-container flex flex-col gap-y-4 mb-8 text-sm md:text-base">
            <div>
              Hello! My name is Bryan, and I enjoy the creative and systematic process of bringing software to life. My interest in web development started when my friend introduced me to a web development Udemy course. It was a light-bulb moment
              that made me realize my passion for building and creating.
            </div>
            <div>
              Today, I have the privilege of building and maintaining web technologies at{" "}
              <a className="fun-underline" href="https://www.ridge.com">
                The Ridge.
              </a>{" "}
            </div>
            <div>
              I also recently started blogging on{" "}
              <a className="fun-underline" href="https://www.medium.com/@bryanyi">
                Medium
              </a>{" "}
              to provide resources that I wish I had for other self-taught software engineers.
            </div>
            <div>Here are a few technologies I've been working with lately:</div>
            <ul className="about-technologies">
              <li className="flex gap-x-1 items-center text-accent">
                <VscChevronRight />
                <span className="text-secondary">Java / Spring Boot</span>
              </li>
              <li className="flex gap-x-1 items-center text-accent">
                <VscChevronRight />
                <span className="text-secondary">Go</span>
              </li>
              <li className="flex gap-x-1 items-center text-accent">
                <VscChevronRight />
                <span className="text-secondary">NextJS</span>
              </li>
              <li className="flex gap-x-1 items-center text-accent">
                <VscChevronRight />
                <span className="text-secondary">Typescript</span>
              </li>
              <li className="flex gap-x-1 items-center text-accent">
                <VscChevronRight />
                <span className="text-secondary">Docker</span>
              </li>
              <li className="flex gap-x-1 items-center text-accent">
                <VscChevronRight />
                <span className="text-secondary">NodeJS</span>
              </li>
            </ul>
          </div>
          <div className="portfolio-image-container flex justify-center items-center w-full">
            <div className="portfolio-image">
              <Img src={"/bryan_profile.jpeg"} alt={"Bryan's Profile Picture"} width={550} height={250} />
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default About;
