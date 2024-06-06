import Image from "next/image";
import heroBackground from "@/public/assets/hero_background.png"
import pic3 from "@/public/assets/pic3.jpg";
import pic4 from "@/public/assets/pic5.jpg";
import office1 from "@/public/assets/office1.jpg";
export function Hero() {
  return (
    <section style={{
      backgroundImage: "url(/assets/hero_background.png)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPositionY: "bottom",
    }} className="w-full flex justify-center">
      <div className="grid pt-[3.5rem] sm:pt-36 pb-36 grid-cols-5 grid-rows-10 sm:grid-cols-4 sm:grid-rows-12 p-5 max-w-7xl max-h-max">
        <div className="col-start-1 col-end-4 row-start-4 row-end-8 row-span-4 sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-7">
          <Image
            alt="placeholder-1"
            className="rounded-[20px] drop-shadow-md border border-gray-200 max-h-[400px]"
            src={pic3}
            width={300}
            height={400}
            style={{objectFit: "cover"}}
          />
          <p className="text-left">Meet  <span className="font-bold"> Alicia, </span></p>
        </div>
        <div className="z-10 pb-4 pt-16 sm:pt-0 sm:pb-0 col-span-5 row-start-1 row-end-4 sm:col-start-2 sm:col-span-2 sm:row-start-2 sm:row-span-6 flex justify-center flex-col items-center">
          <h1 className=" px-3 text-4xl lg1/2:text-6xl sm:text-center text-white tracking-[.2em] font-light">
            Your Mental Health <span className="font-extrabold text-5xl lg1/2:text-7xl">MATTERS.</span>
          </h1>
          <p className=" px-3 text-sm lg:text-md lg:font-semibold sm:text-center sm:max-w-[28rem] pt-2 text-white tracking-wide">
            I am here to help you flourish through my coaching, counseling or group specializations to make sure you get the treatment that you deserve.
          </p>
        </div>
        <div className="col-start-3 col-end-6 row-start-5 row-end-9  sm:col-start-4 sm:row-start-5 sm:row-span-6">
          <Image
            alt="placeholder-1"
            className="rounded-[20px] drop-shadow-md border border-gray-200 max-h-[400px]"
            src={pic4}
            width={300}
            height={400}
            style={{objectFit: "cover"}}
          />
          <p className="text-center"> MS Clinical Mental Health Counseling </p>
        </div>
      </div>
    </section>
  );
}
