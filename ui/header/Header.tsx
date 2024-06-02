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
    <header className="w-full fixed top-0 z-50">
      <div className="pl-5 mb-2 h-5 w-full bg-slate-700 text-white flex items-center">
        In case of emergency please call 988
      </div>
      <div className="h-20 bg-zinc-700 rounded-lg mx-2 flex justify-between relative">
        <div className="flex justify-start items-center">
          <Image alt="logo" src={logo} height={80} width={80} />
          <p>Alicia's Counseling</p>
        </div>
        <div className="flex justify-end items-center">
          <div className="sm:hidden z-10 absolute">
            <Hamburger onToggle={handleToggle} />
          </div>
          <motion.div variants={mobileMenuVariant} initial="closed" animate={width >= 640 || menuIsOpen ? "opened" : "closed"} className={clsx("h-[calc(100dvh)] w-screen top-0 -right-2 absolute bg-zinc-500 sm:bg-transparent sm:pr-5 sm:flex sm:h-auto sm:w-auto sm:top-auto", menuIsOpen ? "content-center" : "hidden")}>
            <nav
              className={clsx("sm:flex gap-4", menuIsOpen ? "flex flex-col sm:flex-row items-center" : "hidden")}
            >
              <a>section</a>
              <a>section</a>
              <a>section</a>
            </nav>
          </motion.div>
        </div>
      </div>
    </header>
  );
};
