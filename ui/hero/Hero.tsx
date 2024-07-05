import Image from "next/image";
import heroBackground from "@/public/assets/hero_background.png";
import pic3 from "@/public/assets/pic3_compressed.jpg";
import pic4 from "@/public/assets/pic5_compressed.jpg";
import office1 from "@/public/assets/office1.jpg";
export function Hero() {
  return (
    <section
      style={{
        backgroundImage: "url(/assets/hero_background.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionY: "bottom",
      }}
      className="w-full flex justify-center"
    >
      <div className="grid pt-[3.5rem] sm:pt-36 grid-cols-5 grid-rows-8 sm:grid-cols-4 sm:grid-rows-12 p-5 max-w-7xl max-h-max">
        <div className="col-start-1 col-end-4 row-start-4 row-end-8 row-span-4 sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-7">
          <Image
            alt="Alicia Headshot Image 1"
            className="rounded-[20px] drop-shadow-md border border-gray-200 max-h-[400px]"
            src={pic3}
            width={300}
            height={400}
            style={{ objectFit: "cover" }}
          />
          <p className="text-left pl-1 sm:pl-8">
            <span className="font-semibold">Alicia Wimsatt</span>
          </p>
        </div>
        <div className="z-10 pb-4 pt-16 sm:pt-0 sm:pb-0 col-span-5 row-start-1 row-end-4 sm:col-start-2 sm:col-span-2 sm:row-start-2 sm:row-span-6 flex justify-center flex-col items-center">
          <h1 className=" px-3 text-4xl lg1/2:text-6xl sm:text-center text-white tracking-[.2em] font-light">
            YOU & Your Mental Health{" "}
            <span className="font-extrabold text-5xl lg1/2:text-7xl">
              MATTER.
            </span>
          </h1>
          <p className=" px-3 text-md lg:font-semibold sm:text-center sm:max-w-[30rem] pt-2 text-white tracking-wider">
            Through my specializations in counseling, coaching, and groups, I am
            driven to <span className="font-bold text-lg">encourage</span> and{" "}
            <span className="font-bold text-lg">empower</span> YOU, to help
            bring fuel to YOU loving YOU, and to be your co-pilot along this
            journey as we together maneuver this road to becoming YOU.
          </p>
        </div>
        <div className="col-start-3 col-end-6 row-start-5 row-end-9  sm:col-start-4 sm:row-start-5 sm:row-span-6">
          <Image
            alt="Alicia Headshot Image 2"
            className="rounded-[20px] drop-shadow-md border border-gray-200 max-h-[400px]"
            src={pic4}
            width={300}
            height={400}
            style={{ objectFit: "cover" }}
          />
          <p className="text-center">
            MS, LPC Associate, NCC Supervised by Shawna Storey-Lovin, LPC-S
          </p>
        </div>
      </div>
    </section>
  );
}
