"use client";
import react, { useState } from "react";
import Image from "next/image";
import logo from "@/public/icons8-logo.svg";
import { Turn as Hamburger } from "hamburger-react";
import clsx from "clsx";
import { motion, useTransform } from "framer-motion";
import useWindowDimensions from "@/hooks/UseWindowDimensions";

export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { height, width } = useWindowDimensions();

  const handleToggle = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const mobileMenuVariant = {
    opened: {
      y: "0%",
      opacity: 1,
      transition: {
        delay: 0,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02]
      }
    },
    closed: {
      y: "-100%",
      opacity: 0,
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02]
      }
    }
  }

  return (
    <header className="w-full fixed top-2 z-50 drop-shadow-sm">
      {/* <div className="pl-5 mb-2 h-5 w-full bg-white opacity-80 text-black flex items-center p-3 border-1 border-[#838383]">
        <p> In case of emergency please call 988</p>
      </div> */}
      <div className="h-24 px-10 bg-[#181818] text-white rounded-lg mx-3 xl:mx-40 flex justify-between relative drop-shadow-sm navblur">
        <div className="flex justify-start items-center">
          <Image alt="logo" src={logo} height={80} width={80} />
          <div className="flex flex-col">
          <p className="uppercase font-extrabold tracking-wider">Couch Talk</p>
          <p className="font-light tracking-wide text-sm"> Counseling and Coaching </p>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <div className="sm:hidden z-10 absolute">
            <Hamburger onToggle={handleToggle} />
          </div>
          <motion.div variants={mobileMenuVariant} initial="closed" animate={width >= 640 || menuIsOpen ? "opened" : "closed"} className={clsx("h-[calc(100dvh)] w-screen top-0 absolute bg-zinc-500 sm:bg-transparent sm:pr-5 sm:flex sm:h-auto sm:w-auto sm:top-auto", menuIsOpen ? "content-center" : "hidden")}>
            <nav
              className={clsx("sm:flex gap-4 uppercase font-light items-center tracking-wider", menuIsOpen ? "flex flex-col sm:flex-row items-center" : "hidden")}
            >
              <a>Section</a>
              <a>Section</a>
              <a>Section</a>
            </nav>
          </motion.div>
          <button className="bg-white rounded-[15px] px-4 py-3 text-black uppercase font-medium"> Get in Touch </button>
        </div>
      </div>
    </header>
  );
};
