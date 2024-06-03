import react from "react";
import Image from "next/image";
import { FileTabCard } from "./FileTabCard";
import pic1 from "@/public/assets/pic1.jpg";

export function AboutMe() {
  return (
    <div
      style={{
        backgroundImage: "url(/assets/about_background.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionY: "center",
      }}
      className="w-full flex justify-center pt-24 sm:pt-80 px-14"
    >
      <section className="flex flex-col gap-6 md:flex-row pb-96">
        <div className="relative">
          <div className="relative">
            <h2 className="absolute min-w-[340px] -left-5 -top-12 text-4xl font-semibold tracking-wider text-white">
              A little About Me
            </h2>
            <Image
              className="rounded-[20px] h-[500px] w-[480px] object-cover"
              alt="about-me-image"
              src={pic1}
            />
            <div className="absolute inset-0 rounded-[20px] pointer-events-none shadow-custom"></div>
          </div>
        </div>
        <FileTabCard />
      </section>
    </div>
  );
}
