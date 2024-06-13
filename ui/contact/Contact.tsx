import officepic1 from "../../public/assets/office1.jpg";
import Image from "next/image";
import officepic2 from "../../public/assets/office2.jpg";

export function Contact() {
  return (
    <section
      id="contact"
      className="flex w-full gap-5 items-center justify-center flex-col p-3 mb-20 pt-[8rem]"
    >
      <div className="w-full max-w-7xl">
        <h2 className="text-center sm:text-left text-5xl font-light tracking-wider mb-5">
          <span className="text-purple-400 font-bold">Contact </span>The Office
        </h2>
      </div>
      <div className="flex flex-col md:flex-row px-3 items-center gap-10 w-full justify-center">
        <div className="flex flex-col w-full max-w-[500px] place-content-center justify-center items-center h-full">
          <div className="flex flex-col items-center text-center mb-10">
            <div className="h-16 w-16 rounded-full">
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
                    d="M7.43526 1.25H16.5647C17.1346 1.24998 17.6186 1.24997 18.0185 1.29132C18.4443 1.33534 18.8378 1.43094 19.2096 1.66071C19.5814 1.89048 19.8429 2.19971 20.0727 2.56088C20.2885 2.9001 20.5049 3.33297 20.7598 3.8428L20.7763 3.87574C20.786 3.89518 20.7949 3.91504 20.8029 3.93526L22.2065 7.4834C22.3735 7.90559 22.5586 8.4323 22.6127 8.97128C22.6681 9.52258 22.5921 10.1541 22.1601 10.7019C21.8068 11.15 21.3155 11.4863 20.75 11.6463V21.25H22C22.4142 21.25 22.75 21.5858 22.75 22C22.75 22.4142 22.4142 22.75 22 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22C1.25 21.5858 1.58579 21.25 2 21.25H3.25V11.6464C2.68446 11.4863 2.19312 11.15 1.83975 10.7019C1.40779 10.1541 1.33182 9.52257 1.38718 8.97127C1.4413 8.43229 1.62639 7.90559 1.7934 7.4834L3.19701 3.93526C3.20501 3.91504 3.21388 3.89518 3.22361 3.87574L3.2401 3.84275C3.49498 3.33295 3.71139 2.90009 3.92723 2.56088C4.15704 2.19971 4.41853 1.89048 4.79031 1.66071C5.16208 1.43094 5.55561 1.33534 5.98142 1.29132C6.38134 1.24997 6.86529 1.24998 7.43526 1.25ZM17.9999 10.8875C18.3359 11.2433 18.7658 11.5096 19.25 11.6465V21.25H15.25L15.25 18.4678C15.25 18.028 15.25 17.6486 15.2218 17.3374C15.192 17.0082 15.1259 16.6822 14.9486 16.375C14.7511 16.033 14.467 15.7489 14.125 15.5514C13.8178 15.3741 13.4918 15.308 13.1627 15.2782C12.8514 15.25 12.472 15.25 12.0322 15.25H11.9678C11.528 15.25 11.1486 15.25 10.8373 15.2782C10.5082 15.308 10.1822 15.3741 9.875 15.5514C9.53296 15.7489 9.24892 16.033 9.05144 16.375C8.87407 16.6822 8.80802 17.0082 8.77818 17.3374C8.74997 17.6486 8.74998 18.028 8.75 18.4677L8.75 21.25H4.75V11.6465C5.23413 11.5095 5.66398 11.2433 5.99992 10.8875C6.5013 11.4186 7.2119 11.75 7.99991 11.75C8.78793 11.75 9.49853 11.4186 9.99992 10.8875C10.5013 11.4186 11.2119 11.75 11.9999 11.75C12.7879 11.75 13.4985 11.4186 13.9999 10.8875C14.5013 11.4186 15.2119 11.75 15.9999 11.75C16.7879 11.75 17.4985 11.4186 17.9999 10.8875ZM10.25 21.25H13.75V18.5C13.75 18.0189 13.7493 17.7082 13.7279 17.4727C13.7075 17.2476 13.6731 17.1659 13.6495 17.125C13.5837 17.011 13.489 16.9163 13.375 16.8505C13.3341 16.8269 13.2524 16.7925 13.0273 16.7721C12.7918 16.7507 12.4811 16.75 12 16.75C11.5189 16.75 11.2082 16.7507 10.9727 16.7721C10.7476 16.7925 10.6659 16.8269 10.625 16.8505C10.511 16.9163 10.4163 17.011 10.3505 17.125C10.3269 17.1659 10.2925 17.2476 10.2721 17.4727C10.2507 17.7082 10.25 18.0189 10.25 18.5V21.25ZM6.74991 9C6.74991 9.69036 7.30956 10.25 7.99991 10.25C8.69027 10.25 9.24991 9.69036 9.24991 9C9.24991 8.58579 9.5857 8.25 9.99991 8.25C10.4141 8.25 10.7499 8.58579 10.7499 9C10.7499 9.69036 11.3096 10.25 11.9999 10.25C12.6903 10.25 13.2499 9.69036 13.2499 9C13.2499 8.58579 13.5857 8.25 13.9999 8.25C14.4141 8.25 14.7499 8.58579 14.7499 9C14.7499 9.69036 15.3096 10.25 15.9999 10.25C16.6903 10.25 17.2499 9.69036 17.2499 9C17.2499 8.58579 17.5857 8.25 17.9999 8.25C18.4141 8.25 18.7499 8.58579 18.7499 9C18.7499 9.69036 19.3096 10.25 19.9999 10.25C20.3979 10.25 20.7522 10.0649 20.9823 9.77305C21.0962 9.62859 21.1513 9.43094 21.1202 9.12114C21.0879 8.79903 20.969 8.43275 20.8117 8.03518L19.4201 4.51739C19.1524 3.98204 18.9735 3.62749 18.8071 3.36612C18.6472 3.1147 18.5325 3.00562 18.421 2.93669C18.3095 2.86776 18.1606 2.81401 17.8642 2.78336C17.5505 2.75093 17.1446 2.75 16.5278 2.75H7.47214C6.85533 2.75 6.4494 2.75093 6.13569 2.78336C5.83927 2.81401 5.69044 2.86776 5.5789 2.93669C5.46737 3.00562 5.35274 3.1147 5.19276 3.36612C5.02646 3.62749 4.84755 3.98204 4.57983 4.51739L3.18823 8.03518C3.03095 8.43275 2.91202 8.79903 2.87967 9.12115C2.84856 9.43095 2.90366 9.62861 3.01759 9.77307C3.2477 10.0649 3.60196 10.25 3.99991 10.25C4.69027 10.25 5.24991 9.69036 5.24991 9C5.24991 8.58579 5.5857 8.25 5.99991 8.25C6.41413 8.25 6.74991 8.58579 6.74991 9Z"
                    fill="#000000"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <h3 className=" font-semibold text-purple-400 text-lg">Location</h3>
            <p className="">100 W. Walnut Street </p> <p>Decatur, Texas 76234</p>
          </div>
          <div className="w-full h-[550px] sm:h-[550px] flex flex-col justify-center border rounded-[25px] p-10 bg-white drop-shadow-md">
          <div className="max-h-[200px] max-w-[300px] w-fit rounded-xl bg-gray-100 mb-10">
            <Image alt="Picture of the office" style={{borderRadius: "20px", boxShadow: "12px -12px rgba(0, 77, 255, 0.3)"}} width={300} height={200} src={officepic1}></Image>
            </div>
            <div>
              <p className="font-semibold text-lg pt-3">Visit The Office</p>
              <p className="mb-1">
                <span className="font-bold">Office:</span> 100 W. Walnut Street, Decatur, Texas 76234
              </p>
              <p><span className="font-bold">Private Entrance:</span> 201 N. Trinity, Decatur, Texas 76234</p>
              <p className="text-blue-300 mt-2 mb-2 tracking-wide">
                Appointments only, no walk-ins
              </p>
              <a href="https://maps.app.goo.gl/PmBFxvqFiDuWAWXW8" target="_blank" className="flex h-16 w-48 py-5 px-10 btn-grad2 items-center justify-center rounded-[20px] drop-shadow-md">
                Get Directions
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-[500px]  place-content-center justify-center items-center">
          <div className="flex flex-col items-center text-center mb-10">
            <div className="h-16 w-16">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.25 2C11.25 1.58579 11.5858 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 11.5858 1.58579 11.25 2 11.25C2.41421 11.25 2.75 11.5858 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75C11.5858 2.75 11.25 2.41421 11.25 2ZM12 8.25C12.4142 8.25 12.75 8.58579 12.75 9V12.25H16C16.4142 12.25 16.75 12.5858 16.75 13C16.75 13.4142 16.4142 13.75 16 13.75H12C11.5858 13.75 11.25 13.4142 11.25 13V9C11.25 8.58579 11.5858 8.25 12 8.25Z"
                    fill="#000000"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.09958 2.39754C9.24874 2.78396 9.05641 3.21814 8.66999 3.36731C8.52855 3.42191 8.38879 3.47988 8.2508 3.54114C7.87221 3.70921 7.42906 3.53856 7.261 3.15997C7.09293 2.78139 7.26358 2.33824 7.64217 2.17017C7.80267 2.09892 7.96526 2.03147 8.1298 1.96795C8.51623 1.81878 8.95041 2.01112 9.09958 2.39754ZM5.6477 4.24026C5.93337 4.54021 5.92178 5.01495 5.62183 5.30061C5.51216 5.40506 5.40505 5.51216 5.30061 5.62183C5.01495 5.92178 4.54021 5.93337 4.24026 5.6477C3.94031 5.36204 3.92873 4.88731 4.21439 4.58736C4.33566 4.46003 4.46002 4.33566 4.58736 4.21439C4.88731 3.92873 5.36204 3.94031 5.6477 4.24026ZM3.15997 7.261C3.53856 7.42907 3.70921 7.87222 3.54114 8.2508C3.47988 8.38879 3.42191 8.52855 3.36731 8.66999C3.21814 9.05641 2.78396 9.24874 2.39754 9.09958C2.01112 8.95041 1.81878 8.51623 1.96795 8.12981C2.03147 7.96526 2.09892 7.80267 2.17017 7.64217C2.33824 7.26358 2.78139 7.09293 3.15997 7.261Z"
                    fill="#000000"
                  ></path>
                </g>
              </svg>
            </div>
            <h3 className=" font-semibold text-purple-400 text-lg">Hours</h3>
            <p className="">Monday - Friday </p>
            <p>9am - 4pm</p>
          </div>
          <div className="w-full border h-[550px] sm:h-[550px] rounded-[25px] flex flex-col justify-center p-10 bg-white drop-shadow-md">
            <div className="max-h-[200px] max-w-[300px] rounded-xl bg-gray-100 mb-10 w-fit">
            <Image alt="Picture of the office" style={{borderRadius: "20px", boxShadow: "12px -12px rgba(245, 40, 145, 0.3)"}} width={300} height={200} src={officepic2}></Image>
            </div>
            <div>
              <p className="font-semibold text-lg pt-3">Chat With Me</p>
              <p>+1 (940) 464-1112</p>
              <p className=" text-pink-300 mt-2 mb-2 tracking-wide max-w-[400px]">
                Calls are answered and returned Monday-Friday between the hours of 9am-4pm
              </p>
              <a
                href="tel:9404641112"
                className="h-16 w-48 px-10 pt-5 btn-grad rounded-[20px] flex items-center justify-center drop-shadow-md"
              >
                Call My Office
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
