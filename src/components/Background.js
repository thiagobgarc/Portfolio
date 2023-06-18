import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import WAVES from "vanta/src/vanta.waves";

export const MyComponent = () => {
  const myRef = useRef(null);
  let wavesEffect = null; // initialize the variable

  useEffect(() => {
    if (myRef.current && !wavesEffect) {
      wavesEffect = WAVES({
        THREE,
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 698.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x8fa3b1,
        shininess: 51.00
      })
    }

    return () => {
        wavesEffect.destroy()
      };
    }, [])


  return <div ref={myRef}></div>
}