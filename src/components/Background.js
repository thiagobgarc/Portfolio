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
        minHeight: 670.50,
        maxHeight: 1000.00,
        minWidth: 200.00,
        maxWidth: 'none',
        scale: 1.00,
        scaleMobile: 13.00,
        backgroundColor: 0x80809,
        color: 0x666b66,
      })
    }

    return () => {
        ringsEffect.destroy()
      };
    }, [])


  return <div ref={myRef}></div>
}