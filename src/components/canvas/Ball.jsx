// this component develop the balls using 3js and react-three-fiber

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

// load the percentages
import CanvasLoader from "../Loader";

const Ball = (props) => {
  // get the balls texture - restructure the decal
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />

      {/* inside of mesh going to show everything */}
      <mesh castShadow receiveShadow scale={2.75}>
        {/* a class for generating an icosahedron geometry */}
        <icosahedronGeometry args={[1, 1]} />
        {/* add the material */}
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {/* add the texture */}
        <Decal
          position={[0, 0, 1]}
          // mirror horizontally
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

// the canvas to show the icon on
const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      // means WebGL can swap buffers instead of copy buffers.
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* Suspense not related to 3js this coming from react */}
      {/* this allows to have a loader while the model is loading */}
      <Suspense fallback={<CanvasLoader />}>
        {/* this allows to move the model left and right with the mouse, without zoom*/}
        <OrbitControls enableZoom={false} />
        {/* render the component */}
        <Ball imgUrl={icon} />
      </Suspense>
      {/* allows us to preload content  */}
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
