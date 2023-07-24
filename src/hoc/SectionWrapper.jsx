// HIGHER ORDER COMPONENT - another component inside of it
// apply something on this sectionWrapper it's going to be applied all over the sections

// rafce - create a template

import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

// since it's a wrapper that needs to pass the original component and idName to navigate to a specific section
const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        // animate the section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        // first show it once only and animate it for amount of 0.25 seconds
        viewport={{ once: true, amount: 0.25 }}
        // make it move away from the left corner
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        {/* scroll when clicking  on element scroll */}
        <span className="hash-span" id={idName}>
          {/* empty space */}
          &nbsp;
        </span>
        {/* the motion.section render the original component */}
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
