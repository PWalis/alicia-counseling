export function Contact() {
  return (
    <section id='contact' className="flex w-full gap-5 items-center justify-center flex-col p-3 mb-20">
      <div className="w-full max-w-7xl">
        <h2 className="text-center sm:text-left text-5xl font-light tracking-wider mb-5">
          <span className="text-yellow-400 font-bold">Contact </span>The Office
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row px-3 items-center gap-10 w-full justify-center">
        <div className="flex flex-col w-full max-w-[400px] place-content-center justify-center items-center">
          <div className="flex flex-col items-center text-center mb-10">
            <div className="flex justify-center items-center text-center h-10 w-10 rounded-full bg-gray-100"> circle </div>
            <h3 className=" font-semibold text-yellow-400 text-lg"> Location </h3>
            <p className="">302 Office Address, State Zip</p>
          </div>
          <div className="w-full h-[370px] border rounded-[25px] p-10 bg-white drop-shadow-md">
            <div className="h-20 w-20 rounded-xl bg-gray-100 mb-10"></div>
            <p className="font-semibold text-lg">Visit The Office</p>
            <p> 302 Office Address, State Zip</p>
            <p className="text-blue-300 mt-2 mb-2 tracking-wide"> Appointments only, no walk-ins </p>
            <button className="h-16 w-48 px-10 bg-blue-200 rounded-[20px] drop-shadow-md"> Get Directions </button>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-[400px] place-content-center justify-center items-center">
          <div className="flex flex-col items-center text-center mb-10">
            <div className="flex justify-center items-center text-center h-10 w-10 rounded-full bg-gray-100"> circle </div>
            <h3 className=" font-semibold text-yellow-400 text-lg"> Location </h3>
            <p className="">302 Office Address, State Zip</p>
          </div>
          <div className="w-full h-[370px] border rounded-[25px] p-10 bg-white drop-shadow-md">
            <div className="h-20 w-20 rounded-xl bg-gray-100 mb-10"></div>
            <p className="font-semibold text-lg">Visit The Office</p>
            <p> 302 Office Address, State Zip</p>
            <p className="text-blue-300 mt-2 mb-2 tracking-wide"> Appointments only, no walk-ins </p>
            <button className="h-16 w-48 px-10 bg-blue-200 rounded-[20px] drop-shadow-md"> Get Directions </button>
          </div>
      </div>
      </div>
    </section>
  );
}
