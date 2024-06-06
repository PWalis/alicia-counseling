import logo from "@/public/assets/logo.png";
import Image from "next/image";

export function Footer() {
  return (
    <section className="w-full max-w-[1600px] text-white m-2 lg:p-10  mb-10 px-2">
      <div className="bg-[#181818] rounded-[20px] p-5  flex flex-col lg:flex-row gap-10 w-full justify-center">
        <div className="flex flex-col md:flex-row gap-10 w-full place-items-center lg:justify-start justify-center">
          <div className="flex flex-col item-center justify-center w-fit place-items-center">
            <div className="h-20 w-20 bg-gray-100 rounded-full items-center flex justify-center text-black mb-2">
              <Image alt="logo" src={logo} width={200} height={200}></Image>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-bold text-xl font-extrabold tracking-wider uppercase">
                Couch Talk
              </p>
              <p> Counseling and Coaching </p>
            </div>
            <div>
              <p className="font-light text-sm max-w-[350px] text-center mt-3">
                Our hours of operation are
                <span className="text-[#FF6392] font-medium"> 9am - 5pm </span>
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
          <div className="flex flex-col lg:justify-center gap-5">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.25 8.51464C4.25 4.45264 7.77146 1.25 12 1.25C16.2285 1.25 19.75 4.45264 19.75 8.51464C19.75 12.3258 17.3871 16.8 13.5748 18.4292C12.574 18.8569 11.426 18.8569 10.4252 18.4292C6.61289 16.8 4.25 12.3258 4.25 8.51464ZM12 2.75C8.49655 2.75 5.75 5.38076 5.75 8.51464C5.75 11.843 7.85543 15.6998 11.0147 17.0499C11.639 17.3167 12.361 17.3167 12.9853 17.0499C16.1446 15.6998 18.25 11.843 18.25 8.51464C18.25 5.38076 15.5034 2.75 12 2.75ZM12 7.75C11.3096 7.75 10.75 8.30964 10.75 9C10.75 9.69036 11.3096 10.25 12 10.25C12.6904 10.25 13.25 9.69036 13.25 9C13.25 8.30964 12.6904 7.75 12 7.75ZM9.25 9C9.25 7.48122 10.4812 6.25 12 6.25C13.5188 6.25 14.75 7.48122 14.75 9C14.75 10.5188 13.5188 11.75 12 11.75C10.4812 11.75 9.25 10.5188 9.25 9ZM3.59541 14.9966C3.87344 15.3036 3.84992 15.7779 3.54288 16.0559C2.97519 16.57 2.75 17.0621 2.75 17.5C2.75 18.2637 3.47401 19.2048 5.23671 19.998C6.929 20.7596 9.31951 21.25 12 21.25C14.6805 21.25 17.071 20.7596 18.7633 19.998C20.526 19.2048 21.25 18.2637 21.25 17.5C21.25 17.0621 21.0248 16.57 20.4571 16.0559C20.1501 15.7779 20.1266 15.3036 20.4046 14.9966C20.6826 14.6895 21.1569 14.666 21.4639 14.9441C22.227 15.635 22.75 16.5011 22.75 17.5C22.75 19.2216 21.2354 20.5305 19.3788 21.3659C17.4518 22.2331 14.8424 22.75 12 22.75C9.15764 22.75 6.54815 22.2331 4.62116 21.3659C2.76457 20.5305 1.25 19.2216 1.25 17.5C1.25 16.5011 1.77305 15.635 2.53605 14.9441C2.84309 14.666 3.31738 14.6895 3.59541 14.9966Z"
                      fill="#ffffff"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <p> 302 Office Address, State Zip </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.00745 3.40686C7.68752 1.72679 10.5227 1.85451 11.6925 3.95063L12.3415 5.11356C13.1054 6.48238 12.7799 8.20946 11.6616 9.34143C11.6467 9.36184 11.5677 9.47677 11.5579 9.67758C11.5454 9.93391 11.6364 10.5267 12.5548 11.4451C13.4729 12.3632 14.0656 12.4545 14.3221 12.442C14.5231 12.4322 14.6381 12.3533 14.6585 12.3383C15.7905 11.2201 17.5176 10.8945 18.8864 11.6584L20.0493 12.3075C22.1454 13.4773 22.2731 16.3124 20.5931 17.9925C19.6944 18.8911 18.4995 19.6896 17.0953 19.7429C15.0144 19.8218 11.5591 19.2844 8.13735 15.8626C4.71556 12.4408 4.17818 8.98556 4.25706 6.90463C4.3103 5.50044 5.10879 4.30552 6.00745 3.40686ZM10.3827 4.68163C9.78363 3.60828 8.17394 3.36169 7.06811 4.46752C6.29276 5.24287 5.7887 6.09868 5.75599 6.96146C5.6902 8.6968 6.11864 11.7226 9.19801 14.8019C12.2774 17.8813 15.3031 18.3097 17.0385 18.2439C17.9013 18.2112 18.7571 17.7072 19.5324 16.9318C20.6382 15.826 20.3916 14.2163 19.3183 13.6173L18.1554 12.9683C17.432 12.5645 16.4158 12.7023 15.7025 13.4156L15.7023 13.4158C15.6322 13.4858 15.1864 13.9018 14.395 13.9403C13.5847 13.9797 12.604 13.6156 11.4942 12.5058C10.384 11.3956 10.02 10.4146 10.0597 9.60423C10.0985 8.81271 10.5147 8.36711 10.5843 8.29746L10.5844 8.29743C11.2977 7.58411 11.4354 6.56797 11.0317 5.84456L10.3827 4.68163Z"
                      fill="#ffffff"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <p> +1 (900) 999 9999</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center place-items-center lg:justify-start lg:place-items-start gap-10">
          <div className="flex gap-3  w-full lg:mr-20 font-light place-content-center lg:place-content-start">
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
            If you are in a life threatening situation, please call the
            <span className="text-[#EA8B8B]"> Suicide and Crisis Lifeline</span>,
            a free, 24-hour hotline, at 988. Your call will be routed to the
            crisis center near you. If your issue is an emergency, call
            <span className="text-[#EA8B8B]"> 911</span> or go to your nearest
            emergency room.
          </p>
        </div>
      </div>
    </section>
  );
}
