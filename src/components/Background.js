import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import WAVES from "vanta/src/vanta.rings";

export const MyComponent = () => {
  const myRef = useRef(null);
  let ringsEffect = null; // initialize the variable

  const setBackgroundOnMobile = () => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
      myRef.current.style.backgroundColor = "#80809";
    }
  };

  useEffect(() => {
    if (myRef.current && !ringsEffect) {
      ringsEffect = WAVES({
        THREE,
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 670.50,
        minWidth: 200.00,
        maxWidth: 'none',
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x80809,
        color: 0x666b66,
        flex: 1.00
      })
    }

    setBackgroundOnMobile();
      window.addEventListener("resize", setBackgroundOnMobile);

    return () => {
      ringsEffect.destroy()
      window.removeEventListener("resize", setBackgroundOnMobile)
    }
  }, [])


  return <div ref={myRef}></div>
}