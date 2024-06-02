'use client';
import react, { useState } from "react";
import clsx from 'clsx';

export function Services() {
  const [service, setService] = useState("counseling");

  const handleOnClick = (serviceName: string) => {
    setService(serviceName);
  };

  const specializations: Record<string, string[]> = {
    counseling: ['counseling 1', 'counseling 2', 'counseling 3'],
    coaching: ['coaching 1', 'coaching 2', 'coaching 3'],
    groups: ['groups 1', 'groups 2', 'groups 3'],
  };

  return (
    <section className="pt-16 px-3 max-w-5xl w-full">
      <div className="pb-10">
        <h2 className="text-5xl text-center text-blue-500">Services</h2>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-16">
        <button
          onClick={() => handleOnClick("counseling")}
          className={clsx("rounded-[20px] w-full h-16 border border-black drop-shadow-lg", service === "counseling" ? 'bg-gray-400': '')}
        >
          Counseling
        </button>
        <button
          onClick={() => handleOnClick("coaching")}
          className={clsx("rounded-[20px] w-full h-16 border border-black drop-shadow-lg", service === "coaching" ? 'bg-gray-400': '')}
        >
          Coaching
        </button>
        <button
          onClick={() => handleOnClick("groups")}
          className={clsx("rounded-[20px] w-full h-16 border border-black drop-shadow-lg", service === "groups" ? 'bg-gray-400': '')}
        >
          Groups
        </button>
      </div>
      <div className="px-5 py-3 h-fit text-center">
        <p>
          My counseling services Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dicta, aliquid?
        </p>
      </div>
      <div className="py-3 text-center">
        <h3 className="text-2xl font-semibold">Counseling Specializations</h3>
      </div>
      <div className="flex flex-col gap-3">{specializations[service].map((specialization) => <p>{specialization}</p>)}</div>
    </section>
  );
}
