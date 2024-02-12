import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const useTitleSection = () => {
  const titleSectionRef = useRef(null);
  const patternAnimationTo = {
    opacity: 1,
    duration: 1,
    ease: "power3.out",
  };

  useEffect(() => {
    gsap.fromTo(
      titleSectionRef.current,
      {
        opacity: 0,
        x: 100,
      },
      {
        x: 0,
        ...patternAnimationTo,
        scrollTrigger: {
          trigger: titleSectionRef.current,
          start: "top-=300 center",
        },
      },
    );
  }, []);

  return {
    titleSectionRef,
  };
};

export default useTitleSection;
