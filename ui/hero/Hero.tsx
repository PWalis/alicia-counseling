import react from "react";
import Image from "next/image";
import heroBackground from "@/public/assets/hero_background.png"

export function Hero() {
  return (
    <div style={{
      backgroundImage: "url(/assets/hero_background.png)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPositionY: "center",
    }} className="w-full flex justify-center">
      <section className="grid pt-36 pb-36 grid-cols-5 grid-rows-10 sm:grid-cols-4 sm:grid-rows-12 p-5 max-w-7xl max-h-max">
        <div className="col-start-1 col-end-4 row-start-5 row-end-9 row-span-4 sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-7">
          <Image
            alt="placeholder-1"
            className="rounded-[20px] drop-shadow-md"
            src="https://placehold.co/400x550/png"
            width={600}
            height={400}
            layout="responsive"
          />
        </div>
        <div className="col-span-5 row-start-1 row-end-5 sm:col-start-2 sm:col-span-2 sm:row-start-6 sm:row-span-6 flex justify-center flex-col items-center pt-14 sm:p-5">
          <h1 className="text-5xl sm:text-center">
            Short Sweet <span className=" font-bold">TAGLINE</span>
          </h1>
          <p className="sm:text-center pt-2">
            Subheading emphasizing the point of the title and website
          </p>
        </div>
        <div className="col-start-3 col-end-6 row-start-6 row-end-10  sm:col-start-4 sm:row-start-7 sm:row-span-6">
          <Image
            alt="placeholder-1"
            className="rounded-[20px] drop-shadow-md"
            src="https://placehold.co/400x550/png"
            width={600}
            height={400}
          />
        </div>
      </section>
    </div>
  );
}
