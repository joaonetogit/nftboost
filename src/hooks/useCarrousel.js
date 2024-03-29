import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { patternAnimationTo } from "@/lib/utils";

const useCarrousel = () => {
  const carrouselRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      carrouselRef.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        y: 0,
        ...patternAnimationTo,
        scrollTrigger: {
          trigger: carrouselRef.current,
          start: "top-=300 center",
        },
      }
    );
  }, []);

  return {
    carrouselRef,
  };
};

export default useCarrousel;
