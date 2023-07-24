// this component creating 3js react three-fiber canvas

import { Suspense, useEffect, useState } from "react";

// Canvas is an empty canvas that allowing to place something on it
import { Canvas } from "@react-three/fiber";
// help to draw on this canvas
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import StarsCanvas from "./Stars";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    // when creating 3js elements we're starting with a mesh
    <mesh>
      {/* create a light  */}
      <hemisphereLight intensity={0.15} groundColor="black" />

      {/* create the main light */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />

      {/* create the glare on the monitor as a point light  */}
      <pointLight intensity={1} />

      {/* self-closing component that can pass the object */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size for a mobile device
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable - we are on device that's lower than 500px of width
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // since that inside useEffect we have to close that mediaQuery listener
    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      // where is the camera coming from
      // the position of the camera x-axis-20 y-axis-3 z-axis-5
      // fov - field of view - how wide
      camera={{ position: [20, 3, 5], fov: 25 }}
      // To properly render the model
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* Suspense not related to 3js this coming from react */}
      {/* this allows to have a loader while the model is loading */}
      <Suspense fallback={<CanvasLoader />}>
        {/* this allows to move the model left and right, without zoom*/}
        <OrbitControls
          enableZoom={false}
          // this allows to not to rotate the object all the way around up down left and right
          // just rotate it around a specific angle around the specific axis
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* render the component */}
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
