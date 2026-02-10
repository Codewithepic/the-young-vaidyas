'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, Sphere, Torus, Box } from '@react-three/drei'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import * as THREE from 'three'

function FloatingElements() {
  const groupRef = useRef<THREE.Group>(null)

  return (
    <group ref={groupRef}>
      {/* Floating Lotus Petals */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <Torus args={[1, 0.3, 16, 100]} position={[2, 1, 0]}>
          <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={0.1} />
        </Torus>
      </Float>

      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <Torus args={[0.8, 0.25, 16, 100]} position={[-2, -1, 1]}>
          <meshStandardMaterial color="#06B6D4" emissive="#06B6D4" emissiveIntensity={0.1} />
        </Torus>
      </Float>

      <Float speed={1.8} rotationIntensity={2} floatIntensity={2.5}>
        <Torus args={[1.2, 0.35, 16, 100]} position={[0, 2, -1]}>
          <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.1} />
        </Torus>
      </Float>

      {/* Energy Orbs */}
      <Float speed={3} rotationIntensity={0.5} floatIntensity={3}>
        <Sphere args={[0.3]} position={[-3, 0, 2]}>
          <meshStandardMaterial
            color="#F59E0B"
            emissive="#F59E0B"
            emissiveIntensity={0.3}
            transparent
            opacity={0.8}
          />
        </Sphere>
      </Float>

      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={2}>
        <Sphere args={[0.25]} position={[3, -2, 0]}>
          <meshStandardMaterial
            color="#EF4444"
            emissive="#EF4444"
            emissiveIntensity={0.3}
            transparent
            opacity={0.8}
          />
        </Sphere>
      </Float>

      {/* Sacred Geometry */}
      <Float speed={1} rotationIntensity={3} floatIntensity={1}>
        <Box args={[0.5, 0.5, 0.5]} position={[1, -2, 2]}>
          <meshStandardMaterial
            color="#6366F1"
            emissive="#6366F1"
            emissiveIntensity={0.2}
            wireframe
          />
        </Box>
      </Float>
    </group>
  )
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />

        <FloatingElements />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  )
}