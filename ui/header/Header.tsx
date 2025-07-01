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
    <header className="w-full flex-col flex items-center z-30 fixed top-2 px-2">
      <div className="w-full flex justify-center max-w-[96rem] h-24 bg-[#181818c7] backdrop-blur-[15px] text-white rounded-[20px] mx-3 relative ">
        <a
          href="/"
          onClick={(e) => {
            let home = document.getElementById("home");
            e.preventDefault();
            home && home.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="w-full max-w-[45rem] flex items-center"
        >
          <div className="h-16 w-16 bg-gray-100 rounded-full items-center flex justify-center text-black mr-3 ml-3">
            <Image alt="logo" src={logo} width={200} height={200}></Image>
          </div>
          <div className="flex flex-col">
            <p className="uppercase font-extrabold tracking-wider text-lg sm:text-xl">
              Couch Talk
            </p>
            <p className="font-light tracking-wide text-sm sm:text-md">
              Counseling and Coaching
            </p>
          </div>
        </a>
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
              menuIsOpen ? "lg1/2:top-auto lg1/2:right-auto -top-3 -right-7 lg1/2:pt-0 pt-[calc(15dvh)]" : "hidden"
            )}
          >
            <nav
              className={clsx(
                "sm:flex gap-4 uppercase font-light items-center tracking-wider",
                menuIsOpen
                  ? "flex flex-col lg1/2:text-base text-2xl lg1/2:flex-row items-center"
                  : "hidden"
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
                      block: "start",
                      behavior: "smooth",
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
                  let process = document.getElementById("process");
                  e.preventDefault();
                  setMenuIsOpen(false);
                  process &&
                    process.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }}
              >
                My Process
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
              <div className=" lg1/2:hidden flex flex-col lg:justify-center gap-5 text-sm mt-6 text-pink-300">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4.25 8.51464C4.25 4.45264 7.77146 1.25 12 1.25C16.2285 1.25 19.75 4.45264 19.75 8.51464C19.75 12.3258 17.3871 16.8 13.5748 18.4292C12.574 18.8569 11.426 18.8569 10.4252 18.4292C6.61289 16.8 4.25 12.3258 4.25 8.51464ZM12 2.75C8.49655 2.75 5.75 5.38076 5.75 8.51464C5.75 11.843 7.85543 15.6998 11.0147 17.0499C11.639 17.3167 12.361 17.3167 12.9853 17.0499C16.1446 15.6998 18.25 11.843 18.25 8.51464C18.25 5.38076 15.5034 2.75 12 2.75ZM12 7.75C11.3096 7.75 10.75 8.30964 10.75 9C10.75 9.69036 11.3096 10.25 12 10.25C12.6904 10.25 13.25 9.69036 13.25 9C13.25 8.30964 12.6904 7.75 12 7.75ZM9.25 9C9.25 7.48122 10.4812 6.25 12 6.25C13.5188 6.25 14.75 7.48122 14.75 9C14.75 10.5188 13.5188 11.75 12 11.75C10.4812 11.75 9.25 10.5188 9.25 9ZM3.59541 14.9966C3.87344 15.3036 3.84992 15.7779 3.54288 16.0559C2.97519 16.57 2.75 17.0621 2.75 17.5C2.75 18.2637 3.47401 19.2048 5.23671 19.998C6.929 20.7596 9.31951 21.25 12 21.25C14.6805 21.25 17.071 20.7596 18.7633 19.998C20.526 19.2048 21.25 18.2637 21.25 17.5C21.25 17.0621 21.0248 16.57 20.4571 16.0559C20.1501 15.7779 20.1266 15.3036 20.4046 14.9966C20.6826 14.6895 21.1569 14.666 21.4639 14.9441C22.227 15.635 22.75 16.5011 22.75 17.5C22.75 19.2216 21.2354 20.5305 19.3788 21.3659C17.4518 22.2331 14.8424 22.75 12 22.75C9.15764 22.75 6.54815 22.2331 4.62116 21.3659C2.76457 20.5305 1.25 19.2216 1.25 17.5C1.25 16.5011 1.77305 15.635 2.53605 14.9441C2.84309 14.666 3.31738 14.6895 3.59541 14.9966Z"
                          fill="#ffffff"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                  <a href="https://maps.app.goo.gl/PmBFxvqFiDuWAWXW8" target="_blank" className="w-[300px] text-center">117 W. Main Street, Decatur, Texas 76234 </a>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.00745 3.40686C7.68752 1.72679 10.5227 1.85451 11.6925 3.95063L12.3415 5.11356C13.1054 6.48238 12.7799 8.20946 11.6616 9.34143C11.6467 9.36184 11.5677 9.47677 11.5579 9.67758C11.5454 9.93391 11.6364 10.5267 12.5548 11.4451C13.4729 12.3632 14.0656 12.4545 14.3221 12.442C14.5231 12.4322 14.6381 12.3533 14.6585 12.3383C15.7905 11.2201 17.5176 10.8945 18.8864 11.6584L20.0493 12.3075C22.1454 13.4773 22.2731 16.3124 20.5931 17.9925C19.6944 18.8911 18.4995 19.6896 17.0953 19.7429C15.0144 19.8218 11.5591 19.2844 8.13735 15.8626C4.71556 12.4408 4.17818 8.98556 4.25706 6.90463C4.3103 5.50044 5.10879 4.30552 6.00745 3.40686ZM10.3827 4.68163C9.78363 3.60828 8.17394 3.36169 7.06811 4.46752C6.29276 5.24287 5.7887 6.09868 5.75599 6.96146C5.6902 8.6968 6.11864 11.7226 9.19801 14.8019C12.2774 17.8813 15.3031 18.3097 17.0385 18.2439C17.9013 18.2112 18.7571 17.7072 19.5324 16.9318C20.6382 15.826 20.3916 14.2163 19.3183 13.6173L18.1554 12.9683C17.432 12.5645 16.4158 12.7023 15.7025 13.4156L15.7023 13.4158C15.6322 13.4858 15.1864 13.9018 14.395 13.9403C13.5847 13.9797 12.604 13.6156 11.4942 12.5058C10.384 11.3956 10.02 10.4146 10.0597 9.60423C10.0985 8.81271 10.5147 8.36711 10.5843 8.29746L10.5844 8.29743C11.2977 7.58411 11.4354 6.56797 11.0317 5.84456L10.3827 4.68163Z"
                          fill="#ffffff"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                  <a href="tel:9404641112"> +1 (940) 464-1112</a>
                </div>
              </div>
            </nav>
          </motion.div>
        </div>
      </div>
    </header>
  );
};
