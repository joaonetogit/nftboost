import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { patternAnimationTo } from "@/lib/utils";

const useTitleSection = () => {
  const titleSectionRef = useRef(null);

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
