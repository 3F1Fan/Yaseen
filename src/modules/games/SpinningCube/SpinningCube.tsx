import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import type { Mesh } from 'three'

function Cube() {
  const meshRef = useRef<Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const [active, setActive] = useState(false)

  useFrame((_, delta) => {
    if (!meshRef.current) return
    const speed = active ? 2.5 : 0.6
    meshRef.current.rotation.x += delta * speed
    meshRef.current.rotation.y += delta * speed
  })

  return (
    <mesh
      ref={meshRef}
      scale={active ? 1.4 : 1}
      onClick={() => setActive((v) => !v)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color={hovered ? '#ffd166' : '#7c5cff'} />
    </mesh>
  )
}

/**
 * A minimal Three.js / React-Three-Fiber scene. This is the template to copy
 * for real 3D games: render anything inside <Canvas>, drive animation with
 * useFrame, and handle input with the pointer/click events on meshes.
 */
export default function SpinningCube() {
  return (
    <Canvas camera={{ position: [3, 3, 3], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <Cube />
      <OrbitControls enablePan={false} />
    </Canvas>
  )
}
