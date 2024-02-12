import { useEffect, useRef } from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { patternAnimationTo } from "@/lib/utils";

const useCardsHero = () => {
  const areaCards = useRef(null);
  const imageLeft = useRef(null);
  const imageRight = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: areaCards.current,
        start: "-=50% center",
        end: "bottom center",
        scrub: true,
      },
    });

    tl.to(
      imageLeft.current,
      {
        left: 0,
        ...patternAnimationTo,
      },
      0,
    ).to(
      imageRight.current,
      {
        right: 0,
        ...patternAnimationTo,
      },
      0,
    );
  }, []);

  return {
    areaCards,
    imageLeft,
    imageRight,
  };
};

export default useCardsHero;
