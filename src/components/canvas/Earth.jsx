import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  // import 3D models
  const earth = useGLTF("./planet/scene.gltf");

  return (
    // self-closing component that can pass the object
    // size and position of the earth
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

// the canvas to show the earth on it
const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      // where is the camera coming from
      // the position of the camera x-axis--4 y-axis-3 z-axis-6
      // fov - field of view - how wide
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      {/* Suspense not related to 3js this coming from react */}
      {/* this allows to have a loader while the model is loading */}
      <Suspense fallback={<CanvasLoader />}>
        {/* this allows to move the model left and right with the mouse, without zoom*/}
        <OrbitControls
          autoRotate
          enableZoom={false}
          // how the rotation is happening
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        {/* render the component */}
        <Earth />
        {/* allows us to preload content  */}
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

// return the EarthCanvas and not the actual Eart model
export default EarthCanvas;
