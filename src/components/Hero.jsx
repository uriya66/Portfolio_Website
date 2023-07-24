// this hero component have a 3D model

// import animations
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* generate background */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          {/* create the circle  */}
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          {/* create the line */}
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* create the text */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Uriya</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I have a bachelor's degree in computer science from the Open
            University. <br className="sm:block hidden" />I develop a full-stack
            application.
            {/* <br className="sm:block hidden" />
            Highly motivated and open-minded to learn new technologies and face
            challenges. */}
          </p>
        </div>
      </div>

      {/* rendering the computer canvas */}
      <ComputersCanvas />

      {/* accessible for mobile devices and on desktop create scrolling elemnt */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        {/* within that div show an ancor tag to the about*/}
        <a href="#about">
          {/* create the rectangle */}
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            {/* create the dot bu using framer motion */}
            <motion.div
              animate={{
                // animate just the y-axis by 24px up and down
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
