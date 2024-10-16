"use client"
import React from "react"
import { Canvas } from "@react-three/fiber"
import { Box } from "@react-three/drei"

export function SunCanvas() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Box position={[0, 0, 0]} args={[1, 1, 1]}>
        <meshStandardMaterial color="orange" />
      </Box>
    </Canvas>
  )
}
