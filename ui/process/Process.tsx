"use client";
import react, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function Process() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isSmallScreen = windowWidth < 768;

  return (
    <section className="w-screen pt-16">
      <h2 className="text-xl font-semibold text-center">How to set an Appointment</h2>
      <p className="text-center px-3">
        I know how difficult it can be to ask for help. I'm here to make the
        process easy
      </p>
      <div className="overflow-hidden pb-5">
      <motion.div
        drag={isSmallScreen ? "x" : false}
        dragConstraints={{
          left: -330,
          right: 330,
        }}
        animate={{
          x: isSmallScreen ? "85%" : "0%",
        }}
        className="flex flex-row gap-3 sm:gap-12 justify-center items-center py-10"
      >
        <div className="shrink-0 shadow-[0_20px_#FFEC8D] sm:shadow-[-14px_14px_#FFEC8D] pt-5 pb-3 px-2 border border-gray-400 h-[382px] rounded-[20px] max-w-[320px] sm:max-w-72 flex flex-col justify-center items-center">
          <Image
            alt="schedule"
            src="https://placehold.co/100x100/png"
            width={100}
            height={100}
          />
          <p className="text-xl font-semibold text-[#6373FF] text-center pt-5">
            Schedule A Consultation
          </p>
          <p className="text-center text-xl pt-5">
            Schedule your 15 minute consultation where we'll discuss your needs.
          </p>
          <p className="pt-10 text-xl">{"(903)999-9903"}</p>
        </div>
        <div className="shrink-0 shadow-[0_20px_#FFEC8D] sm:shadow-[-14px_14px_#FFEC8D] pt-5 pb-3 px-2 border border-gray-500 h-[382px] rounded-[20px] max-w-[320px] sm:max-w-72 flex flex-col justify-center items-center">
          <Image
            alt="schedule"
            src="https://placehold.co/100x100/png"
            width={100}
            height={100}
          />
          <p className="text-xl font-semibold text-[#6373FF] text-center pt-5">
            Sign into your Personal Portal
          </p>
          <p className="px-2 text-center text-xl pt-5">
            {"Do the boring paperwork you only have to do this once :)"}
          </p>
          <p className="pt-10 text-xl">View the Portal</p>
        </div>
        <div className="shrink-0 shadow-[0_20px_#FFEC8D] sm:shadow-[-14px_14px_#FFEC8D] pt-5 pb-3 px-2 border border-gray-500 h-[382px] rounded-[20px] max-w-[320px] sm:max-w-72 flex flex-col justify-center items-center">
          <Image
            alt="schedule"
            src="https://placehold.co/100x100/png"
            width={100}
            height={100}
          />
          <p className="text-xl font-semibold text-[#6373FF] text-center pt-5">
            Attend Your First Appointment
          </p>
          <p className="px-2 text-center text-xl pt-5">
            Take a seat on my comfy coach and let's get you taken care of.
          </p>
          <p className="pt-10 text-xl">View FAQ</p>
        </div>
      </motion.div>
      </div>
    </section>
  );
}
