"use client";
import react, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import clsx from "clsx";
import useWindowDimensions from "@/lib/UseWindowDimensions";

export function Quotes() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const startAnimation = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const { height } = useWindowDimensions();
  const quotes = [
    "One day, or day one",
    "Just do it",
    "I'm lovin it",
    "LETS GO BABY!!!!",
    "Lorem ipsum dolor, sit amet consectetur.",
  ];

  const variants = {
    left: {
      opacity: 0,
      x: "-100%",
      transition: {
        delay: 0.25,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    active: {
      opacity: 1,
      x: "0%",
      transition: {
        delay: 0.25,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    right: {
      opacity: 0,
      x: "100%",
      transition: {
        delay: 0.25,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    initial: {
      opacity: 0,
      x: "0%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === quotes.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? quotes.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (startAnimation.get() > 0) {
        handleNext();
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, startAnimation]);

  return (
    <section
      ref={ref}
      className="h-[400px] grid grid-cols-4 grid-rows-2 sm:grid-rows-1 sm:grid-cols-12 sm:flex-row sm:justify-between items-center max-w-7xl w-full"
    >
      <button className="z-10 mx-auto col-start-2 w-fit sm:translate-x-0 row-start-2 sm:row-start-1 sm:col-start-1" onClick={handlePrevious}>
        Left
      </button>
      <div className="h-full row-start-1 col-start-1 col-end-5 sm:col-start-2 sm:col-end-12 px-8 flex items-center justify-center w-full overflow-hidden">
        <ul className="h-52 relative flex flex-row w-full justify-center">
          {quotes.map((quote, index) => {
            return (
              <motion.li
                initial={"initial"}
                animate={
                  currentIndex === index
                    ? "active"
                    : (currentIndex > index &&
                        currentIndex - index !== quotes.length - 1) ||
                      index - currentIndex === quotes.length - 1
                    ? "left"
                    : "right"
                }
                variants={variants}
                className={clsx(
                  "absolute w-fit top-12 m-auto text-center text-4xl",
                  currentIndex === index ? "active" : ""
                )}
              >
                <div className="relative flex flex-row justify-center items-center">
                  <span className="absolute -top-3 -left-6 text-6xl text-pink-600">"</span>
                  {quote}
                  <span className="absolute -right-7 -bottom-10 text-6xl text-pink-600">
                    "
                  </span>
                  <p className="absolute -bottom-6 -right-7 text-sm text-right">
                    - Alicia Wimsatt
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
      <button className="z-10 mx-auto w-fit col-start-3 sm:-translate-x-0 row-start-2 sm:row-start-1 sm:col-start-12" onClick={handleNext}>
        Right
      </button>
    </section>
  );
}
