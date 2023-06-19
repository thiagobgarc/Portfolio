import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import WAVES from "vanta/src/vanta.rings";

export const MyComponent = () => {
  const myRef = useRef(null);
  let ringsEffect = null; // initialize the variable

  useEffect(() => {
    if (myRef.current && !ringsEffect) {
      ringsEffect = WAVES({
        THREE,
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 550.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x2639cf,
        color: 0x3355c
      })
    }

    return () => {
        ringsEffect.destroy()
      };
    }, [])


  return <div ref={myRef}></div>
}