import react from "react";
import pricingbg from "@/public/assets/pricing-bg.png";

export function Pricing() {
  return (
    <div className="pricing-bg w-full bg-cover bg-no-repeat bg-center">
    <section className=" px-3 flex flex-col pt-96 pb-96 gap-10 justify-center items-center">
    <div className="w-full max-w-7xl">
        <h2 className="text-6xl font-light tracking-wider text-white ">My <span className="font-bold"> Pricing </span></h2>
      </div>
      <div className="p-3 text-center text-white font-semibold tracking-wider w-[800px] mx-auto text-[18px]">
        <p>
          I want to empower as many people as possible, which is why I keep my pricing very affordable compared to other counselors.  
        </p>
      </div>
      <div className="px-8 pb-10 pt-20 flex flex-col justify-center rounded-[20px] text-center bg-gray-300 drop-shadow-xl w-[350px] items-center mx-auto">
        <p className="text-9xl font-semibold">$115</p>
        <p className="pt-10 font-semibold text-xl">per 50 minutes</p>
      </div>
      <div className="text-center px-2 py-3">
        <p className="font-semibold text-[#686868] w-[600px] mx-auto">For eligible families, I offer a sliding scale pricing model. For more information please <span className="text-[#B084CC]">call</span> to get your quote. </p>
      </div>
    </section>
    </div>
  );
}
