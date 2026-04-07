"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useMemo, useRef } from "react"
import * as THREE from "three"

type ParticleFieldProps = {
  count: number
  spread: number
  size: number
  colors: ReadonlyArray<string>
  speed: number
}

function ParticleField({ count, spread, size, colors, speed }: ParticleFieldProps) {
  const pointsRef = useRef<THREE.Points>(null)
  const mouse = useRef({ x: 0, y: 0 })

  const { positions, sizes, colorAttr, drifts } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    const colorAttr = new Float32Array(count * 3)
    const drifts = new Float32Array(count * 3)

    const palette = colors.map((hex) => new THREE.Color(hex))

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions[i3 + 0] = (Math.random() - 0.5) * spread
      positions[i3 + 1] = (Math.random() - 0.5) * spread
      positions[i3 + 2] = (Math.random() - 0.5) * spread * 0.5

      sizes[i] = (0.4 + Math.random() * 0.9) * size

      const c = palette[Math.floor(Math.random() * palette.length)]
      colorAttr[i3 + 0] = c.r
      colorAttr[i3 + 1] = c.g
      colorAttr[i3 + 2] = c.b

      drifts[i3 + 0] = (Math.random() - 0.5) * 0.4
      drifts[i3 + 1] = 0.15 + Math.random() * 0.35
      drifts[i3 + 2] = (Math.random() - 0.5) * 0.2
    }

    return { positions, sizes, colorAttr, drifts }
  }, [count, spread, size, colors])

  useFrame((state, delta) => {
    const points = pointsRef.current
    if (!points) return

    const pos = points.geometry.attributes.position as THREE.BufferAttribute
    const arr = pos.array as Float32Array
    const t = state.clock.elapsedTime

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      arr[i3 + 0] += drifts[i3 + 0] * delta * speed + Math.sin(t * 0.3 + i) * 0.0015
      arr[i3 + 1] += drifts[i3 + 1] * delta * speed
      arr[i3 + 2] += drifts[i3 + 2] * delta * speed

      if (arr[i3 + 1] > spread / 2) {
        arr[i3 + 1] = -spread / 2
        arr[i3 + 0] = (Math.random() - 0.5) * spread
      }
    }

    pos.needsUpdate = true

    points.rotation.y = THREE.MathUtils.lerp(points.rotation.y, mouse.current.x * 0.15, 0.04)
    points.rotation.x = THREE.MathUtils.lerp(points.rotation.x, mouse.current.y * 0.1, 0.04)
  })

  return (
    <points
      ref={pointsRef}
      onPointerMove={(e) => {
        mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
        mouse.current.y = -((e.clientY / window.innerHeight) * 2 - 1)
      }}
    >
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
        <bufferAttribute attach="attributes-color" args={[colorAttr, 3]} />
      </bufferGeometry>
      <shaderMaterial
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexColors
        uniforms={{ uPixelRatio: { value: typeof window !== "undefined" ? window.devicePixelRatio : 1 } }}
        vertexShader={`
          attribute float size;
          varying vec3 vColor;
          uniform float uPixelRatio;
          void main() {
            vColor = color;
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = size * uPixelRatio * (180.0 / -mv.z);
            gl_Position = projectionMatrix * mv;
          }
        `}
        fragmentShader={`
          varying vec3 vColor;
          void main() {
            vec2 c = gl_PointCoord - vec2(0.5);
            float d = length(c);
            float a = smoothstep(0.5, 0.0, d);
            a = pow(a, 2.2);
            gl_FragColor = vec4(vColor, a * 0.6);
          }
        `}
      />
    </points>
  )
}

type AmbientParticlesProps = {
  className?: string
  count?: number
  spread?: number
  size?: number
  speed?: number
  colors?: ReadonlyArray<string>
}

export function AmbientParticles({
  className,
  count = 80,
  spread = 24,
  size = 14,
  speed = 1,
  colors = ["#FFFFFF", "#F7F6F2", "#D8DED5", "#A8BCA1"],
}: AmbientParticlesProps) {
  return (
    <div className={className} aria-hidden="true">
      <Canvas
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
        camera={{ position: [0, 0, 12], fov: 55 }}
        dpr={[1, 1.5]}
      >
        <ParticleField count={count} spread={spread} size={size} colors={colors} speed={speed} />
      </Canvas>
    </div>
  )
}
