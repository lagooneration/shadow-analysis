"use client"
import React from "react"
import { Canvas } from "@react-three/fiber"
import { Box } from "@react-three/drei"
import { useControls } from "leva"
import { OrbitControls } from "@react-three/drei"
import { location1 } from "@/utils/index"
import TestGeo from "@/components/test-geo"


export function SunCanvas() {




    const color = useControls({
        value: '#84daff',
      })
      const bg = useControls({
        bg: '#0a0c17',
      })

  return (
    <Canvas shadows>
        <color attach="background" args={[bg.bg]} />
        <OrbitControls />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Box position={[0, 0, 0]} args={[1, 1, 1]}>
        <meshBasicMaterial color={color.value} />
      </Box>
      <TestGeo texturePath="/assets/location1.png" position={[0, 0, -0.5]} />
    </Canvas>
  )
}
