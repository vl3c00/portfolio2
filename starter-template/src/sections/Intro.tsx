"use client";

import {  useInView } from "motion/react";
import { FC, useEffect, useRef } from "react";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";

const Intro: FC = () => {

  const sectionRef = useRef<HTMLElement>(null);
  const {scope, entranceAnimation} = useTextRevealAnimation();
  const inView = useInView(scope, {
    once: true,
  });

  useEffect(() => {
    if (inView) {
      entranceAnimation();
    }
  }, [inView, entranceAnimation]);

  return (
  <section className="section mt-12 md:mt-16 lg:mt-20" id="intro" ref={sectionRef}>
    <div className="container">
      <h2 className="text-4xl md:text-7xl lg:text-8xl lg:w-[80%]" ref={scope}>
        From becoming the CEO of   <a
    href="https://trcbudg8.zchpc.ac.zw/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-orange-500 hover:underline"
  >
    trcBudg8
  </a>, this portfolio highlights the owner&apos;s innovations. 
      </h2>
    </div>
  </section>
  );
};

export default Intro; 
