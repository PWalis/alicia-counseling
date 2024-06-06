import Image from "next/image";
import { FileTabCard } from "./FileTabCard";
import pic1 from "@/public/assets/pic1.jpg";

export function AboutMe() {
  return (
    <section
    id="aboutMe"
      style={{
        backgroundImage: "url(/assets/about_background.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionY: "center",
      }}
      className="w-full  flex flex-wrap justify-center items-center pt-[8rem] px-3 flex-col gap-6 pb-[18rem] sm:pb-[15rem]"
    >
      <h2 className="max-w-7xl w-full text-5xl pt-12 mb-4 tracking-wider font-light text-center sm:text-left text-white">
        A little <span className="font-bold">About</span> Me
      </h2>
      <div className="flex w-full max-w-5xl sm:gap-3 items-center flex-col md:flex-row pb-16">
      <div className="flex flex-col">
        <div className="relative w-fit">
          <Image
            className="rounded-[20px] h-[550px] w-[480px] object-cover"
            alt="about-me-image"
            src={pic1}
          />
          <div className="absolute inset-0 rounded-[20px] pointer-events-none shadow-custom drop-shadow-md"></div>
        </div>
        <p className="mt-[2rem] sm:mt-[1.5rem] flex text-center justify-center ">MS Clinical Mental Health Counseling</p>
        </div>
        <FileTabCard />
      </div>
    </section>
  );
}
