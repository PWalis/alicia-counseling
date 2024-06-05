"use client";
import react, { useState } from "react";
import clsx from "clsx";

export function Services() {
  const [service, setService] = useState("counseling");

  const handleOnClick = (serviceName: string) => {
    setService(serviceName);
  };

  const specializations: Record<string, string[]> = {
    counseling: ["counseling 1"],
    coaching: ["coaching 1"],
    groups: ["groups 1"],
  };

  return (
    <section id='services' className="pt-16 px-3 w-full items-center flex flex-col">
      <div className="pb-10 w-full max-w-7xl">
        <h2 className="text-center sm:text-left text-5xl text-black font-light">Personalize Your <span className="font-bold text-blue-500">Couch Talk</span></h2>
      </div>
      <div className="">
        <h3 className="text-center sm:text-left text-2xl pb-2">What I <span className="text-blue-500 font-semibold">Specialize</span> In:</h3>
        <div className="max-w-6xl">
          <ul className="p-10 border border-blue-500 rounded-[20px] sm:columns-2 list-disc list-inside px-10 space-y-2">
            <li>Mood disorders</li>
            <li>Depression</li>
            <li>Anxiety</li>
            <li>Parenting neurodivergent children</li>
            <li>Support for teens</li>
            <li>Women's health during and after pregnancy</li>
            <li>Postpartum depression</li>
            <li>Step parent relationships</li>
            <li>Therapy for therapists</li>
            <li>Family members to those struggling with addiction</li>
            <li>People pleasing behaviors and boundary setting</li>
            <li>Grief</li>
          </ul>
        </div>
      </div>
      <h3 className="pt-5 text-xl">Explore The <span className="text-blue-500 font-bold">Services</span> I Offer</h3>
      <div className="flex pt-3 flex-col sm:flex-row gap-3 w-full max-w-4xl">
        <button
          onClick={() => handleOnClick("counseling")}
          className={clsx(
            "rounded-[15px] w-full h-20 border border-blue-400 drop-shadow-md",
            service === "counseling" ? "bg-blue-100 font-semibold" : "bg-white"
          )}
        >
          Counseling
        </button>
        <button
          onClick={() => handleOnClick("coaching")}
          className={clsx(
            "rounded-[15px] w-full h-20 border border-pink-400 drop-shadow-md",
            service === "coaching" ? "bg-pink-100 font-semibold" : "bg-white"
          )}
        >
          Coaching
        </button>
        <button
          onClick={() => handleOnClick("groups")}
          className={clsx(
            "rounded-[15px] w-full h-20  border border-teal-400 drop-shadow-md",
            service === "groups" ? "bg-teal-100 font-semibold" : "bg-white"
          )}
        >
          Groups
        </button>
      </div>
      <div className="flex flex-col gap-3 text-center justify-center pt-5">
        {specializations[service].map((specialization) => (
          <p>{specialization}</p>
        ))}
      </div>
    </section>
  );
}
