/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'

const Backdrop = () => {
    const shadows = useRef()

  return (
    <AccumulativeShadows
        ref={shadows}
        temporal
        frames={60}
        alphaTest={0.15}
        scale={10}
        rotation={[Math.PI/2, 0, 0]}
        position={[0, 0, -0.14]}
    >
        <RandomizedLight 
            amount={4}
            radius={5}
            intensity={0.20}
            ambient={0.90}
            position={[5, 5, 5]}
        />
         <RandomizedLight 
            amount={4}
            radius={2}
            intensity={0.30}
            ambient={0.80}
            position={[-5, 5, -10 ]}
        />
    </AccumulativeShadows>
  )
}

export default Backdrop