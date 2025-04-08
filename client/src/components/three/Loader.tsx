import React from "react";

// A simplified canvas loader that doesn't use specialized drei components
export default function CanvasLoader() {
  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#00ffff" wireframe />
    </mesh>
  );
}