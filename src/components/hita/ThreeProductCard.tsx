'use client'

import React, { useRef, useState, useMemo } from 'react'
import { Canvas, useFrame, ThreeEvent } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

// Enhanced Liquid Shader with Ripples and Organic Noise
const EnhancedLiquidShader = {
    uniforms: {
        uTime: { value: 0 },
        uHover: { value: 0 },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) }, // Normalized mouse position
        uTexture: { value: new THREE.Texture() },
    },
    vertexShader: `
    varying vec2 vUv;
    varying float vEl;
    uniform float uTime;
    uniform float uHover;
    uniform vec2 uMouse;

    void main() {
      vUv = uv;
      vec3 pos = position;
      
      // Calculate distance from mouse for ripple effect
      float dist = distance(uv, uMouse);
      
      // Decay ripple effect over distance
      float decay = smoothstep(0.5, 0.0, dist);
      
      // Combine general wave (hover) with local ripple (mouse)
      float generalWave = sin(pos.y * 5.0 + uTime * 2.0) * 0.05 * uHover;
      float ripple = sin(dist * 20.0 - uTime * 5.0) * 0.1 * decay * uHover;
      
      pos.z += generalWave + ripple;
      vEl = pos.z; // Pass elevation to fragment shader for lighting
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
    fragmentShader: `
    uniform sampler2D uTexture;
    uniform float uHover;
    uniform float uTime;
    uniform vec2 uMouse;
    varying vec2 vUv;
    varying float vEl;

    void main() {
      vec2 uv = vUv;
      
      // Liquid distortion based on elevation/waves
      float distortionScale = 0.03 * uHover;
      uv.x += sin(uv.y * 10.0 + uTime) * distortionScale;
      uv.y += cos(uv.x * 10.0 + uTime) * distortionScale;
      
      vec4 textureColor = texture2D(uTexture, uv);
      
      // Add fake specular highlight to the waves
      float highlight = smoothstep(0.04, 0.06, vEl);
      textureColor.rgb += highlight * 0.15;
      
      gl_FragColor = textureColor;
    }
  `
}

function ProductPlane({ imageUrl }: { imageUrl: string }) {
    const mesh = useRef<THREE.Mesh>(null)
    const [hovered, setHover] = useState(false)
    const texture = useTexture(imageUrl)
    const materialRef = useRef<THREE.ShaderMaterial>(null)

    // Target rotation for parallax
    const [targetRot, setTargetRot] = useState({ x: 0, y: 0 })

    const shaderArgs = useMemo(() => {
        return new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uHover: { value: 0 },
                uMouse: { value: new THREE.Vector2(0.5, 0.5) },
                uTexture: { value: texture },
            },
            vertexShader: EnhancedLiquidShader.vertexShader,
            fragmentShader: EnhancedLiquidShader.fragmentShader,
            side: THREE.DoubleSide
        })
    }, [texture])

    const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
        if (materialRef.current) {
            // Update shader ripple target
            materialRef.current.uniforms.uMouse.value.set(e.uv!.x, e.uv!.y)
        }

        // Calculate tilt (normalize -1 to 1 based on mesh size approx)
        // For simplicity, we just use the UVs relative to center
        // e.uv.x is 0..1, so (e.uv.x - 0.5) * 2 is -1..1
        if (e.uv) {
            setTargetRot({
                y: (e.uv.x - 0.5) * 0.3, // Rotate Y based on X position
                x: (e.uv.y - 0.5) * 0.3  // Rotate X based on Y position (inverted feel often better, depends on preference)
            })
        }
    }

    const handlePointerLeave = () => {
        setHover(false)
        setTargetRot({ x: 0, y: 0 }) // Reset tilt
    }

    useFrame((state, delta) => {
        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value += delta;
            materialRef.current.uniforms.uHover.value = THREE.MathUtils.lerp(
                materialRef.current.uniforms.uHover.value,
                hovered ? 1 : 0,
                delta * 4 // Smooth transition speed
            );
        }

        if (mesh.current) {
            // Smooth parallax tilt
            mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, -targetRot.x, delta * 2) // Invert X for natural tilt
            mesh.current.rotation.y = THREE.MathUtils.lerp(mesh.current.rotation.y, targetRot.y, delta * 2)
        }
    })

    return (
        <mesh
            ref={mesh}
            onPointerOver={() => setHover(true)}
            onPointerOut={handlePointerLeave}
            onPointerMove={handlePointerMove}
        >
            {/* Increased segments for smoother ripples */}
            <planeGeometry args={[4, 5, 64, 64]} />
            <primitive ref={materialRef} object={shaderArgs} attach="material" />
        </mesh>
    )
}

interface ThreeProductCardProps {
    image: string
    name: string
}

export default function ThreeProductCard({ image, name }: ThreeProductCardProps) {
    return (
        <div className="w-full h-full relative" style={{ backgroundColor: '#F9F5EC' }}>
            {/* Explicit background color to match cream/20 in case parent doesn't cover */}
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <ambientLight intensity={1} />
                <ProductPlane imageUrl={image} />
            </Canvas>
        </div>
    )
}
