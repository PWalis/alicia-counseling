export function Pricing() {
  return (
    <section
      id="pricing"
      className="pricing-bg w-full bg-fill bg-no-repeat pt-[8rem] mb-20"
    >
      <div className=" px-3 flex flex-col  gap-10 justify-center items-center">
        <div className="w-full max-w-7xl">
          <h2 className="text-5xl font-light tracking-wider text-black text-center sm:text-left ">
            My <span className="font-bold text-teal-500"> Pricing </span>
          </h2>
        </div>
        <div className="text-center text-black  tracking-wide mx-auto text-[18px] max-w-[700px] mb-6">
          <p>
            I want to <span className="font-semibold">empower </span> as many people as possible and
            bring affordable and accessible mental health care to my rural
            community; This is why I offer lower cost mental health care and my
            pricing is competitive! Don't let financial constraints keep you
            from tackling your mental health care needs and reach out to me
            about sliding scale options! <span className="text-teal-500">I want to help!</span>
          </p>
        </div>
        <div className="px-5 sm:px-8 pb-10 pt-10 flex flex-col justify-center rounded-[20px] text-center bg-white drop-shadow-xl items-center">
          <p className="text-lg mb-10">  </p>
          <p className="text-9xl font-semibold">$115</p>
          <p className="pt-10 font-semibold text-xl">per 50 minutes</p>
        </div>
        <div className="text-center px-2 py-3">
          <p className="font-semibold text-black mx-auto max-w-[600px]">
            For more information on the sliding scale model please{" "}
            <span className="text-[#B084CC] text-lg font-bold">call </span>
            to see if you qualify.
          </p>
        </div>
      </div>
    </section>
  );
}
