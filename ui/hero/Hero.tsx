import react from "react";
import Image from "next/image";
import heroBackground from "@/public/assets/hero_background.png"

export function Hero() {
  return (
    <div style={{
      backgroundImage: "url(/assets/hero_background.png)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPositionY: "bottom",
    }} className="w-full flex justify-center">
      <section className="grid pt-36 pb-36 grid-cols-5 grid-rows-10 sm:grid-cols-4 sm:grid-rows-12 p-5 max-w-7xl max-h-max">
        <div className="col-start-1 col-end-4 row-start-5 row-end-9 row-span-4 sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-7">
          <Image
            alt="placeholder-1"
            className="rounded-[20px] drop-shadow-md"
            src="https://placehold.co/300x400/png"
            width={300}
            height={400}
            layout="responsive"
          />
        </div>
        <div className="pb-4 sm:pb-0 col-span-5 row-start-1 row-end-5 sm:col-start-2 sm:col-span-2 sm:row-start-3 sm:row-span-6 flex justify-center flex-col items-center pt-14 sm:p-5">
          <h1 className="text-7xl sm:text-center text-white">
            Your Mental health <span className=" font-bold">MATTERS.</span>
          </h1>
          <p className="sm:text-center sm:max-w-80 pt-2 text-white">
            I am here to help you flourish through our coaching, counseling or group specializations.
          </p>
        </div>
        <div className="col-start-3 col-end-6 row-start-6 row-end-10  sm:col-start-4 sm:row-start-5 sm:row-span-6">
          <Image
            alt="placeholder-1"
            className="rounded-[20px] drop-shadow-md"
            src="https://placehold.co/300x400/png"
            width={300}
            height={400}
          />
        </div>
      </section>
    </div>
  );
}
