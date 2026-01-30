"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { BsStars } from "react-icons/bs";
import Image from "next/image";
import { InView } from "react-intersection-observer";

const HeroContent = () => {
  return (
    <InView triggerOnce={false}>
      {({ inView, ref }) => (
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex md:flex-row flex-col-reverse items-center justify-center gap-10 md:gap-0 md:px-20 px-5 mt-40 w-full z-20"
        >
          {/* LEFT CONTENT */}
          <div className="h-full w-full md:w-3/6 flex flex-col gap-5 justify-center text-start">

          

            {/* MAIN HEADING */}
            <InView triggerOnce={false}>
              {({ inView, ref }) => (
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={slideInFromLeft(0.5)}
                  className="flex flex-col gap-3 mt-6 md:text-5xl text-4xl font-bold text-white max-w-[650px]"
                >
                  <span className="text-gray-400">Hi, I'm</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-5xl md:text-6xl font-black">
                    Praveen Kumar
                  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-2xl md:text-3xl font-semibold">
                    AI/ML Engineer
                  </span>
                  <span className="text-xl md:text-2xl font-semibold text-gray-300 mt-2">
                    Building intelligent systems for real-world impact
                  </span>
                </motion.div>
              )}
            </InView>

            {/* DESCRIPTION */}
            <InView triggerOnce={false}>
              {({ inView, ref }) => (
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={slideInFromLeft(0.8)}
                  className="text-sm md:text-md text-gray-400 my-5 max-w-[650px] space-y-4"
                >
                  <p>
                    I design, train, and deploy machine learning solutions across computer vision,
                    NLP, and MLOps with a focus on performance, reliability, and scalability.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["Computer Vision", "NLP", "MLOps", "Deep Learning", "Model Deployment"].map(
                      (item) => (
                        <span
                          key={item}
                          className="px-3 py-1 text-xs md:text-sm rounded-full border border-cyan-500/30 text-cyan-200 bg-cyan-500/10"
                        >
                          {item}
                        </span>
                      )
                    )}
                  </div>
                </motion.div>
              )}
            </InView>

            {/* CTA */}
            <InView triggerOnce={false}>
              {({ inView, ref }) => (
                <motion.a
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  href="#projects"
                  variants={slideInFromLeft(1)}
                  className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                >
                  View My Work 🚀
                </motion.a>
              )}
            </InView>
          </div>

          {/* RIGHT VISUAL - Anime Engineer Illustration */}
          <InView triggerOnce={false}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={slideInFromRight(0.8)}
                className="w-full md:w-3/6 h-full flex justify-center items-center"
              >
                <div className="relative w-[520px] h-[520px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/25 via-transparent to-cyan-500/25 rounded-3xl blur-3xl" />
                  <div className="relative w-[440px] h-[440px] rounded-3xl border border-cyan-500/20 bg-[#0b0718]/40 backdrop-blur-sm shadow-2xl shadow-cyan-500/20 overflow-hidden">
                    <div className="absolute inset-0 animate-shimmer opacity-40" />
                    <Image
                      src="/hero-engineer.svg"
                      alt="Anime professional engineer illustration"
                      width={520}
                      height={520}
                      className="w-full h-full object-contain drop-shadow-glow"
                      priority
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </InView>
        </motion.div>
      )}
    </InView>
  );
};

export default HeroContent;
