"use client";
import react, { useState } from "react";
import { motion } from "framer-motion";
import clsx from 'clsx';

export function FileTabCard() {
  const [tab, setTab] = useState("biography");
  const cardVariants = {
    active: {
      opacity: 1,
      y: "0%",
      x: "0%",
      transition: {
        delay: 0,
        duration: 0.1,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    nonActive: {
      opacity: 0,
      y: "1%",
      x: "2%",
      transition: {
        delay: 0,
        duration: 0.3,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };

  const tabVariants = {
    active: {
      y: "3%",
      x: "0%",
      transition: {
        delay: 0,
        duration: 0.15,
        ease: [0.74, 0, 0.19, 1.02],
      },
      backgroundColor: "#FFEC8D",
    },
    nonActive: {
      y: "15%",
      x: "5%",
      transition: {
        delay: 0,
        duration: 0.1,
        ease: [0.74, 0, 0.19, 1.02],
      },
      backgroundColor: "#F9F9F9",
    },
  };

  const handleOnClick = (tab: string) => {
    setTab(tab);
  };

  return (
    <div className="grid grid-cols-3 grid-rows-8 mt-10 w-full min-w-80 max-w-md">
      <div className="flex flex-row justify-between col-span-3 h-12 px-5 w-full">
        <motion.div
          onClick={() => handleOnClick("biography")}
          initial="active"
          animate={tab === "biography" ? "active" : "nonActive"}
          variants={tabVariants}
          className="px-1.5 xs:px-2 md:px-5 h-28 pt-2 border border-1 border-gray-400 rounded-t-[20px] hover:cursor-pointer"
        >
          <p>Biography</p>
        </motion.div>
        <motion.div
          onClick={() => handleOnClick("background")}
          initial="nonActive"
          animate={tab === "background" ? "active" : "nonActive"}
          variants={tabVariants}
          className="px-1.5 xs:px-2 md:px-5   h-20 pt-2 border border-1 border-gray-400  rounded-t-[20px] hover:cursor-pointer"
        >
          <p>Background</p>
        </motion.div>
        <motion.div
          onClick={() => handleOnClick("education")}
          initial="nonActive"
          animate={tab === "education" ? "active" : "nonActive"}
          variants={tabVariants}
          className="px-1.5 xs:px-2 md:px-5  h-20 pt-2 border border-1 border-gray-400 bg-white rounded-t-[20px] hover:cursor-pointer"
        >
          <p>Education</p>
        </motion.div>
      </div>
      <div className="relative row-start-2 row-span-7 col-start-1 col-span-8">
        <motion.div
          initial="active"
          animate={tab === "biography" ? "active" : "nonActive"}
          variants={cardVariants}
          className="absolute p-3 sm:p-10 flex flex-col gap-4 rounded-[20px] border border-1 border-gray-400 bg-white shadow-custom2"
        >
          <h4 className="font-semibold">Hey y'all!</h4>
          <p className="font-semibold">
            I am <span className="text-2xl text-pink-400">Alicia Wimsatt</span>,
          </p>
          <p>
            and I am an LPC Associate supervised by Shawna Storey-Lovin, LPC-S.
            I am the Owner of Couch Talk Counseling and Coaching.
          </p>
          <p>
            Aside from the fancy titles, I am a fellow Wise-Countian, boy mom x
            2, wife, an avid iced coffee fanatic, and a lover of all things that
            involve mental health.
          </p>
          <p>
            In my free time, you can find me talking too much, thanking Jesus,
            planning my next vacation (it is self-care after all right?!?!),
            practicing what I preach (you know, trying to use all those coping
            skills I harp on), being “one of those moms” at a local ball game,
            and trying new recipes!
          </p>
        </motion.div>
        <motion.div
          initial="nonActive"
          animate={tab === "education" ? "active" : "nonActive"}
          variants={cardVariants}
          className="absolute p-3 sm:p-10 flex flex-col gap-4 rounded-[20px] border border-1 border-gray-400 bg-white shadow-custom2"
        >
          <p>
            I hold a Master’s Degree in Clinical Mental Health Counseling from
            Capella University where I graduated with distinction.
          </p>
          <p>
            I completed my Bachelors Degree in Psychology and Bachelors Degree
            in Child Learning and Development at the University of Texas at
            Dallas.
          </p>
        </motion.div>
        <motion.div
          initial="nonActive"
          animate={tab === "background" ? "active" : "nonActive"}
          variants={cardVariants}
          className="absolute p-3 sm:p-7 flex flex-col gap-4 rounded-[20px] border border-1 border-gray-400 bg-white max-h-[550px] overflow-hidden shadow-custom2"
          style={{
            scrollbarGutter: "stable",
          }}
        >
          <div className="overflow-auto p-3 z-20">
            <p>
              Aside from personal and lived experience with various aspects of
              mental health, I have been working in the world of mental health
              since 2010 having initially spent 9 years working with individuals
              with intellectual and developmental disabilities, Autism, ADHD and
              their families/foster care providers with behavior modification,
              intervention, advocacy, and case management.
            </p>
            <p>
              Through my personal experience and my 9 years of working with the
              neurodivergent population, neurodivergence and neurodivergence
              advocacy became a passion of mine. My background is not limited to
              neurodivergence however, as I have served as a local mental health
              crisis worker, worked with pervasive mental illness and within an
              inpatient psychiatric hospital setting, and even in the criminal
              justice system.
            </p>
            <p>
              In addition, along with my own advocacy efforts towards
              neurodivergence, I have also provided Special Education Counseling
              in a school setting, been a counselor in a group practice, and now
              my road takes me to providing counseling to those in my local,
              rural, community. Additionally, I have served as a group leader
              for grief process groups for kiddos.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
