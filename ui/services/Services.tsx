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
    <section className="pt-16 px-3 max-w-5xl w-full">
      <div className="pb-10">
        <h2 className="text-5xl text-blue-500">Personalize Your Coach Talk</h2>
      </div>
      <div className="">
        <h3 className="text-xl font-semibold">What I Specialize In</h3>
        <div className="max-w-4xl">
          <ul className="p-5 border border-teal-500 rounded-[20px] sm:columns-2 list-disc list-inside px-5 space-y-3">
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
      <h3 className="pt-5 text-xl font-semibold">Explore the services I offer</h3>
      <div className="flex pt-3 flex-col sm:flex-row gap-3 sm:gap-16">
        <button
          onClick={() => handleOnClick("counseling")}
          className={clsx(
            "rounded-[20px] w-full h-16 border border-black drop-shadow-lg",
            service === "counseling" ? "bg-gray-400" : ""
          )}
        >
          Counseling
        </button>
        <button
          onClick={() => handleOnClick("coaching")}
          className={clsx(
            "rounded-[20px] w-full h-16 border border-black drop-shadow-lg",
            service === "coaching" ? "bg-gray-400" : ""
          )}
        >
          Coaching
        </button>
        <button
          onClick={() => handleOnClick("groups")}
          className={clsx(
            "rounded-[20px] w-full h-16 border border-black drop-shadow-lg",
            service === "groups" ? "bg-gray-400" : ""
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
