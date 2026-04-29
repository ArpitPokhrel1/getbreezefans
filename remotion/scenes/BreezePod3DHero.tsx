import { ThreeCanvas } from "@remotion/three";
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";

const FanObject = () => {
  const frame = useCurrentFrame();
  const rotationY = interpolate(frame, [0, 120], [-0.45, 0.55]);

  return (
    <group rotation={[0.08, rotationY, -0.08]} position={[-1.15, -0.25, 0]}>
      <mesh position={[0, 1.1, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.78, 0.78, 0.55, 72]} />
        <meshStandardMaterial color="#eef6fb" roughness={0.34} metalness={0.04} />
      </mesh>
      <mesh position={[0, 1.1, 0.31]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.54, 0.045, 16, 72]} />
        <meshStandardMaterial color="#22282d" roughness={0.42} />
      </mesh>
      <mesh position={[0, 1.1, 0.36]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.24, 0.025, 12, 48]} />
        <meshStandardMaterial color="#8fa8b8" roughness={0.35} />
      </mesh>
      <mesh position={[0, 0.15, 0]} rotation={[0, 0, 0]}>
        <capsuleGeometry args={[0.26, 1.45, 18, 32]} />
        <meshStandardMaterial color="#e8f3f8" roughness={0.38} />
      </mesh>
      <mesh position={[0, 0.18, 0.29]}>
        <boxGeometry args={[0.2, 0.34, 0.045]} />
        <meshStandardMaterial color="#c3d7e3" roughness={0.28} />
      </mesh>
      <mesh position={[0, -0.34, 0.29]}>
        <boxGeometry args={[0.16, 0.24, 0.045]} />
        <meshStandardMaterial color="#d8e7ef" roughness={0.28} />
      </mesh>
    </group>
  );
};

const BlanketObject = () => {
  const frame = useCurrentFrame();
  const rotationY = interpolate(frame, [0, 120], [0.28, -0.3]);

  return (
    <group rotation={[0.12, rotationY, 0.02]} position={[1.2, -0.35, -0.05]}>
      <mesh position={[0, 0.42, 0]}>
        <boxGeometry args={[1.78, 0.16, 1.18]} />
        <meshStandardMaterial color="#8c9698" roughness={0.82} />
      </mesh>
      <mesh position={[0.12, 0.57, 0.06]}>
        <boxGeometry args={[1.58, 0.12, 0.98]} />
        <meshStandardMaterial color="#a7b1b2" roughness={0.86} />
      </mesh>
      <mesh position={[0.18, 0.71, 0.12]}>
        <boxGeometry args={[1.32, 0.1, 0.78]} />
        <meshStandardMaterial color="#c0c9ca" roughness={0.9} />
      </mesh>
    </group>
  );
};

export const BreezePod3DHero = () => {
  const { width, height } = useVideoConfig();

  return (
    <div style={{ width, height, background: "transparent" }}>
      <ThreeCanvas width={width} height={height} camera={{ position: [0, 0.55, 4.6], fov: 42 }}>
        <ambientLight intensity={0.72} />
        <directionalLight position={[3.4, 5.2, 4.5]} intensity={1.4} />
        <directionalLight position={[-4, 2.2, 3]} intensity={0.42} />
        <FanObject />
        <BlanketObject />
        <mesh position={[0, -1.22, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[2.75, 96]} />
          <meshStandardMaterial color="#eef4f2" roughness={0.78} />
        </mesh>
      </ThreeCanvas>
    </div>
  );
};
