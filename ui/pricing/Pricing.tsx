import react from "react";

export function Pricing() {
  return (
    <section className="pt-16 px-3 flex flex-col items-center">
      <h2 className="text-4xl px-3 pb-4 text-center font-semibold">Pricing</h2>
      <div className="p-3 text-center">
        <p>
          I want to empower as many people as possible, which is why I keep my pricing very affordable compared to other counselors.  
        </p>
      </div>
      <div className="px-8 pb-10 pt-20 flex flex-col justify-center rounded-[20px] text-center bg-gray-300 drop-shadow-xl">
        <p className="text-9xl font-semibold">$115</p>
        <p className="pt-10 font-semibold text-xl">per 50 minutes</p>
      </div>
      <div className="text-center px-2 py-3">
        <p className="font-semibold">For eligible families, I offer a sliding scale pricing model. For more information please <span className="text-purple-500">call</span> to get your quote. </p>
      </div>
    </section>
  );
}
