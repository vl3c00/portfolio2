"use client";

import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CallToAction() {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const animation = useRef<AnimationPlaybackControls | null>(null);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animation.current = animate(scope.current, { x: "-50%" }, { duration: 30, ease: "linear", repeat: Infinity });
  }, [animate, scope]);

  useEffect(() => {
    if (animation.current) {
      animation.current.speed = isHovered ? 0.5 : 1;
    }
  }, [isHovered]);

  return (
    <section className="py-24">
      <div className="overflow-x-clip p-4 flex">
        <motion.div
          ref={scope}
          className="flex flex-none gap-16 pr-16 text-7xl md:text-8xl font-medium group cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="text-white group-hover:bg-gradient-to-r from-amber-400 to-orange-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                &#10038;
              </span>
              <span className="text-white group-hover:bg-gradient-to-r from-amber-400 to-orange-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                Carlos Alec
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
