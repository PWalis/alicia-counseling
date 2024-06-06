"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import useWindowDimensions from "@/lib/UseWindowDimensions";
import clsx from "clsx";
import { SwipeableQuote } from "./SwipeQuote";

const DRAG_BUFFER = 50;

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

  const onDragEnd = () => {
    let x = dragX.get();
    if (x <= -DRAG_BUFFER) {
      handleNext();
    } else if (x >= DRAG_BUFFER) {
      handlePrevious();
    }
    dragX.set(0);
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
      className="h-[200px] grid grid-cols-4 grid-rows-2 sm:grid-rows-1 sm:grid-cols-12 sm:flex-row sm:justify-between items-center max-w-7xl w-full"
    >
      <button
        className="hidden sm:block z-10 mx-auto col-start-2 w-fit sm:translate-x-0 row-start-2 sm:row-start-1 sm:col-start-1 hover:scale-105 active:scale-95"
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
      <div className="h-full row-start-1 col-start-1 col-end-5 sm:col-start-2 sm:col-end-12 px-8 flex items-center justify-center w-full overflow-hidden">
        <ul className="h-52 relative flex flex-row w-full justify-center">
          {quotes.map((quote, index) => {
            return (
              <SwipeableQuote
                handleNext={handleNext}
                handlePrevious={handlePrevious}
                index={index}
                isSmallScreen={isSmallScreen}
                currentIndex={currentIndex}
                quotesLength={quotes.length}
                quote={quote}
                variants={variants}
              />
            );
          })}
        </ul>
      </div>
      <button
        className="hidden sm:block z-10 mx-auto w-fit col-start-3 sm:-translate-x-0 row-start-2 sm:row-start-1 sm:col-start-12 hover:scale-105 active:scale-95"
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
