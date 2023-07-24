// this component create 3D balls of actual technologies

import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {/* loop over the technologies for each technology and index return a div for BallCanvas */}
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

// wrap the export default Tech with the SectionWrapper - (Tech - component, "" - no have idName)
export default SectionWrapper(Tech, "");
