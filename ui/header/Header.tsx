"use client";
import react, { useState } from "react";
import Image from "next/image";
import logo from "@/public/icons8-logo.svg";
import { Turn as Hamburger } from "hamburger-react";
import clsx from "clsx";
import { motion, useTransform } from "framer-motion";
import useWindowDimensions from "@/lib/UseWindowDimensions";

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
    <header className="w-full flex-col flex items-center z-50 fixed top-2">
      {/* <div className="pl-5 mb-2 h-5 w-full bg-white backdrop-blur-[15px] opacity-90 text-black flex items-center p-3 border-1 border-[#838383]">
        <p> In case of emergency please call 988</p>
      </div> */}
      <div className="w-full flex justify-center max-w-[100rem] h-24 bg-[#181818c7] backdrop-blur-[15px] text-white rounded-lg mx-3 relative ">
        <div className="w-full max-w-[45rem] flex  items-center">
          <Image alt="logo" src={logo} height={80} width={80} />
          <div className="flex flex-col">
            <p className="uppercase font-extrabold tracking-wider">
              Couch Talk
            </p>
            <p className="font-light tracking-wide text-sm">
              Counseling and Coaching
            </p>
          </div>
        </div>
        <div className="w-full sm:max-w-[45rem] flex justify-end items-center max-w-[5rem]">
          <div className="md:hidden z-10 absolute pr-3">
            <Hamburger onToggle={handleToggle} toggled={menuIsOpen} />
          </div>
          <motion.div
            variants={mobileMenuVariant}
            initial="closed"
            animate={width >= 768 || menuIsOpen ? "opened" : "closed"}
            className={clsx(
              "h-[calc(110dvh)] w-screen absolute bg-[#181818] md:bg-transparent md:pr-5 md:flex md:h-auto md:w-auto md:top-auto",
              menuIsOpen ? "-top-3 right-0 content-center" : "hidden"
            )}
          >
            <nav
              className={clsx(
                "sm:flex gap-4 uppercase font-light items-center tracking-wider",
                menuIsOpen ? "flex flex-col md:flex-row items-center" : "hidden"
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
                className="bg-white rounded-[15px] px-4 py-3 text-black uppercase font-medium"
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
