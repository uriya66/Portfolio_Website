import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

// for VerticalTimeline to work
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

//import ExperienceCard from "../components/ExperienceCard";

const ExperienceCard = ({ experience }) => {
  return (
    // VerticalTimelineElement by itself creates the structure
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        // styling the icon
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      {/* the contents of the timeline element */}
      <div>
        {/* title */}
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        {/* company name */}
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      {/* list by bullet points */}
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {/* map over each point return li */}
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>WHAT I HAVE</p>
        <h2 className={styles.heroHeadText}>Work Experience.</h2>
      </motion.div>
      {/* create the VerticalTimeline */}
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {/* loop over the experiences for each experience and index return a experience card */}
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

// wrap the export default Experience with the SectionWrapper - (Experience - component, "work" - idName)
export default SectionWrapper(Experience, "work");
