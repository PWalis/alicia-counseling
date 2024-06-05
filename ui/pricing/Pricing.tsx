import react from "react";

export function Pricing() {
  return (
    <section id='pricing' className="pricing-bg bg-center w-full bg-fill bg-no-repeat mt-20 mb-20">
      <div className=" px-3 flex flex-col  gap-10 justify-center items-center">
        <div className="w-full max-w-7xl">
          <h2 className="text-5xl font-light tracking-wider text-black ">
            My <span className="font-bold text-teal-500"> Pricing </span>
          </h2>
        </div>
        <div className="text-center text-black  tracking-wide mx-auto text-[18px] max-w-[700px]">
          <p>
            I want to <span className="font-bold">empower </span>as many people
            as possible, which is why I keep my pricing very{" "}
            <span className="text-teal-500">affordable</span> compared to other
            counselors.
          </p>
        </div>
        <div className="px-5 sm:px-8 pb-10 pt-10 flex flex-col justify-center rounded-[20px] text-center bg-white drop-shadow-xl items-center">
          <p className="text-lg mb-10"> Per session, </p>
          <p className="text-9xl font-semibold">$115</p>
          <p className="pt-10 font-semibold text-xl">per 50 minutes</p>
        </div>
        <div className="text-center px-2 py-3">
          <p className="font-semibold text-[#686868] mx-auto max-w-[600px]">
            For eligible families, I offer a sliding scale pricing model. For
            more information please <span className="text-[#B084CC]">call</span>{" "}
            to get your quote.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
