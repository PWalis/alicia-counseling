"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import useWindowDimensions from "@/lib/UseWindowDimensions";
import clsx from "clsx";

const DRAG_BUFFER = 10;

export function Quotes() {
  const { width } = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const dragX = useMotionValue(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const startAnimation = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const isSmallScreen = width <= 640 ? true : false;
  const quotes = [
    ["What IF I don’t what IF today?", "Alicia Wimsatt"],
    [
      "My job as your therapist is to work myself out of a job, when therapists are no longer needed. Could you imagine a world where mental health is acknowledged,societal expectations are not generalized, there is no longer a negative stigma, and you come equipped with the tools and skills you need to take on those challenges? Imagine that world and fight for it!",
      "Alicia Wimsatt",
    ],
    [
      "Let go of who you think you’re supposed to be; embrace who you are.",
      "Brene Brown",
    ],
    [
      "Being comfortable in a state of struggle can often times feel easier than the fight to emotional freedom.",
      "Alicia Wimsatt",
    ],
    [
      "The word Normal is defined as conforming to a standard. Now, define YOUR NORMAL? There is no “Normal” when it comes to your trauma, your thoughts, your feelings, and your fears. Not a single person has lived it like you have lived it. Make your new standard and make your new NORMAL because you don’t have to sit where society expects you to be.",
      "Alicia Wimsatt",
    ],
    [
      "ADHD is not about knowing what to do, but about doing what one knows.",
      "Dr. Russell Barkley",
    ],
  ];

  const variants = {
    left: {
      opacity: 0,
      x: "-100%",
      transition: {
        delay: 0,
        duration: 0.2,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    active: {
      opacity: 1,
      x: "0%",
      transition: {
        delay: 0,
        duration: 0.2,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    right: {
      opacity: 0,
      x: "100%",
      transition: {
        delay: 0,
        duration: 0.2,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    initial: {
      opacity: 0,
      x: "0%",
      transition: {
        delay: 0.35,
        duration: 0.2,
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

  const onDragEnd = () => {
    let x = dragX.get();
    if (x <= -DRAG_BUFFER) {
      handleNext();
    } else if (x >= DRAG_BUFFER) {
      handlePrevious();
    }
    dragX.set(0);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (startAnimation.get() > 0) {
  //       handleNext();
  //     }
  //   }, 6000);
  //   return () => clearInterval(interval);
  // }, [currentIndex, startAnimation]);

  return (
    <section
      ref={ref}
      className="flex h-[850px] md:h-[700px] lg:h-[500px] flex-row sm:flex-row sm:justify-between items-center max-w-7xl w-full overflow-hidden"
    >
      <button
        className="hidden sm:block z-10 mx-auto col-start-2 w-fit row-start-2 hover:scale-105 active:scale-95"
        onClick={handlePrevious}
      >
        <svg
          width="100px"
          height="100px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z"
              fill="#242424"
            ></path>
          </g>
        </svg>
      </button>
      <div className="h-full flex w-full px-10">
        <motion.ul
          drag={isSmallScreen ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={onDragEnd}
          style={{ x: dragX }}
          className="relative flex flex-row w-full justify-center overflow-visible"
        >
          {quotes.map((quote, index) => {
            return (
              <motion.li
                key={index}
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
                  "absolute w-full h-full top-0 m-auto text-left text-3xl lg:text-4xl",
                  currentIndex === index ? "active" : ""
                )}
              >
                <div className="flex h-full flex-row justify-center items-center">
                  <p className="relative">
                    <span className="absolute -top-3 -left-7 sm:-left-10 text-6xl text-pink-600">
                      "
                    </span>
                    {quote[0]}
                    <span className="absolute right-0 sm:-right-7 -bottom-10 text-6xl text-pink-600">
                      "
                    </span>
                    <span className="absolute -bottom-10 -right-7 text-sm text-right">
                      - {quote[1]}
                    </span>
                  </p>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
      <button
        className="hidden sm:block z-10 mx-auto w-fit hover:scale-105 active:scale-95"
        onClick={handleNext}
      >
        <svg
          width="100px"
          height="100px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z"
              fill="#242424"
            ></path>
          </g>
        </svg>
      </button>
    </section>
  );
}
