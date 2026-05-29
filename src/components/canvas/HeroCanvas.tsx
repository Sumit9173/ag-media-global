/* eslint-disable react-hooks/purity */
"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingParticles() {
  const ref = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const count = 1200;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime * 0.05;
    if (ref.current) {
      ref.current.rotation.y = t;
      ref.current.rotation.x = t * 0.4;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ff6b00"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
        opacity={0.5}
      />
    </Points>
  );
}

function GlowOrb({
  position,
  color,
  intensity,
}: {
  position: [number, number, number];
  color: string;
  intensity: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(t * 0.5) * 0.3;
      ref.current.position.x = position[0] + Math.cos(t * 0.3) * 0.2;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={intensity}
        transparent
        opacity={0.15}
        roughness={0}
        metalness={1}
      />
    </mesh>
  );
}

function FloatingTorus() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ref.current) {
      ref.current.rotation.x = t * 0.3;
      ref.current.rotation.y = t * 0.2;
      ref.current.position.y = Math.sin(t * 0.4) * 0.5;
    }
  });

  return (
    <mesh ref={ref} position={[3, 0, -2]}>
      <torusGeometry args={[1.2, 0.3, 16, 100]} />
      <meshStandardMaterial
        color="#ff6b00"
        emissive="#ff6b00"
        emissiveIntensity={0.3}
        wireframe
        transparent
        opacity={0.4}
      />
    </mesh>
  );
}

function FloatingRing() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ref.current) {
      ref.current.rotation.z = t * 0.15;
      ref.current.rotation.y = t * 0.25;
      ref.current.position.y = Math.cos(t * 0.35) * 0.4;
    }
  });

  return (
    <mesh ref={ref} position={[-3.5, 1, -3]}>
      <torusGeometry args={[0.8, 0.05, 16, 100]} />
      <meshStandardMaterial
        color="#f59e0b"
        emissive="#f59e0b"
        emissiveIntensity={0.8}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
}

export function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{ position: "absolute", inset: 0 }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.1} />
      <pointLight position={[5, 5, 5]} color="#ff6b00" intensity={2} />
      <pointLight position={[-5, -5, -5]} color="#f59e0b" intensity={1} />

      <FloatingParticles />
      <GlowOrb position={[2, 1, -1]} color="#ff6b00" intensity={1.5} />
      <GlowOrb position={[-2, -1, -2]} color="#f59e0b" intensity={1} />
      <GlowOrb position={[0, 2, -3]} color="#ff6b00" intensity={0.8} />
      <FloatingTorus />
      <FloatingRing />
    </Canvas>
  );
}
