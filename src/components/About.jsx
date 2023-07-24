import React from "react";
// for tilting the cards that displaying
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ title, index, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      // fade in from the right side, type of spring
      // the delay is 0.5 seconds multiplied for every index, first is 0 second is 0.5 third is 1 and so on
      // and the duration is 0.75 seconds
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      {/* tilt options that providing to the cards */}
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        {/* show the icon */}
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        {/* text inside the cards */}
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      {/* for animate */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer in JavaScript, and expertise in
        frameworks like React, Node.js. <br />
        I'm a quick learner and highly motivated and open-minded to learn new
        technologies and face challenges. <br />
        In addition to my degree studies, I took courses independently and
        acquired knowledge and experience in integrating new technologies,
        adapting to new platforms, and self-learning abilities.
        <br />
        Let's work together to bring your ideas to life!
      </motion.p>

      {/* display cards */}
      <div className="mt-20 flex flex-wrap gap-10">
        {/* loop over the services for each individual service render a custom service card */}
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

// wrap the export default About with the SectionWrapper - (About - component, "about" - idName)
export default SectionWrapper(About, "about");
