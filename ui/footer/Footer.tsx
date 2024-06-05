export function Footer() {
  return (
    <section className="w-full max-w-[1600px] bg-[#181818] text-white m-2 p-10 rounded-[20px]">
      <div className="flex flex-col md:flex-row gap-10 w-full">
        <div className="flex flex-col md:flex-row gap-10 w-full">
          <div className="flex flex-col item-center justify-center w-fit place-items-center">
            <div className="h-20 w-20 bg-gray-100 rounded-full items-center flex justify-center text-black mb-2">
              logo
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-bold text-xl font-extrabold tracking-wider uppercase">
                Couch Talk
              </p>
              <p> Counseling and Coaching </p>
            </div>
            <div>
              <p className="font-light text-sm max-w-[350px] text-center mt-3">
                Our hours of operation are{" "}
                <span className="text-[#FF6392] font-medium">9am - 5pm</span>{" "}
                Central Time Monday through Friday
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <svg
            className="hidden md:block"
              width="2"
              height="220"
              viewBox="0 0 2 220"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1"
                y1="0"
                x2="1"
                y2="220"
                stroke="white"
                stroke-width=".50"
              />
            </svg>
          </div>
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gray-100 rounded-full"> </div>
              <p> +1 (900) 999 9999</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gray-100 rounded-full"> </div>
              <p> +1 (900) 999 9999</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="flex gap-3 justify-end w-full mr-20 font-light">
            <div className="text-[#ACFCD9]">
              <ul>
                <li className="text-white font-medium pb-2 pt-2">
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About Me</a>
                </li>
                <li>
                  <a href="">Services</a>
                </li>
                <li>
                  <a href="">Pricing</a>
                </li>
              </ul>
            </div>
            <div className="pt-10 text-[#ACFCD9]">
              <ul>
                <li>
                  <a href="">FAQ</a>
                </li>
                <li>
                  <a href="">My Process</a>
                </li>
                <li>
                  <a href="">Contact Office</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-[#6373FF] ml-8">
                <li className="text-white font-medium pb-2 pt-2">
                  <a href="">Emergencies</a>
                </li>
                <li>
                  <a href="">Suicide Lifeline</a>
                </li>
                <li>
                  <a href="">Hotline Number</a>
                </li>
                <li>
                  <a href="">Emergency Number</a>
                </li>
              </ul>
            </div>
          </div>
          <p className="max-w-[800px] text-sm font-light text-[#FFD1D1]">
            If you are in a life threatening situation, please call the{" "}
            <span className="text-[#EA8B8B]">Suicide and Crisis Lifeline</span>{" "}
            , a free, 24-hour hotline, at 988. Your call will be routed to the
            crisis center near you. If your issue is an emergency, call{" "}
            <span className="text-[#EA8B8B]">911</span> or go to your nearest
            emergency room.
          </p>
        </div>
      </div>
    </section>
  );
}
