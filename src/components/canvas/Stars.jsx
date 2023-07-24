import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// special math utility
import * as random from "maath/random/dist/maath-random.esm";

// create stars from scratch
const Stars = (props) => {
  const ref = useRef();

  // create the random sphere
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  // rotate the stars by frame state and delta meaning a change
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    // group of the animation / rotate the entire group
    <group rotation={[0, 0, Math.PI / 4]}>
      {/*  stride - Min distance between previous and current point */}
      {/*  frustumCulled - it checks every frame if the object is in the frustum of the camera before rendering the object. If set to false the object gets rendered every frame even if it is not in the frustum of the camera. Default is true.  */}
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        // spread all of the props to this points
        {...props}
      >
        {/* the stars material */}
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

// the canvas to show the stars on it
const StarsCanvas = () => {
  return (
    // absolute and z-[-1] - because it's going to show behind
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      {/* where is the camera coming from */}
      {/* the position of the camera x-axis-0 y-axis-0 z-axis-1 */}
      <Canvas camera={{ position: [0, 0, 1] }}>
        {/* loader while the model is loading as null because it can load really quickly*/}
        <Suspense fallback={null}>
          {/* render the component */}
          <Stars />
        </Suspense>
        {/* allows us to preload content  */}
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
