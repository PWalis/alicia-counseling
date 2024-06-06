"use client";
import react, { useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

export function Services() {
  const [service, setService] = useState("counseling");

  const handleOnClick = (serviceName: string) => {
    setService(serviceName);
  };

  const specializations: Record<string, string[]> = {
    counseling: [
      "Counseling focuses on emotional healing and well-being to finally reveal the empowered version of yourself. In counseling you experience a journey of self-exploration that considers values, beliefs, interests, and memories to rediscover YOU. Counseling can only be provided by a licensed mental health professional.",
    ],
    coaching: [
      "Coaching focuses on helping you achieve the goals that you've been struggling with. And ultimately gives you the skill building tool belt that you will support you for life. Coaching sessions take a supportive, encouraging approach so that you can develop skills, behaviors, and processes to reach your goals. Coaching sessions start in 2025",
    ],
    groups: [
      "Groups focus on bringing people on a similar journey together to support one another and take steps towards a better future. In group sessions you will meet peers and make connections that are difficult to discover during your normal day to day. The connections you make with your group sets you up for success. Group sessions start in 2025",
    ],
  };

  return (
    <section
      id="services"
      className="pt-[8rem] px-3 w-full items-center flex flex-col"
    >
      <div className="pb-10 w-full max-w-7xl">
        <h2 className="text-center sm:text-left text-5xl text-black font-light">
          Personalize Your
          <span className="font-bold text-blue-500"> Couch Talk</span>
        </h2>
      </div>
      <div className="">
        <h3 className="text-center sm:text-left text-2xl pb-2">
          What I{" "}
          <span className="text-blue-500 font-semibold"> Specialize </span>
          In:
        </h3>
        <div className="max-w-6xl">
          <ul className="p-10 border border-blue-500 rounded-[20px] sm:columns-2 list-disc list-inside px-10 space-y-2">
            <li>Mood disorders</li>
            <li>Depression</li>
            <li>Anxiety</li>
            <li>Parenting neurodivergent children</li>
            <li>Support for teens</li>
            <li>Women's health during and after pregnancy</li>
            <li>Postpartum depression</li>
            <li>Step parent relationships</li>
            <li>Therapy for therapists</li>
            <li>Family members to those struggling with addiction</li>
            <li>People pleasing behaviors and boundary setting</li>
            <li>Grief</li>
            <li>Christian counseling</li>
            <li>Rediscovery and Reigniting of Relationships</li>
          </ul>
        </div>
      </div>
      <h3 className="pt-5 text-xl">
        Explore The <span className="text-blue-500 font-bold">Services</span> I
        Offer
      </h3>
      <div className="flex pt-3 justify-between flex-col sm:flex-row w-full max-w-4xl min-h-[500px] sm:min-h-0">
        <div
          onClick={() => handleOnClick("counseling")}
          className={clsx(
            "rounded-[15px] w-full h-20 border border-blue-400 drop-shadow-md flex items-center justify-center cursor-pointer gap-3 m-1",
            service === "counseling" ? "bg-blue-100 font-semibold" : "bg-white"
          )}
        >
          <p>Counseling</p>
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
                  d="M13.3365 1.25H15.6634C16.8583 1.24999 17.8086 1.24999 18.5706 1.32244C19.352 1.39674 20.0127 1.55247 20.6012 1.91312C21.2067 2.28418 21.7158 2.79326 22.0868 3.39876C22.4475 3.9873 22.6032 4.64796 22.6775 5.42935C22.75 6.19141 22.75 7.14162 22.7499 8.33653V9.15226C22.75 10.0028 22.75 10.6794 22.7125 11.2279C22.6742 11.7891 22.5943 12.2709 22.4074 12.7221C21.9507 13.8247 21.0746 14.7008 19.972 15.1575C19.5929 15.3146 19.1887 15.397 18.7308 15.4419C18.7255 15.5812 18.7188 15.7137 18.7102 15.8397C18.6695 16.4357 18.5848 16.9436 18.3884 17.4178C17.9063 18.5817 16.9816 19.5064 15.8177 19.9885C15.2209 20.2357 14.5625 20.3081 13.7346 20.3346C13.2892 20.3489 13.0044 20.3587 12.7881 20.385C12.5837 20.41 12.5069 20.4433 12.4654 20.4679C12.4193 20.4951 12.3557 20.5451 12.2447 20.6979C12.1249 20.863 11.9891 21.0907 11.7742 21.4539L11.5147 21.8922C10.8378 23.0359 9.16217 23.0359 8.48523 21.8922L8.2258 21.4539C8.01082 21.0907 7.87511 20.863 7.75524 20.6979C7.64427 20.5451 7.58064 20.4951 7.53453 20.4679C7.49305 20.4433 7.41631 20.41 7.21182 20.3851C6.99552 20.3587 6.71078 20.3489 6.26533 20.3346C5.43745 20.3081 4.77912 20.2357 4.18225 19.9885C3.01837 19.5064 2.09367 18.5817 1.61157 17.4178C1.41517 16.9436 1.33047 16.4357 1.2898 15.8397C1.24999 15.2563 1.25 14.5361 1.25 13.6274V12.7613C1.24999 11.4848 1.24999 10.4732 1.32705 9.6627C1.40595 8.83288 1.57089 8.13673 1.94996 7.51814C2.34162 6.879 2.87899 6.34163 3.51813 5.94996C4.13672 5.57089 4.83287 5.40595 5.66269 5.32705C5.87363 5.30699 6.0982 5.29216 6.33751 5.28118C6.41754 4.56134 6.57708 3.94704 6.91307 3.39877C7.28412 2.79326 7.7932 2.28418 8.3987 1.91312C8.98723 1.55247 9.64789 1.39674 10.4293 1.32244C11.1913 1.24999 12.1416 1.24999 13.3365 1.25ZM7.85331 5.2512C8.1401 5.25 8.44243 5.25 8.7613 5.25H11.2387C12.5153 5.24999 13.5268 5.24999 14.3373 5.32705C15.1671 5.40595 15.8633 5.57089 16.4819 5.94996C17.121 6.34163 17.6584 6.879 18.05 7.51814C18.4291 8.13673 18.5941 8.83288 18.673 9.6627C18.75 10.4732 18.75 11.4847 18.75 12.7613V13.6274C18.75 13.7307 18.75 13.8316 18.7499 13.9301C19.0253 13.8944 19.2262 13.8428 19.398 13.7717C20.1331 13.4672 20.7171 12.8832 21.0216 12.1481C21.1201 11.9101 21.1829 11.6106 21.216 11.1258C21.2495 10.6343 21.2499 10.0089 21.2499 9.12503V8.37503C21.2499 7.13296 21.2492 6.25408 21.1842 5.57133C21.1204 4.89973 20.9998 4.49574 20.8079 4.18251C20.5605 3.77884 20.2211 3.43945 19.8174 3.19208C19.5042 3.00013 19.1002 2.87956 18.4286 2.81571C17.7459 2.75079 16.867 2.75 15.6249 2.75H13.3749C12.1329 2.75 11.254 2.75079 10.5713 2.81571C9.89967 2.87956 9.49568 3.00013 9.18245 3.19208C8.77879 3.43945 8.4394 3.77884 8.19203 4.18251C8.03147 4.44453 7.92229 4.76687 7.85331 5.2512ZM5.80467 6.82031C5.08465 6.88877 4.64517 7.01855 4.30188 7.22892C3.86458 7.4969 3.4969 7.86458 3.22892 8.30189C3.01855 8.64518 2.88877 9.08466 2.82031 9.80468C2.75079 10.5359 2.75 11.4761 2.75 12.8V13.6C2.75 14.5422 2.75041 15.2112 2.78632 15.7376C2.82178 16.2573 2.88931 16.5828 2.99739 16.8438C3.32725 17.6401 3.95994 18.2728 4.75628 18.6027C5.09046 18.7411 5.52102 18.81 6.31328 18.8354L6.34438 18.8364C6.74979 18.8493 7.1024 18.8606 7.39344 18.8961C7.70371 18.9339 8.00853 19.0055 8.29822 19.1768C8.58327 19.3454 8.78917 19.569 8.96888 19.8164C9.13514 20.0453 9.30644 20.3347 9.50062 20.6629L9.77606 21.1282C9.82147 21.2049 9.90074 21.25 9.99998 21.25C10.0992 21.25 10.1785 21.2049 10.2239 21.1282L10.4994 20.6628C10.6935 20.3347 10.8648 20.0453 11.0311 19.8164C11.2108 19.569 11.4167 19.3454 11.7018 19.1768C11.9914 19.0055 12.2963 18.9339 12.6065 18.8961C12.8976 18.8606 13.2502 18.8493 13.6556 18.8364L13.6867 18.8354C14.479 18.81 14.9095 18.7411 15.2437 18.6027C16.0401 18.2728 16.6728 17.6401 17.0026 16.8438C17.1107 16.5828 17.1782 16.2573 17.2137 15.7376C17.2496 15.2112 17.25 14.5422 17.25 13.6V12.8C17.25 11.4761 17.2492 10.5359 17.1797 9.80468C17.1112 9.08466 16.9814 8.64518 16.7711 8.30189C16.5031 7.86458 16.1354 7.4969 15.6981 7.22892C15.3548 7.01855 14.9154 6.88877 14.1953 6.82031C13.4641 6.75079 12.5239 6.75 11.2 6.75H8.8C7.47611 6.75 6.53585 6.75079 5.80467 6.82031Z"
                  fill="#000000"
                ></path>{" "}
                <path
                  d="M7.5 13C7.5 13.5523 7.05229 14 6.5 14C5.94772 14 5.5 13.5523 5.5 13C5.5 12.4477 5.94772 12 6.5 12C7.05229 12 7.5 12.4477 7.5 13Z"
                  fill="#000000"
                ></path>{" "}
                <path
                  d="M11 13C11 13.5523 10.5523 14 10 14C9.44772 14 9 13.5523 9 13C9 12.4477 9.44772 12 10 12C10.5523 12 11 12.4477 11 13Z"
                  fill="#000000"
                ></path>{" "}
                <path
                  d="M14.5 13C14.5 13.5523 14.0523 14 13.5 14C12.9477 14 12.5 13.5523 12.5 13C12.5 12.4477 12.9477 12 13.5 12C14.0523 12 14.5 12.4477 14.5 13Z"
                  fill="#000000"
                ></path>{" "}
              </g>
            </svg>
          </div>
        </div>
        {service === "counseling" && (
          <>
            <motion.div
              initial="collapsed"
              animate="open"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.2 }}
            >
              {specializations[service].map((specialization, index) => (
                <p
                  key={index}
                  className="text-lg tracking-wide leading-20 sm:hidden bg-white p-4"
                >
                  {specialization}
                </p>
              ))}
            </motion.div>
          </>
        )}
        <div
          onClick={() => handleOnClick("coaching")}
          className={clsx(
            "rounded-[15px] w-full h-20 border border-pink-400 drop-shadow-md flex items-center justify-center cursor-pointer gap-3 m-1",
            service === "coaching" ? "bg-pink-100 font-semibold" : "bg-white"
          )}
        >
          <p className="text-center">Coaching</p>
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
                  d="M13.75 10C13.75 10.4142 14.0858 10.75 14.5 10.75H15.1893L13.1768 12.7626C13.0791 12.8602 12.9209 12.8602 12.8232 12.7626L11.2374 11.1768C10.554 10.4934 9.44598 10.4934 8.76256 11.1768L6.46967 13.4697C6.17678 13.7626 6.17678 14.2374 6.46967 14.5303C6.76256 14.8232 7.23744 14.8232 7.53033 14.5303L9.82322 12.2374C9.92085 12.1398 10.0791 12.1398 10.1768 12.2374L11.7626 13.8232C12.446 14.5066 13.554 14.5066 14.2374 13.8232L16.25 11.8107V12.5C16.25 12.9142 16.5858 13.25 17 13.25C17.4142 13.25 17.75 12.9142 17.75 12.5V10C17.75 9.58579 17.4142 9.25 17 9.25H14.5C14.0858 9.25 13.75 9.58579 13.75 10Z"
                  fill="#000000"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.9426 1.25C9.63423 1.24999 7.82519 1.24998 6.41371 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.24998 7.82519 1.24999 9.63423 1.25 11.9426V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.031 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V11.9426C22.75 9.63423 22.75 7.82519 22.5603 6.41371C22.366 4.96897 21.9607 3.82895 21.0659 2.93414C20.1711 2.03933 19.031 1.63399 17.5863 1.43975C16.1748 1.24998 14.3658 1.24999 12.0574 1.25H11.9426ZM3.9948 3.9948C4.56445 3.42514 5.33517 3.09825 6.61358 2.92637C7.91356 2.75159 9.62178 2.75 12 2.75C14.3782 2.75 16.0864 2.75159 17.3864 2.92637C18.6648 3.09825 19.4355 3.42514 20.0052 3.9948C20.5749 4.56445 20.9018 5.33517 21.0736 6.61358C21.2484 7.91356 21.25 9.62178 21.25 12C21.25 14.3782 21.2484 16.0864 21.0736 17.3864C20.9018 18.6648 20.5749 19.4355 20.0052 20.0052C19.4355 20.5749 18.6648 20.9018 17.3864 21.0736C16.0864 21.2484 14.3782 21.25 12 21.25C9.62178 21.25 7.91356 21.2484 6.61358 21.0736C5.33517 20.9018 4.56445 20.5749 3.9948 20.0052C3.42514 19.4355 3.09825 18.6648 2.92637 17.3864C2.75159 16.0864 2.75 14.3782 2.75 12C2.75 9.62178 2.75159 7.91356 2.92637 6.61358C3.09825 5.33517 3.42514 4.56445 3.9948 3.9948Z"
                  fill="#000000"
                ></path>{" "}
              </g>
            </svg>
          </div>
        </div>
        {service === "coaching" && (
          <>
            <motion.div
              initial="collapsed"
              animate="open"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.2 }}
            >
              <p
                id="coming-soon"
                className="text-blue-500 text-center text-xl pt-4 sm:hidden"
              >
                Coming soon!
              </p>
              {specializations[service].map((specialization, index) => (
                <p
                  key={index}
                  className="text-lg tracking-wide leading-20 sm:hidden bg-white p-4"
                >
                  {specialization}
                </p>
              ))}
            </motion.div>
          </>
        )}{" "}
        <div
          onClick={() => handleOnClick("groups")}
          className={clsx(
            "rounded-[15px] w-full h-20 border border-teal-400 drop-shadow-md flex items-center justify-center cursor-pointer gap-3 m-1",
            service === "groups" ? "bg-teal-100 font-semibold" : "bg-white"
          )}
        >
          <p>Groups</p>
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
                  d="M12 1.25C9.37665 1.25 7.25 3.37665 7.25 6C7.25 8.62335 9.37665 10.75 12 10.75C14.6234 10.75 16.75 8.62335 16.75 6C16.75 3.37665 14.6234 1.25 12 1.25ZM8.75 6C8.75 4.20507 10.2051 2.75 12 2.75C13.7949 2.75 15.25 4.20507 15.25 6C15.25 7.79493 13.7949 9.25 12 9.25C10.2051 9.25 8.75 7.79493 8.75 6Z"
                  fill="#000000"
                ></path>{" "}
                <path
                  d="M18 3.25C17.5858 3.25 17.25 3.58579 17.25 4C17.25 4.41421 17.5858 4.75 18 4.75C19.3765 4.75 20.25 5.65573 20.25 6.5C20.25 7.34427 19.3765 8.25 18 8.25C17.5858 8.25 17.25 8.58579 17.25 9C17.25 9.41421 17.5858 9.75 18 9.75C19.9372 9.75 21.75 8.41715 21.75 6.5C21.75 4.58285 19.9372 3.25 18 3.25Z"
                  fill="#000000"
                ></path>{" "}
                <path
                  d="M6.75 4C6.75 3.58579 6.41421 3.25 6 3.25C4.06278 3.25 2.25 4.58285 2.25 6.5C2.25 8.41715 4.06278 9.75 6 9.75C6.41421 9.75 6.75 9.41421 6.75 9C6.75 8.58579 6.41421 8.25 6 8.25C4.62351 8.25 3.75 7.34427 3.75 6.5C3.75 5.65573 4.62351 4.75 6 4.75C6.41421 4.75 6.75 4.41421 6.75 4Z"
                  fill="#000000"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 12.25C10.2157 12.25 8.56645 12.7308 7.34133 13.5475C6.12146 14.3608 5.25 15.5666 5.25 17C5.25 18.4334 6.12146 19.6392 7.34133 20.4525C8.56645 21.2692 10.2157 21.75 12 21.75C13.7843 21.75 15.4335 21.2692 16.6587 20.4525C17.8785 19.6392 18.75 18.4334 18.75 17C18.75 15.5666 17.8785 14.3608 16.6587 13.5475C15.4335 12.7308 13.7843 12.25 12 12.25ZM6.75 17C6.75 16.2242 7.22169 15.4301 8.17338 14.7956C9.11984 14.1646 10.4706 13.75 12 13.75C13.5294 13.75 14.8802 14.1646 15.8266 14.7956C16.7783 15.4301 17.25 16.2242 17.25 17C17.25 17.7758 16.7783 18.5699 15.8266 19.2044C14.8802 19.8354 13.5294 20.25 12 20.25C10.4706 20.25 9.11984 19.8354 8.17338 19.2044C7.22169 18.5699 6.75 17.7758 6.75 17Z"
                  fill="#000000"
                ></path>{" "}
                <path
                  d="M19.2674 13.8393C19.3561 13.4347 19.7561 13.1787 20.1607 13.2674C21.1225 13.4783 21.9893 13.8593 22.6328 14.3859C23.2758 14.912 23.75 15.6352 23.75 16.5C23.75 17.3648 23.2758 18.088 22.6328 18.6141C21.9893 19.1407 21.1225 19.5217 20.1607 19.7326C19.7561 19.8213 19.3561 19.5653 19.2674 19.1607C19.1787 18.7561 19.4347 18.3561 19.8393 18.2674C20.6317 18.0936 21.2649 17.7952 21.6829 17.4532C22.1014 17.1108 22.25 16.7763 22.25 16.5C22.25 16.2237 22.1014 15.8892 21.6829 15.5468C21.2649 15.2048 20.6317 14.9064 19.8393 14.7326C19.4347 14.6439 19.1787 14.2439 19.2674 13.8393Z"
                  fill="#000000"
                ></path>{" "}
                <path
                  d="M3.83935 13.2674C4.24395 13.1787 4.64387 13.4347 4.73259 13.8393C4.82132 14.2439 4.56525 14.6439 4.16065 14.7326C3.36829 14.9064 2.73505 15.2048 2.31712 15.5468C1.89863 15.8892 1.75 16.2237 1.75 16.5C1.75 16.7763 1.89863 17.1108 2.31712 17.4532C2.73505 17.7952 3.36829 18.0936 4.16065 18.2674C4.56525 18.3561 4.82132 18.7561 4.73259 19.1607C4.64387 19.5653 4.24395 19.8213 3.83935 19.7326C2.87746 19.5217 2.0107 19.1407 1.36719 18.6141C0.724248 18.088 0.25 17.3648 0.25 16.5C0.25 15.6352 0.724248 14.912 1.36719 14.3859C2.0107 13.8593 2.87746 13.4783 3.83935 13.2674Z"
                  fill="#000000"
                ></path>{" "}
              </g>
            </svg>
          </div>
        </div>
        {service === "groups" && (
          <>
            <motion.div
              initial="collapsed"
              animate="open"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.2 }}
            >
              <p
                id="coming-soon"
                className="text-blue-500 text-center text-xl pt-4 sm:hidden sm:w-0"
              >
                Coming soon!
              </p>
              {specializations[service].map((specialization, index) => (
                <p
                  key={index}
                  className="text-lg tracking-wide leading-20 sm:hidden bg-white p-4"
                >
                  {specialization}
                </p>
              ))}
            </motion.div>
          </>
        )}
      </div>

      <motion.div
        key={`${service}`}
        initial={{ opacity: 0.5, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className=" flex-col gap-3 justify-center p-5 mt-3 max-w-[600px] min-h-[200px] bg-[#ffffff] rounded-[20px] drop-shadow-md hidden sm:flex">
          {service === "coaching" || service === "groups" ? (
            <p id="coming-soon" className="text-blue-500 text-center text-xl">
              Coming soon!
            </p>
          ) : (
            <p id="coming-soon" className=""></p>
          )}
          {specializations[service].map((specialization) => (
            <p className="text-lg tracking-wide leading-20">{specialization}</p>
          ))}{" "}
        </div>
      </motion.div>
    </section>
  );
}
