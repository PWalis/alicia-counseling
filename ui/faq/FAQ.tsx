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
      [
        "I have heard of a “LPC” but not of a “LPC Associate”, what is that?",
        "LPC stands for a Licensed Professional Counselor. A LPC is a fully licensed professional who has at least a Master’s Degree in Counseling or a related field, has passed the National Counseling Exam for licensure, and had completed and obtained 3000 hours of supervised clinical experience. These professionals are in independent practice. A LPC Associate (Licensed Professional Counselor Associate) is a provisional license to conduct counseling under the supervision of a Licensed Professional Counselor Supervisor (LPC-S). A LPC Associate has also earned a Master’s Degree in Counseling or a related field, has passed the National Counseling Exam for licensure, and is in the process of completing the required 3000 hours of supervised clinical experience to obtain full and independent licensure. Hey, that’s me! As a LPC Associate, I am supervised by Shawna Storey-Lovin, LPC-S. ",
      ],
      [
        "If I bring my minor in to see you, how do I get to be involved?",
        "As the parent/guardian of your minor, I rely heavily on your input and feedback related to your child. The first session is a sit down with you to discuss your concerns and desires for your child. After that, it’s time to get to work and most of my time will be spent directly working with your child independently. However, throughout your child’s treatment, we will engage in periodic parent training and/or consultation sessions to form a partnership and provide the best treatment for your child. ",
      ],
    ],
    topic2: [
      [
        "How Much is a Session?",
        "Self-pay sessions are $115.00 per 50-minute session.",
      ],
      [
        "Do You Take Insurance?",
        "I do not currently accept any commercial insurance plans and would be considered an Out of Network Provider. While I do not submit claims on your behalf to your insurance company, I am glad to provide you with a super bill you may file with your insurance if you desire to seek an opportunity for reimbursement of services. Please note that I cannot guarantee reimbursement through your insurance for the services rendered.",
      ],
      [
        "What is the Sliding Scale based rate?",
        "A sliding scale based rate is a way for lower income individuals/families to receive the help that they need at a lower rate. Sliding scale rates are offered on a limited basis and based off of proof of income.",
      ],
      [
        "What is the Good Faith Estimate?",
        "As of January 1, 2022, state-licensed health care providers must provide a Good Faith Estimate of expected health care charges to every new and continuing client who is either uninsured or not utilizing insurance. This is to provide you with an estimate of what your treatment may cost. You will be provided with a Good Faith Estimate with your initial paperwork and additionally as the need for ongoing sessions are determined.",
      ],
    ],
    topic3: [
      [
        "How Long will Therapy Take?",
        "There is not a rule book or designated timetable related to a standard therapeutic journey. Each person requires different lengths of treatment to meet their optimal well-being. The objective in therapy is to improve your overall well-being, functioning, and reach the goals you have set as part of your treatment plan. Therapy can be used both for intervention, growth, and maintenance. My objective as your counselor is to encourage and challenge your healing at a pace that is comfortable to you.",
      ],
      [
        "What is Counseling?",
        "Counseling is a behavioral health effort through self-exploration that considers values, beliefs, interests, and memories in a journey to rediscover YOU. Counseling focuses on emotional healing and well-being and tackles a decreased level of functioning. Counseling can only be provided by a licensed mental health professional. ",
      ],
      [
        "What is Coaching?",
        "Coaching is a supportive, encouraging, non-directive approach to developing skills, behaviors, and processes to achieve desired goals. We are going to set goals and work to achieve those goals. In coaching sessions, we are focusing on specific skill sets, competencies, and goals you are fostering your energy towards. With coaching, we are trying to elevate reaching your goals through use of your strengths. ",
      ],
    ],
    topic4: [
      [
        "What is Your Niche?",
        "My niche and passion are working with individuals (ages 5+) with neurodivergence, women’s health issues including those struggling with medical fragility, difficulty with self-esteem and self-compassion, postpartum depression, people-pleasing and boundary setting difficulties, and working with blended families, single parents, couples, and those struggling with relationship difficulties. In addition, I work with fellow therapists and associates to aid in finding work life balance, career fulfillment, and maneuvering the demands of being in the helping profession. ",
      ],
      [
        "Do you offer Christian counseling? What if I am not a Christian, can you still help?",
        "As a Christian myself, I do offer faith-based interventions for those that are seeking to deepen their understanding of faith in relational to their mental health. However, my practice is not limited to those whose beliefs are different than mine. Together, we can take a collaborative approach whether faith based or not and reach your mental health goals together. ",
      ],
    ],
  };

  const topicTitles: Record<string, string> = {
    topic1: "General Questions",
    topic2: "Pricing Information",
    topic3: "Therapy Information",
    topic4: "My Methods",
  };

  return (
    <section
      id="faq"
      className=" px-3 flex flex-col justify-center items-center w-full mb-20 mt-20"
    >
      <div className="w-full max-w-7xl mb-10">
        <h2 className="text-center sm:text-left text-5xl font-light tracking-wider mb-5">
          Frequently Asked{" "}
          <span className="text-pink-500 font-bold">Questions</span>
        </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-20 w-full max-w-lg md:max-w-full justify-center">
        <div className="sm:w-[500px] sm:min-w-[400px] max-h-[406px] border border-gray-200 rounded-[20px] px-6 py-6 flex flex-col gap-3 drop-shadow-md bg-white">
          {Object.keys(topicTitles).map((key) => (
            <button
              key={key}
              onClick={() => handleTopicClick(key)}
              className={`rounded-[25px] text-md h-[80px] flex lg:text-xl items-center ${
                topic === key ? "bg-[#f0f0f0]" : ""
              }`}
            >
              <svg
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-20 pl-2"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="#9e9e9e"
                    d="M8 3a5 5 0 100 10A5 5 0 008 3z"
                  ></path>
                </g>
              </svg>
              <p className="font-semibold pl-2">{topicTitles[key]}</p>
            </button>
          ))}
        </div>
        <div className="sm:w-[600px]">
          <h3 className="text-2xl text-[#636061] mb-2">
            {topicTitles[topic]}{" "}
          </h3>
          {topic &&
            faqs[topic].map((faq: any, index: any) => {
              return (
                <Accordion
                  open={open === index}
                  icon={<Icon id={index} open={open} />}
                  className="py-2 "
                >
                  <AccordionHeader
                    onClick={() => handleOpen(index)}
                    className={`${open === index ? "text-pink-500 mb-2" : "text-[#000000]"}`}
                  >
                    {faq[0]}
                  </AccordionHeader>
                  <AccordionBody className="text-md">{faq[1]}</AccordionBody>
                  <svg
                  className="mt-4 mb-2"
                    width="100%"
                    height="1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="0"
                      y1="1"
                      x2="100%"
                      y2="1"
                      stroke="gray"
                      stroke-width="1"
                    />
                  </svg>
                </Accordion>
              );
            })}
        </div>
      </div>
    </section>
  );
}
