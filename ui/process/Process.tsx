"use client";
import { motion } from "framer-motion";
import useWindowDimensions from "@/lib/UseWindowDimensions";


export function Process() {
  const { width } =  useWindowDimensions() 

  const isSmallScreen = width < 964;

  return (
    <section className="flex fade-bg bg-cover bg-bottom pt-[16rem] pb-[7rem] sm:pb-[15rem] w-full gap-5 items-center flex-col">
      <div className="px-3 w-full max-w-7xl overflow-hidden">
        <h2 className="text-center sm:text-left text-5xl font-light tracking-wider mb-5 text-white">
          Setting your
          <span className="font-bold"> Appointment</span>
        </h2>
      </div>
      <div className="flex flex-col px-3 items-center text-white">
        <h4 className="text-center text-xl font-semibold">
          I know how difficult it can be to ask for help.
        </h4>
        <p className="text-center text-xl">
          I'm here to make the process <span className="">easy </span> and{" "}
          <span className="">transparent.</span>{" "}
        </p>
      </div>
      <div className="w-full overflow-hidden">
        <motion.div
          drag={isSmallScreen ? "x" : false}
          dragConstraints={{
            left: -320,
            right: 320,
          }}
          animate={{
            x: isSmallScreen ? 320 : 0
          }}
          className="flex flex-row justify-center items-center gap-3 sm:gap-10 py-5 px-5 select-none"
        >
          <div className="shrink-0 shadow-[0_20px_#FFEC8D] sm:shadow-[-18px_18px_#FFEC8D] drop-shadow-md pt-5 pb-3 px-2 border bg-white border-gray-200 h-[400px] rounded-[20px] max-w-[320px] sm:max-w-[320px] flex flex-col justify-center items-center">
            <div className="w-24 h-24">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M17 14C17.5523 14 18 13.5523 18 13C18 12.4477 17.5523 12 17 12C16.4477 12 16 12.4477 16 13C16 13.5523 16.4477 14 17 14Z"
                    fill="#000000"
                  ></path>{" "}
                  <path
                    d="M17 18C17.5523 18 18 17.5523 18 17C18 16.4477 17.5523 16 17 16C16.4477 16 16 16.4477 16 17C16 17.5523 16.4477 18 17 18Z"
                    fill="#000000"
                  ></path>{" "}
                  <path
                    d="M13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13C11 12.4477 11.4477 12 12 12C12.5523 12 13 12.4477 13 13Z"
                    fill="#000000"
                  ></path>{" "}
                  <path
                    d="M13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17Z"
                    fill="#000000"
                  ></path>{" "}
                  <path
                    d="M7 14C7.55229 14 8 13.5523 8 13C8 12.4477 7.55229 12 7 12C6.44772 12 6 12.4477 6 13C6 13.5523 6.44772 14 7 14Z"
                    fill="#000000"
                  ></path>{" "}
                  <path
                    d="M7 18C7.55229 18 8 17.5523 8 17C8 16.4477 7.55229 16 7 16C6.44772 16 6 16.4477 6 17C6 17.5523 6.44772 18 7 18Z"
                    fill="#000000"
                  ></path>{" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7 1.75C7.41421 1.75 7.75 2.08579 7.75 2.5V3.26272C8.412 3.24999 9.14133 3.24999 9.94346 3.25H14.0564C14.8586 3.24999 15.588 3.24999 16.25 3.26272V2.5C16.25 2.08579 16.5858 1.75 17 1.75C17.4142 1.75 17.75 2.08579 17.75 2.5V3.32709C18.0099 3.34691 18.2561 3.37182 18.489 3.40313C19.6614 3.56076 20.6104 3.89288 21.3588 4.64124C22.1071 5.38961 22.4392 6.33855 22.5969 7.51098C22.75 8.65018 22.75 10.1058 22.75 11.9435V14.0564C22.75 15.8941 22.75 17.3498 22.5969 18.489C22.4392 19.6614 22.1071 20.6104 21.3588 21.3588C20.6104 22.1071 19.6614 22.4392 18.489 22.5969C17.3498 22.75 15.8942 22.75 14.0565 22.75H9.94359C8.10585 22.75 6.65018 22.75 5.51098 22.5969C4.33856 22.4392 3.38961 22.1071 2.64124 21.3588C1.89288 20.6104 1.56076 19.6614 1.40314 18.489C1.24997 17.3498 1.24998 15.8942 1.25 14.0564V11.9436C1.24998 10.1058 1.24997 8.65019 1.40314 7.51098C1.56076 6.33855 1.89288 5.38961 2.64124 4.64124C3.38961 3.89288 4.33856 3.56076 5.51098 3.40313C5.7439 3.37182 5.99006 3.34691 6.25 3.32709V2.5C6.25 2.08579 6.58579 1.75 7 1.75ZM5.71085 4.88976C4.70476 5.02502 4.12511 5.27869 3.7019 5.7019C3.27869 6.12511 3.02502 6.70476 2.88976 7.71085C2.86685 7.88123 2.8477 8.06061 2.83168 8.25H21.1683C21.1523 8.06061 21.1331 7.88124 21.1102 7.71085C20.975 6.70476 20.7213 6.12511 20.2981 5.7019C19.8749 5.27869 19.2952 5.02502 18.2892 4.88976C17.2615 4.75159 15.9068 4.75 14 4.75H10C8.09318 4.75 6.73851 4.75159 5.71085 4.88976ZM2.75 12C2.75 11.146 2.75032 10.4027 2.76309 9.75H21.2369C21.2497 10.4027 21.25 11.146 21.25 12V14C21.25 15.9068 21.2484 17.2615 21.1102 18.2892C20.975 19.2952 20.7213 19.8749 20.2981 20.2981C19.8749 20.7213 19.2952 20.975 18.2892 21.1102C17.2615 21.2484 15.9068 21.25 14 21.25H10C8.09318 21.25 6.73851 21.2484 5.71085 21.1102C4.70476 20.975 4.12511 20.7213 3.7019 20.2981C3.27869 19.8749 3.02502 19.2952 2.88976 18.2892C2.75159 17.2615 2.75 15.9068 2.75 14V12Z"
                    fill="#000000"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <p className="text-xl  text-[#66aeff] tracking-wider text-center px-10 pt-5">
              Schedule A Consultation
            </p>
            <p className="text-center text-xl pt-5">
              Schedule your 15 minute consultation where we'll discuss your
              needs.
            </p>
            <p className="pt-10 text-xl text-[#66aeff] select-text z-10">
              {"(903) 999-9903"}
            </p>
          </div>
          <div className="shrink-0 shadow-[0_20px_#FFEC8D] sm:shadow-[-18px_18px_#FFEC8D] drop-shadow-md pt-5 pb-3 px-2 border bg-white border-gray-200 h-[400px] rounded-[20px] max-w-[320px] sm:max-w-[320px] flex flex-col justify-center items-center">
            <div className="w-24 h-24">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM8.39747 15.5534C8.64413 15.2206 9.11385 15.1508 9.44661 15.3975C10.175 15.9373 11.0541 16.25 12 16.25C12.9459 16.25 13.825 15.9373 14.5534 15.3975C14.8862 15.1508 15.3559 15.2206 15.6025 15.5534C15.8492 15.8862 15.7794 16.3559 15.4466 16.6025C14.4742 17.3233 13.285 17.75 12 17.75C10.715 17.75 9.5258 17.3233 8.55339 16.6025C8.22062 16.3559 8.15082 15.8862 8.39747 15.5534Z"
                    fill="#000000"
                  ></path>{" "}
                  <path
                    d="M16 10.5C16 11.3284 15.5523 12 15 12C14.4477 12 14 11.3284 14 10.5C14 9.67157 14.4477 9 15 9C15.5523 9 16 9.67157 16 10.5Z"
                    fill="#000000"
                  ></path>{" "}
                  <path
                    d="M10 10.5C10 11.3284 9.55229 12 9 12C8.44772 12 8 11.3284 8 10.5C8 9.67157 8.44772 9 9 9C9.55229 9 10 9.67157 10 10.5Z"
                    fill="#000000"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <p className="text-xl text-[#66aeff] text-center pt-5 px-10">
              Sign into your Personal Portal
            </p>
            <p className="px-2 text-center text-xl pt-5">
              {"Do the boring paperwork you only have to do this once :)"}
            </p>
            <p className="pt-10 text-xl text-[#66aeff]">View the Portal</p>
          </div>
          <div className="shrink-0 shadow-[0_20px_#FFEC8D] sm:shadow-[-18px_18px_#FFEC8D] drop-shadow-md pt-5 pb-3 px-2 border bg-white border-gray-200 h-[400px] rounded-[20px] max-w-[320px] sm:max-w-[320px] flex flex-col justify-center items-center">
            <div className="w-24 h-24">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.90473 4.25001C8.93606 4.25001 8.96781 4.25002 9 4.25002H15C15.0322 4.25002 15.0639 4.25001 15.0953 4.25001C15.9333 4.24988 16.4668 4.24981 16.9267 4.34129C18.811 4.71609 20.2839 6.18906 20.6587 8.07334L19.9231 8.21966L20.6587 8.07334C20.7284 8.4234 20.7449 8.81605 20.7488 9.35321C21.9037 9.67929 22.75 10.7408 22.75 12V14.4445C22.75 15.9742 21.9522 17.3176 20.75 18.0813V19C20.75 19.4142 20.4142 19.75 20 19.75C19.5858 19.75 19.25 19.4142 19.25 19V18.6748C18.989 18.7242 18.7198 18.75 18.4444 18.75H5.55556C5.28024 18.75 5.01095 18.7242 4.75 18.6748V19C4.75 19.4142 4.41421 19.75 4 19.75C3.58579 19.75 3.25 19.4142 3.25 19V18.0813C2.04779 17.3176 1.25 15.9742 1.25 14.4445V12C1.25 10.7408 2.09631 9.67929 3.25116 9.35321C3.25505 8.81605 3.27164 8.4234 3.34127 8.07334C3.71608 6.18906 5.18904 4.71609 7.07332 4.34129C7.53324 4.24981 8.06666 4.24988 8.90473 4.25001ZM4.75168 9.35401C5.90507 9.68103 6.75 10.7419 6.75 12V13.2C6.75 13.2276 6.77239 13.25 6.8 13.25H17.2C17.2276 13.25 17.25 13.2276 17.25 13.2V12C17.25 10.7419 18.0949 9.68103 19.2483 9.35401C19.2443 8.84457 19.231 8.58419 19.1876 8.36598C18.9311 7.07673 17.9233 6.06891 16.634 5.81247C16.3384 5.75365 15.9653 5.75002 15 5.75002H9C8.03474 5.75002 7.66164 5.75365 7.36596 5.81247C6.07671 6.06891 5.06889 7.07673 4.81245 8.36597C4.76904 8.58419 4.75569 8.84457 4.75168 9.35401ZM4 10.75C3.30964 10.75 2.75 11.3097 2.75 12V14.4445C2.75 15.9939 4.00609 17.25 5.55556 17.25H18.4444C19.9939 17.25 21.25 15.9939 21.25 14.4445V12C21.25 11.3097 20.6904 10.75 20 10.75C19.3096 10.75 18.75 11.3097 18.75 12V13.2C18.75 14.0561 18.056 14.75 17.2 14.75H6.8C5.94396 14.75 5.25 14.0561 5.25 13.2V12C5.25 11.3097 4.69036 10.75 4 10.75Z"
                    fill="#000000"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <p className="text-xl text-[#66aeff] text-center pt-5 px-10">
              Attend Your First Appointment
            </p>
            <p className="px-2 text-center text-xl pt-5">
              Take a seat on my comfy coach and let's get you taken care of.
            </p>
            <a
              href="/"
              onClick={(e) => {
                let FAQ = document.getElementById("faq");
                e.preventDefault();
                FAQ &&
                  FAQ.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="pt-10 text-xl text-[#66aeff]"
            >
              View FAQ
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
