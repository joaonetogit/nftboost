import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { patternAnimationTo } from "@/lib/utils";

const useCardCollector = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        y: 0,
        ...patternAnimationTo,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top-=300 center",
        },
      },
    );
  }, []);

  return {
    cardRef,
  };
};

export default useCardCollector;
