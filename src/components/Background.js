import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import WAVES from "vanta/src/vanta.net";

export const MyComponent = () => {
  const myRef = useRef(null);
  let netEffect = null; // initialize the variable

  useEffect(() => {
    if (myRef.current && !netEffect) {
      netEffect = WAVES({
        THREE,
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 698.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x3fffff,
        backgroundColor: 0x17112d
      })
    }

    return () => {
        netEffect.destroy()
      };
    }, [])


  return <div ref={myRef}></div>
}