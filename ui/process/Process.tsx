"use client";
import react, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import fadebg from "@/public/images/fade-bg.png";

export function Process() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  const isSmallScreen = windowWidth < 964;

  return (
    <section className="flex fade-bg bg-cover bg-center pt-[15rem] pb-48 w-full gap-5 items-center flex-col">
      <div className="px-3 w-full max-w-7xl overflow-hidden">
        <h2 className="text-center sm:text-left text-5xl font-light tracking-wider mb-5 text-white">
          Setting your 
          <span className="font-bold"> Appointment</span>
        </h2>
      </div>
      <div className="flex flex-col px-3 items-center text-white">
        <h4 className="text-center text-xl font-semibold">
          I know how difficult it can be to ask for help.
        </h4>
        <p className="text-center text-xl">I'm here to make the process <span className="">easy </span> and <span className="">transparent.</span> </p>
      </div>
      <div className="overflow-hidden pb-5 max-w-5xl w-full">
        <motion.div
          drag={isSmallScreen ? "x" : false}
          dragConstraints={{
            left: -610,
            right: 10,
          }}
          // animate={{
          //   x: isSmallScreen ? -100 : 0
          // }}
          className="flex flex-row justify-between items-center gap-3 sm:gap-none py-5 px-5"
        >
          <div className="shrink-0 shadow-[0_20px_#FFEC8D] lg1/2:shadow-[-14px_14px_#FFEC8D] pt-5 pb-3 px-2 border bg-white border-gray-400 h-[382px] rounded-[20px] max-w-[320px] sm:max-w-72 flex flex-col justify-center items-center">
            <Image
              alt="schedule"
              src="https://placehold.co/100x100/png"
              width={100}
              height={100}
            />
            <p className="text-xl  text-[#66aeff] tracking-wider text-center pt-5 px-5">
              Schedule A Consultation
            </p>
            <p className="text-center text-xl pt-5">
              Schedule your 15 minute consultation where we'll discuss your
              needs.
            </p>
            <p className="pt-10 text-xl text-[#66aeff]">{"(903) 999-9903"}</p>
          </div>
          <div className="shrink-0 shadow-[0_20px_#FFEC8D] lg1/2:shadow-[-14px_14px_#FFEC8D] pt-5 pb-3 px-2 border bg-white border-gray-500 h-[382px] rounded-[20px] max-w-[320px] sm:max-w-72 flex flex-col justify-center items-center">
            <Image
              alt="schedule"
              src="https://placehold.co/100x100/png"
              width={100}
              height={100}
            />
            <p className="text-xl text-[#66aeff] text-center pt-5 px-10">
              Sign into your Personal Portal
            </p>
            <p className="px-2 text-center text-xl pt-5">
              {"Do the boring paperwork you only have to do this once :)"}
            </p>
            <p className="pt-10 text-xl text-[#66aeff]">View the Portal</p>
          </div>
          <div className="shrink-0 shadow-[0_20px_#FFEC8D] lg1/2:shadow-[-14px_14px_#FFEC8D] pt-5 pb-3 px-2 border bg-white border-gray-500 h-[382px] rounded-[20px] max-w-[320px] sm:max-w-72 flex flex-col justify-center items-center">
            <Image
              alt="schedule"
              src="https://placehold.co/100x100/png"
              width={100}
              height={100}
            />
            <p className="text-xl text-[#66aeff] text-center pt-5">
              Attend Your First Appointment
            </p>
            <p className="px-2 text-center text-xl pt-5">
              Take a seat on my comfy coach and let's get you taken care of.
            </p>
            <p className="pt-10 text-xl text-[#66aeff]">View FAQ</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
