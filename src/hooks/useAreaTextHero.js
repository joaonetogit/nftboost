import { useEffect, useRef } from "react";
import gsap from "gsap";
import { patternAnimationTo } from "@/lib/utils";

const useAreaTextHero = () => {
  const areaTextRef = useRef(null);
  const googleRef = useRef(null);
  const appleRef = useRef(null);
  const imageCircleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      areaTextRef.current,
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
        googleRef.current,
        {
          opacity: 0,
          x: -100,
        },
        {
          x: 0,
          ...patternAnimationTo,
        },
        "-=1",
      )
      .fromTo(
        appleRef.current,
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
        imageCircleRef.current,
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
    imageCircleRef,
  };
};

export default useAreaTextHero;
