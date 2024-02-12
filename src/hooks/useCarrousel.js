import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const useCarrousel = () => {
  const carrouselRef = useRef(null);
  const patternAnimationTo = {
    opacity: 1,
    duration: 1,
    ease: "power3.out",
  };

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
