"use client";

import { FC, useRef, useState } from "react";
import image1 from "@/assets/images/testimonial-1.jpg";
import image2 from "@/assets/images/testimonial-2.jpg";
import image3 from "@/assets/images/testimonial-3.jpg";
import { useScroll, motion, useTransform, AnimatePresence } from "motion/react";
import Testimonial from "@/components/Testimonial";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const testimonials = [
  {
    name: "Eng Mutsa Makotamo",
    company: "SecureTech Solutions", 
    role: "Head of Tech",
    quote:
      "Alec's expertise saved us from a major breach. Highly recommend for proactive security solutions!",
    image: image1,
    imagePositionY: 0.2,
  },
  {
    name: "Dr. Clivert Chikafu",
    company: "DataShield Inc.",
    role: "CEO",
    quote:
      "Alec's incredible work securing our systems! Our data is safer than ever thanks to his skills.",
    image: image2,
    imagePositionY: 0.1,
  },
  {
    name: "Dr. Tatenda",
    company: "ZChPC CyberFort Enterprises",
    role: "IT Manager",
    quote:
      "Quick, efficient, and professional—identified vulnerabilities we never noticed. A true cybersecurity expert!",
    image: image3,
    imagePositionY: 0.55,
  },
];

const Testimonials: FC = () => {
  const titleRef = useRef(null);
  const { scrollYProgress} = useScroll({
    target: titleRef,
    offset: ['start end', 'end start'],
  });

  const transformTop = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const transformBottom = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);

  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const handleClickPrev = () => {
    setTestimonialIndex(curr => {
      if (curr === 0) {
        return testimonials.length - 1;
      }
      return curr -1;
    });
  };


  const handleClickNext = () => {
    setTestimonialIndex(curr => {
      if (curr === testimonials.length - 1) return 0;
      return curr + 1;
    });
  };



  return (
  <section className="section" id="testimonials">
    <h2 className="text-4xl md:text-7xl lg:text-8xl flex flex-col overflow-hidden tracking-tighter" ref={titleRef}>
      <motion.span className="whitespace-nowrap" style={{
        x: transformTop,
      }}>
        Some nice words from my past clients
        </motion.span>
      <motion.span className="whitespace-nowrap self-end text-red-orange-500"
      style={{
        x: transformBottom,
      }}
      >
        Some nice words from my past clients
      </motion.span>
    </h2>
    <div className="container">
      <div className="mt-20">
        <AnimatePresence mode="wait" initial={false}>
        {testimonials.map(
          ({name, company, role, quote, image, imagePositionY}, index) => index===
          testimonialIndex && 
          (
            <Testimonial 
            name={name} 
            company={company} 
            role={role} 
            quote={quote} 
            image={image} 
            imagePositionY={imagePositionY} 
            key={name}  
          />
        )
        )}
        </AnimatePresence>
      </div>
      <div className="flex gap-4 mt-6 lg:mt-10">
        <button className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full hover:bg-red-orange-500 hover:text-white hover:border-red-orange-500 transition-all duration-300" onClick={handleClickPrev}>
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none"
        viewBox="0 0 24 24" 
        strokeWidth="1.5" 
        stroke="currentColor" 
        className="size-6">
        <path strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>

        </button>
        <button className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full hover:bg-red-orange-500 hover:text-white hover:border-red-orange-500 transition-all duration-300" onClick={handleClickNext}>
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth="1.5" 
        stroke="currentColor" 
        className="size-6">
        <path strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>

        </button>
      </div>
    </div>
  </section>
  );
};

export default Testimonials;
