import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { githubIcon } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  source_web_link,
  video,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        {/* add the image by size */}
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* add github icon with link to the github project  */}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              // open the link in a new tab
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={githubIcon}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        {/* if there is web link */}
        <div className="mt-5">
          {source_web_link && (
            <h3
              className="text-cyan-300 font-semibold text-[18px]"
              onClick={() => window.open(source_web_link, "_blank")}
            >
              To the website
            </h3>
          )}
        </div>

        {/* if there is video */}
        <div className="mt-5">
          {video && (
            <h3
              className="text-cyan-300 font-semibold text-[18px]"
              onClick={() => window.open(video, "_self")}
            >
              Watch the video
            </h3>
          )}
        </div>
        {/* programming language and color style */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* title */}
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>
      {/* paragraph description  */}
      <div className="w-full flex">
        <motion.p
          // animate movement to text
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through examples
          of my work. <br />
          Each project is briefly described with links to code repositories and
          live demos in it. <br />
          It reflects my ability to solve complex problems, work with different
          technologies, and manage projects effectively.
        </motion.p>
      </div>

      {/* wrapper for project cards */}
      <div className="mt-20 flex flex-wrap gap-7">
        {/* loop over for each individual project  */}
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            // pass the entire project and spread out all the properties of that specific project
            {...project}
          />
        ))}
      </div>
    </>
  );
};

// wrap the export default Works with the SectionWrapper - (Works - component, "projects" - projects idName)
export default SectionWrapper(Works, "projects");