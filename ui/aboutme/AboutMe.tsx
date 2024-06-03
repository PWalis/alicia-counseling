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
      className="w-full flex justify-center pt-80"
    >
      <h2 className="absolute left-80 text-4xl font-semibold tracking-wider text-white">
        A little About Me
      </h2>
      <section className="flex flex-col gap-6 sm:flex-row px-3 pb-96">
        <div className="relative h-[500px] w-[480px]">
          <div className="relative">
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
