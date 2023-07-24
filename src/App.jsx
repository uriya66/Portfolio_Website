import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvasBg,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* if we want a background image we use at bg-hero-pattern instead bg-opacity-0 */}
        <div className="bg-opacity-0 bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        {/* reference all of other components */}
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* for 3D stars objects  */}
        <StarsCanvasBg />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
