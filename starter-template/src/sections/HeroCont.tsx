'use client';

//import Button2 from "@/components/Button2";
import designExample1Image from '@/assets/images/design-example-1.png';
import designExample2Image from '@/assets/images/design-example-2.png';
import Image from "next/image";
import Pointer from "@/components/Pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import cursorYouImage from "@/assets/images/cursor-you.svg";

export default function Heroo() {
    const [leftDesignScope, leftDesignAnimate] = useAnimate();
    const [leftPointerScope, leftPointerAnimate] = useAnimate();
    const [rightDesignScope, rightDesignAnimate] = useAnimate();
    const [rightPointerScope, rightPointerAnimate] = useAnimate();

    useEffect(() => {
        if (leftDesignScope.current) {
            leftDesignAnimate([
                [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
                [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }]
            ]);

            leftPointerAnimate([
                [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
                [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
                [
                    leftPointerScope.current,
                    { x: 0, y: [0, 16, 0] },
                    { duration: 0.5, ease: 'easeInOut' }
                ]
            ]);
        }

        if (rightDesignScope.current) {
            rightDesignAnimate([
                [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
                [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }]
            ]);

            rightPointerAnimate([
                [
                    rightPointerScope.current, 
                    {opacity: 1}, 
                    {duration: 0.5, delay: 1.5},
                ],
                [
                    rightPointerScope.current, {x:175, y: 0}, {duration: 0.5}
                ],
                [rightPointerScope.current, {x:0, y: [0, 20, 0]}, {duration: 0.5},
            ],
            ]);
        };
    }, []);  

    return (
        <section className="py-24 overflow-x-clip" style={{
            cursor: `url(${cursorYouImage.src}), auto`,
        }}>
            <div className="container relative">
                {/* Left Design Image */}
                <motion.div
                    ref={leftDesignScope}
                    initial={{ opacity: 0, y: 100, x: -100 }}
                    drag
                    className="absolute -left-32 top-16 hidden lg:block"
                >
                    <Image src={designExample1Image} 
                    alt="Design example 1 image" 
                    draggable="false"
                    />
                </motion.div>

                {/* Left Pointer */}
                <motion.div
                    ref={leftPointerScope}
                    initial={{ opacity: 0, y: 100, x: -200 }}
                    className="absolute left-56 top-96 hidden lg:block"
                >
                    <Pointer name="C.Alec" />
                </motion.div>

                {/* Right Design Image */}
                <motion.div 
                    ref={rightDesignScope}
                    initial={{ opacity: 0, x: 100, y: 100 }}
                    drag
                    className="absolute -right-64 -top-16 hidden lg:block"
                >
                    <Image src={designExample2Image} 
                    alt="Design example 2 image" 
                    draggable="false"
                    />
                </motion.div>

                {/* Right Pointer */}
                <motion.div ref={rightPointerScope}
                initial={{ opacity: 0, y: 100, x: 275 }}
                className="absolute right-80 -top-4 hidden lg:block">
                    <Pointer name="ZCHPC" color="red" />
                </motion.div>

                {/* Hero Content */}
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full text-neutral-950 font-semibold">
                        
C.Alec | CYBERSECURITY| ZIMBABWE
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
                Secure your business. Partner with Carlos Alec
                </h1>
                <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                Connect your security to RoyallNorr and set up your business to save for finance and reduce risks. Your platforms will securely flow straight into the realm of confidentiality.
                </p>

                {/* Email Signup Form */}
                <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
              
              
                </form>
            </div>
        </section>
    );
}
