import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const useAreaTextHero = () => {
  const areaTextRef = useRef(null);
  const googleRef = useRef(null);
  const appleRef = useRef(null);
  const imageCircleRef = useRef(null);

  useEffect(() => {
    const areaTextRefCurrent = areaTextRef.current;
    const googleRefCurrent = googleRef.current;
    const appleRefCurrent = appleRef.current;
    const imageCircleRefCurrent = imageCircleRef.current;

    const tl = gsap.timeline();

    const patternAnimationTo = {
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    };

    tl.fromTo(
      areaTextRefCurrent,
      {
        opacity: 0,
        y: 100,
      },
      {
        y: 0,
        ...patternAnimationTo,
      },
      "init",
    )
      .fromTo(
        googleRefCurrent,
        {
          opacity: 0,
          x: -100,
        },
        {
          x: 0,
          ...patternAnimationTo,
        },
      )
      .fromTo(
        appleRefCurrent,
        {
          opacity: 0,
          x: 100,
        },
        {
          x: 0,
          ...patternAnimationTo,
        },
        "-=1",
      )
      .fromTo(
        imageCircleRefCurrent,
        {
          opacity: 0,
          xPercent: 90,
        },
        {
          xPercent: 0,
          ...patternAnimationTo,
        },
        "init+=0.7",
      );
  }, []);

  return {
    areaTextRef,
    googleRef,
    appleRef,
    imageCircleRef
  };
};

export default useAreaTextHero;
