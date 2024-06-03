import react from "react";
import Image from "next/image";

export function Process() {
  return (
    <section>
      <h2>How to set an Appointment</h2>
      <p>
        I know how difficult it can be to ask for help. I'm here to make the
        process easy
      </p>
      <div className="flex flex-col sm:flex-row gap-12">
        <div
          style={{
            boxShadow: "-14px 14px #FFEC8D",
          }}
          className="pt-5 pb-3 px-2 border border-gray-500 rounded-[20px] max-w-64 flex flex-col justify-center items-center"
        >
          <Image
            alt="schedule"
            src="https://placehold.co/100x100/png"
            width={100}
            height={100}
          />
          <p className="text-xl font-semibold text-[#6373FF] text-center pt-3">
            Schedule A Consultation
          </p>
          <p className="text-center text-sm pt-3">
            Schedule your 15 minute consultation where we'll discuss your needs.
          </p>
          <p className="pt-5">{"(903)999-9903"}</p>
        </div>
        <div
          style={{
            boxShadow: "-14px 14px #FFEC8D",
          }}
          className="pt-5 pb-3 px-2 border border-gray-500 rounded-[20px] max-w-64 flex flex-col justify-center items-center"
        >
          <Image
            alt="schedule"
            src="https://placehold.co/100x100/png"
            width={100}
            height={100}
          />
          <p className="text-xl font-semibold text-[#6373FF] text-center pt-3">
            Sign into your Personal Portal
          </p>
          <p className="px-2 text-center text-sm pt-5">
            {"Do the boring paperwork you only have to do this once :)"}
          </p>
          <p className="pt-5">View the Portal</p>
        </div>
        <div
          style={{
            boxShadow: "-14px 14px #FFEC8D",
          }}
          className="pt-5 pb-3 px-2 border border-gray-500 rounded-[20px] max-w-64 flex flex-col justify-center items-center"
        >
          <Image
            alt="schedule"
            src="https://placehold.co/100x100/png"
            width={100}
            height={100}
          />
          <p className="text-xl font-semibold text-[#6373FF] text-center pt-3">
            Attend Your First Appointment
          </p>
          <p className="px-1 text-center text-sm pt-5">
            Take a seat on my comfy coach and let's get you taken care of.
          </p>
          <p className="pt-5">View FAQ</p>
        </div>
      </div>
    </section>
  );
}
