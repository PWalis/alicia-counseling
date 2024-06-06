"use client";
import { useState } from "react";
import Image from "next/image";
import { Turn as Hamburger } from "hamburger-react";
import clsx from "clsx";
import { motion } from "framer-motion";
import useWindowDimensions from "@/lib/UseWindowDimensions";
import logo from "@/public/assets/logo.png";

export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { width } = useWindowDimensions();

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
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      y: "-100%",
      opacity: 0,
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };

  return (
    <header className="w-full flex-col flex items-center z-50 fixed top-2 px-2">
      <div className="w-full flex justify-center max-w-[96rem] h-24 bg-[#181818c7] backdrop-blur-[15px] text-white rounded-[20px] mx-3 relative ">
        <div className="w-full max-w-[45rem] flex items-center">
        <div className="h-16 w-16 bg-gray-100 rounded-full items-center flex justify-center text-black mr-3 ml-3">
              <Image alt="logo" src={logo} width={200} height={200}></Image>
            </div>
          <div className="flex flex-col">
            <p className="uppercase font-extrabold tracking-wider text-xl">
              Couch Talk
            </p>
            <p className="font-light tracking-wide text-md">
              Counseling and Coaching
            </p>
          </div>
        </div>
        <div className="w-full sm:max-w-[45rem] flex justify-end items-center max-w-[5rem]">
          <div className="lg1/2:hidden z-10 absolute pr-3">
            <Hamburger onToggle={handleToggle} toggled={menuIsOpen} />
          </div>
          <motion.div
            variants={mobileMenuVariant}
            initial="closed"
            animate={width >= 964 || menuIsOpen ? "opened" : "closed"}
            className={clsx(
              "h-[calc(110dvh)] w-[calc(111dvw)] absolute bg-[#181818] lg1/2:bg-transparent lg1/2:pr-5 lg1/2:flex lg1/2:h-auto lg1/2:w-auto lg1/2:top-auto",
              menuIsOpen ? "-top-3 -right-7 content-center" : "hidden"
            )}
          >
            <nav
              className={clsx(
                "sm:flex gap-4 uppercase font-light items-center tracking-wider",
                menuIsOpen ? "flex flex-col text-2xl lg1/2:flex-row items-center" : "hidden"
              )}
            >
              <a
                href="/"
                onClick={(e) => {
                  let aboutMe = document.getElementById("aboutMe");
                  e.preventDefault();
                  setMenuIsOpen(false);
                  aboutMe &&
                    aboutMe.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }}
              >
                About Me
              </a>
              <a
                href="/"
                className=""
                onClick={(e) => {
                  let services = document.getElementById("services");
                  e.preventDefault();
                  setMenuIsOpen(false);
                  services &&
                    services.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }}
              >
                Services
              </a>
              <a
                href="/"
                onClick={(e) => {
                  let pricing = document.getElementById("pricing");
                  e.preventDefault();
                  setMenuIsOpen(false);
                  pricing &&
                    pricing.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }}
              >
                Pricing
              </a>
              <a
                href="/"
                onClick={(e) => {
                  let faq = document.getElementById("faq");
                  e.preventDefault();
                  setMenuIsOpen(false);
                  faq &&
                    faq.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }}
              >
                FAQ
              </a>
              <a
                href="/"
                onClick={(e) => {
                  let contact = document.getElementById("contact");
                  e.preventDefault();
                  setMenuIsOpen(false);
                  contact &&
                    contact.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }}
                className="btn-grad3 rounded-[15px] px-4 py-3 text-black uppercase font-medium"
              >
                Get in Touch
              </a>
            </nav>
          </motion.div>
        </div>
      </div>
    </header>
  );
};
