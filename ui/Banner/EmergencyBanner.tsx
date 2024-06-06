"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const banneranimation = {
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

const CloseIcon: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="cursor-pointer"
    onClick={onClick}
  >
    <path
      d="M6 18L18 6M6 6l12 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function EmergencyBanner() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const handleDismiss = () => {
    setIsBannerVisible(false);
  };

  return (
    <div className="">
      {isBannerVisible && (
        <motion.div
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        exit={{ y: "100vh" }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-0 text-sm left-0 w-full bg-[#181818] text-[#FFD1D1] py-4 px-6 flex justify-center items-center z-50"
      >
          <div className="flex flex-col md:flex-row-reverse items-center gap-3">
            <div className="">
              <CloseIcon onClick={handleDismiss} />
            </div>
            <p className="text-center">
              If you are in a life threatening situation, please call the
              <a href="https://988lifeline.org/" target="_blank" rel="noopener noreferrer" className="text-[#EA8B8B]">
                {" "}
                Suicide and Crisis Lifeline
              </a>
              , a free, 24-hour hotline, at <span className="text-[#EA8B8B]">988</span>. Your call will be routed to the
              crisis center near you. If your issue is an emergency, call
              <span className="text-[#EA8B8B]"> 911</span> or go to your nearest
              emergency room.
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default EmergencyBanner;
