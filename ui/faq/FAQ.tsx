"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function FAQ() {
  const [topic, setTopic] = useState("topic1");
  const [open, setOpen] = useState(0);

  const handleOpen = (value: number) => {
    setOpen(value);
  };

  const handleTopicClick = (topic: string) => {
    setTopic(topic);
  };

  const faqs: Record<string, any> = {
    topic1: [
      ["q11", "a1"],
      ["q21", "a2"],
      ["q31", "a3"],
      ["q41", "a4"],
    ],
    topic2: [
      ["q12", "a1"],
      ["q22", "a2"],
      ["q32", "a3"],
      ["q42", "a4"],
    ],
    topic3: [
      ["q13", "a1"],
      ["q23", "a2"],
      ["q33", "a3"],
      ["q43", "a4"],
    ],
    topic4: [
      ["q14", "a1"],
      ["q24", "a2"],
      ["q34", "a3"],
      ["q44", "a4"],
    ],
  };

  return (
    <section id="faq" className=" px-3 flex flex-col justify-center items-center w-full mb-20 mt-20">
      <div className="w-full max-w-7xl mb-10">
      <h2 className="text-center sm:text-left text-5xl font-light tracking-wider mb-5">
        Frequently Asked <span className="text-pink-500 font-bold">Questions</span>
      </h2>
      </div>
    <div className="flex flex-col sm:flex-row gap-20 w-full max-w-lg sm:max-w-full justify-center">
        <div className="sm:w-[500px] border border-[#5DD9C1] rounded-[20px] px-6 py-6 flex flex-col gap-3 drop-shadow-lg bg-white">
          <button
            onClick={() => handleTopicClick("topic1")}
            className="bg-[#E7E7E7] rounded-[25px] h-[80px] flex text-xl items-center"
          >
            <svg
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-20 pl-2"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path fill="#9e9e9e" d="M8 3a5 5 0 100 10A5 5 0 008 3z"></path>
              </g>
            </svg>
            <p className="font-semibold pl-2">topic1</p>
          </button>
          <button
            onClick={() => handleTopicClick("topic2")}
            className=" rounded-[25px] h-[80px] flex text-xl items-center"
          >
            <svg
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-20 pl-2"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path fill="#9e9e9e" d="M8 3a5 5 0 100 10A5 5 0 008 3z"></path>
              </g>
            </svg>
            <p className="font-semibold pl-2">topic2</p>
          </button>
          <button
            onClick={() => handleTopicClick("topic3")}
            className=" rounded-[25px] h-[80px] flex text-xl items-center"
          >
            <svg
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-20 pl-2"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path fill="#9e9e9e" d="M8 3a5 5 0 100 10A5 5 0 008 3z"></path>
              </g>
            </svg>
            <p className="font-semibold pl-2">topic3</p>
          </button>
          <button
            onClick={() => handleTopicClick("topic4")}
            className=" rounded-[25px] h-[80px] flex text-xl items-center"
          >
            <svg
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-20 pl-2"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path fill="#9e9e9e" d="M8 3a5 5 0 100 10A5 5 0 008 3z"></path>
              </g>
            </svg>
            <p className="font-semibold pl-2">topic4</p>
          </button>
        </div>
        <div className="sm:w-[400px]">
          <h3 className="text-2xl text-[#636061]"> Topic title </h3>
          {topic &&
            faqs[topic].map((faq: any, index: any) => {
              return (
                <Accordion
                  open={open === index}
                  icon={<Icon id={index} open={open} />}
                  className="py-2"
                >
                  <AccordionHeader onClick={() => handleOpen(index)}>
                    {faq[0]}
                  </AccordionHeader>
                  <AccordionBody>{faq[1]}</AccordionBody>
                </Accordion>
              );
            })}
        </div>
      </div>
    </section>
  );
}
