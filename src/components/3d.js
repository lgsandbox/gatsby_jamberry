import ReactDOM from 'react-dom'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

export default function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(true)
  const [active, setActive] = useState(true)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  //useFrame((state, delta) => ( )
  
  // Return view, these are regular three.js elements expressed in JSX

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={.5}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'02ebef'} opacity={.9}/>
    </mesh>
  )
}

