import react from "react";
import Image from "next/image";
import { FileTabCard } from "./FileTabCard";

export function AboutMe() {
  return (
    <div
      style={{
        backgroundImage: "url(/assets/about_background.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionY: "center",
      }} className="w-full flex justify-center"
    >
      <section className="flex flex-col gap-6 sm:flex-row px-3 pb-96 pt-80">
        <div>
          <Image
            style={{
              boxShadow: "-14px 14px #888888",
            }}
            className="rounded-[20px]"
            alt="about-me-image"
            src="https://placehold.co/480x500/png"
            width={480}
            height={500}
          />
        </div>
        <FileTabCard />
      </section>
    </div>
  );
}
