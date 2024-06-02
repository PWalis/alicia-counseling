import react from "react";

export function ClinicalApproach() {
  return (
    <section className="flex w-full gap-5 items-center flex-col p-5">
      <div className="w-full max-w-7xl">
        <h2 className="text-4xl font-semibold">My Clinical <span className="text-purple-500">Approach</span></h2>
      </div>
      <div className="py-6 px-5 sm:py-10 sm:px-12 bg-gray-400 max-w-4xl mx-auto rounded-[20px]">
        <div className="font-medium py-3 px-5 rounded-[20px] bg-gray-200 flex flex-col gap-4">
          <p>
            <span className="text-purple-500">
              One thing for sure is, I do not operate on a “textbook” approach.
            </span>{" "}
            I pride myself on being{" "}
            <span className="font-bold text-lg">flexible</span>,{" "}
            <span className="font-bold text-lg">compassionate</span>,{" "}
            <span className="font-bold text-lg">unique</span>, and{" "}
            <span className="font-bold text-lg">down to earth</span> while in
            session with my clients. I remain true to who I am and encourage you
            to do the same. I tend to take a casual, direct, and comfy approach.
            By comfy, I mean come as you are and get comfortable on the couch
            and let’s hash this stuff out!
          </p>
          <p>
            You won’t find me in fancy business clothes, I don’t have a
            “traditional counseling office”, and don’t worry if an occasional
            curse word finds its way into session,{" "}
            <span className="text-purple-500">you will not be judged!</span>{" "}
            What I do offer is a non-judgmental zone, a safe space, a place
            where you are appreciated, a place where you can be YOU, a bright
            place to bring some color into your life, and a place where I hope
            you leave feeling empowered!
          </p>
          <p>
            While I do typically prepare for sessions and have a “game plan” of
            how I would like to help you meet your goals, you are the driver in
            this journey, and we will stop at whatever stop sign we need to you
            just halt those brakes as you see fit. My approach involves{" "}
            <span className="text-purple-500">being observant</span>,{" "}
            <span className="text-purple-500">being comfortable</span>, and{" "}
            <span className="text-purple-500">
              being your biggest cheerleader
            </span>{" "}
            in tackling those challenges and goals because YOU’VE TOTALLY GOT
            THIS! Now, go do the dang thing!
          </p>
        </div>
      </div>
    </section>
  );
}