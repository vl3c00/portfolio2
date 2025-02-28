"use client";

import Tag from "@/components/Tag";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `watching, RoyallNorr is my fashion brand that offers classic formal outfits. We specialise in creating high quality clothing.`;
const words = text.split(" ");

export default function Introduction() {
  const scrollTarget = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });

  const [currentWord, setCurrentWord] = useState(0);
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    wordIndex.on("change", (latest) => {
      setCurrentWord(latest);
    });
  }, [wordIndex]);

  return (
    <section className="relative h-[100vh] flex flex-col justify-center">
      <div className="container">
        <div className="sticky top-20 md:top-28 lg:top-40">
          <div className="flex justify-center">
            <Tag>Introducing ROyallNorr</Tag>
          </div>
          <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
            <span>Spend less time Fashion</span>{" "}
            <span>
              {words.map((word, index) => (
                <span
                  key={index}
                  className={twMerge(
                    "transition duration-500 text-white/15",
                    index < currentWord && "text-white"
                  )}
                >
                  {`${word} `}
                </span>
              ))}
            </span>
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 block bg-clip-text text-transparent">
            designed for personalized service.
            </span>
          </div>
        </div>
      </div>
      <div className="h-[80vh]" ref={scrollTarget}></div>
    </section>
  );
}
