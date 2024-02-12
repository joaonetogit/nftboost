import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { patternAnimationTo } from "@/lib/utils";

const useFaq = () => {
  const faqRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      faqRef.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        y: 0,
        ...patternAnimationTo,
        scrollTrigger: {
          trigger: faqRef.current,
          start: "top-=300 center",
        },
      },
    );
  }, []);

  return {
    faqRef,
  };
};

export default useFaq;
