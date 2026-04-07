"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"

function Rings() {
  const g1 = useRef<THREE.Group>(null)
  const g2 = useRef<THREE.Group>(null)
  const g3 = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    if (g1.current) {
      g1.current.rotation.y += delta * 0.18
      g1.current.rotation.x += delta * 0.05
    }
    if (g2.current) {
      g2.current.rotation.y -= delta * 0.12
      g2.current.rotation.z += delta * 0.04
    }
    if (g3.current) {
      g3.current.rotation.x += delta * 0.08
      g3.current.rotation.y += delta * 0.06
    }
  })

  return (
    <>
      <group ref={g1}>
        <mesh rotation={[Math.PI / 2.2, 0, 0]}>
          <torusGeometry args={[3.4, 0.012, 16, 220]} />
          <meshBasicMaterial color="#583C2A" transparent opacity={0.32} />
        </mesh>
      </group>

      <group ref={g2}>
        <mesh rotation={[Math.PI / 1.8, Math.PI / 6, 0]}>
          <torusGeometry args={[3.85, 0.008, 16, 220]} />
          <meshBasicMaterial color="#364274" transparent opacity={0.25} />
        </mesh>
      </group>

      <group ref={g3}>
        <mesh rotation={[Math.PI / 2.5, Math.PI / 4, 0]}>
          <torusGeometry args={[4.25, 0.006, 16, 220]} />
          <meshBasicMaterial color="#8FACC2" transparent opacity={0.32} />
        </mesh>
      </group>

      {Array.from({ length: 4 }).map((_, i) => {
        const angle = (i / 4) * Math.PI * 2
        return (
          <mesh key={i} position={[Math.cos(angle) * 3.4, Math.sin(angle) * 3.4, 0]}>
            <sphereGeometry args={[0.04, 16, 16]} />
            <meshBasicMaterial color="#583C2A" transparent opacity={0.5} />
          </mesh>
        )
      })}
    </>
  )
}

export function OrbitingRings({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <Canvas
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 1.6]}
      >
        <Rings />
      </Canvas>
    </div>
  )
}
