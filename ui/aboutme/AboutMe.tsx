import react from "react";
import Image from "next/image";
import { FileTabCard } from "./FileTabCard";
import pic1 from "@/public/assets/pic1.jpg";

export function AboutMe() {
  return (
    <section
      style={{
        backgroundImage: "url(/assets/about_background.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionY: "center",
      }}
      className="w-full flex flex-wrap justify-center items-center pt-12 sm:pt-80 px-3 flex-col gap-6 pb-96"
    >
      <h2 className="max-w-7xl w-full text-5xl font-semibold pt-12 tracking-wider text-neutral-900 text-center sm:text-left sm:text-white">
        A little About Me
      </h2>
      <div className="flex w-full max-w-5xl sm:gap-3 items-center flex-col md:flex-row pb-16">
        <div className="relative w-fit">
          <Image
            className="rounded-[20px] h-[550px] w-[480px] object-cover"
            alt="about-me-image"
            src={pic1}
          />
          <div className="absolute inset-0 rounded-[20px] pointer-events-none shadow-custom"></div>
        </div>
        <FileTabCard />
      </div>
    </section>
  );
}
