"use client";
import react, { useState } from "react";
import { TopicButton } from "./buttons";
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
    <section className="pt-16 px-3 flex flex-col justify-center items-center w-full">
      <h2 className="text-center sm:text-left text-4xl px-2 font-semibold pb-6">
        Frequently Asked <span className="text-pink-500">Questions</span>
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg sm:max-w-full justify-center">
        <div className="sm:w-[400px] border border-teal-500 rounded-[20px] p-5 flex flex-col gap-2 drop-shadow-lg">
          <button
            onClick={() => handleTopicClick("topic1")}
            className="bg-gray-200 rounded-full h-14 flex text-xl items-center"
          >
            <svg
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-14"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path fill="#9e9e9e" d="M8 3a5 5 0 100 10A5 5 0 008 3z"></path>
              </g>
            </svg>
            <p className="font-semibold pl-16">topic1</p>
          </button>
          <button
            onClick={() => handleTopicClick("topic2")}
            className="bg-gray-200 rounded-full h-14 flex text-xl items-center"
          >
            <svg
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-14"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path fill="#9e9e9e" d="M8 3a5 5 0 100 10A5 5 0 008 3z"></path>
              </g>
            </svg>
            <p className="font-semibold pl-16">topic2</p>
          </button>
          <button
            onClick={() => handleTopicClick("topic3")}
            className="bg-gray-200 rounded-full h-14 flex text-xl items-center"
          >
            <svg
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-14"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path fill="#9e9e9e" d="M8 3a5 5 0 100 10A5 5 0 008 3z"></path>
              </g>
            </svg>
            <p className="font-semibold pl-16">topic3</p>
          </button>
          <button
            onClick={() => handleTopicClick("topic4")}
            className="bg-gray-200 rounded-full h-14 flex text-xl items-center"
          >
            <svg
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-14"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path fill="#9e9e9e" d="M8 3a5 5 0 100 10A5 5 0 008 3z"></path>
              </g>
            </svg>
            <p className="font-semibold pl-16">topic4</p>
          </button>
        </div>
        <div className="sm:w-[400px]">
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
