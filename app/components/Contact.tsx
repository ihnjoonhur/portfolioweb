"use client";
import { motion } from "framer-motion";
import { SectionAnimation } from "../util/animations";
const Contact = () => {
  return (
    <>
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={SectionAnimation} id="contact" className="contact-section flex flex-col items-center justify-center mb-48">
        <h1 className="text-2xl font-medium text-center mb-5 md:mb-7 md:text-3xl">Get In Touch</h1>
        <p className="text-center text-secondary text-xs mb-5 md:text-base md:w-8/12 lg:w-5/12 md:mb-7">I'm always open to chatting about software engineering, tech, and building my network. Feel free to send me an e-mail any time!</p>
        <a href="mailto:bryanyi1206@gmail.com" className="squishy-button">
          Say Hello
        </a>
      </motion.section>
    </>
  );
};

export default Contact;
