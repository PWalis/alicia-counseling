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
      <div className="flex flex-col sm:flex-row px-3 items-center gap-10 w-full justify-center">
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
          <div className="w-full h-full min-h-[400px] flex flex-col justify-between border rounded-[25px] p-10 bg-white drop-shadow-md">
            <div className="h-20 w-20  rounded-xl bg-gray-100 p-2">
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
                    d="M17.3864 2.92637C16.0864 2.75159 14.3782 2.75 12 2.75C9.62178 2.75 7.91356 2.75159 6.61358 2.92637C5.33517 3.09825 4.56445 3.42514 3.9948 3.9948C3.42514 4.56445 3.09825 5.33517 2.92637 6.61358C2.75159 7.91356 2.75 9.62178 2.75 12C2.75 14.3782 2.75159 16.0864 2.92637 17.3864C3.09825 18.6648 3.42514 19.4355 3.9948 20.0052C4.56445 20.5749 5.33517 20.9018 6.61358 21.0736C7.91356 21.2484 9.62178 21.25 12 21.25C14.3782 21.25 16.0864 21.2484 17.3864 21.0736C18.6648 20.9018 19.4355 20.5749 20.0052 20.0052C20.5749 19.4355 20.9018 18.6648 21.0736 17.3864C21.2484 16.0864 21.25 14.3782 21.25 12C21.25 9.62178 21.2484 7.91356 21.0736 6.61358C20.9018 5.33517 20.5749 4.56445 20.0052 3.9948C19.4355 3.42514 18.6648 3.09825 17.3864 2.92637ZM17.5863 1.43975C19.031 1.63399 20.1711 2.03933 21.0659 2.93414C21.9607 3.82895 22.366 4.96897 22.5603 6.41371C22.75 7.82519 22.75 9.63423 22.75 11.9426V12.0574C22.75 14.3658 22.75 16.1748 22.5603 17.5863C22.366 19.031 21.9607 20.1711 21.0659 21.0659C20.1711 21.9607 19.031 22.366 17.5863 22.5603C16.1748 22.75 14.3658 22.75 12.0574 22.75H11.9426C9.63423 22.75 7.82519 22.75 6.41371 22.5603C4.96897 22.366 3.82895 21.9607 2.93414 21.0659C2.03933 20.1711 1.63399 19.031 1.43975 17.5863C1.24998 16.1748 1.24999 14.3658 1.25 12.0574V11.9426C1.24999 9.63423 1.24998 7.82519 1.43975 6.41371C1.63399 4.96897 2.03933 3.82895 2.93414 2.93414C3.82895 2.03933 4.96897 1.63399 6.41371 1.43975C7.82519 1.24998 9.63423 1.24999 11.9426 1.25H12.0574C14.3658 1.24999 16.1748 1.24998 17.5863 1.43975Z"
                    fill="#000000"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.804 7.06497L15.5357 6.36463C16.8766 5.85082 18.1489 7.12317 17.6351 8.4641L14.123 17.6299C13.8465 18.3516 13.1899 18.7344 12.5484 18.7493C11.8988 18.7644 11.2097 18.3951 10.9741 17.6197L9.91755 14.1427L10.5834 13.9404L9.91755 14.1427C9.91226 14.1253 9.90413 14.1131 9.89537 14.1044C9.88661 14.0956 9.87441 14.0875 9.857 14.0822L6.38003 13.0257C5.60468 12.7901 5.23538 12.1009 5.25044 11.4514C5.26532 10.8098 5.64815 10.1533 6.36987 9.87672L15.5357 6.36463L15.804 7.06497ZM16.1707 7.75232C16.1543 7.74876 16.1229 7.74597 16.0724 7.76532L6.90658 11.2774C6.79785 11.3191 6.75195 11.4039 6.75004 11.4862C6.74909 11.5272 6.76027 11.5518 6.76671 11.5614C6.76679 11.5615 6.76688 11.5617 6.76697 11.5618C6.7698 11.5661 6.77826 11.579 6.81613 11.5905L10.2931 12.647L10.0751 13.3646L10.2931 12.647C10.803 12.8019 11.1978 13.1968 11.3528 13.7066L12.4093 17.1836C12.4208 17.2215 12.4336 17.2299 12.4379 17.2328L12.4383 17.233C12.448 17.2395 12.4725 17.2507 12.5136 17.2497C12.5959 17.2478 12.6807 17.2019 12.7223 17.0932L16.2344 7.92739C16.2538 7.87689 16.251 7.84541 16.2474 7.82907C16.2433 7.81013 16.2339 7.79318 16.2203 7.7795C16.2066 7.76582 16.1896 7.75645 16.1707 7.75232Z"
                    fill="#000000"
                  ></path>
                </g>
              </svg>
            </div>
            <div>
              <p className="font-semibold text-lg">Visit The Office</p>
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
        <div className="flex flex-col w-full max-w-[500px] h-[600px] lg:h-[400px] place-content-center justify-center items-center">
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
          <div className="w-full border rounded-[25px] lg:h-[400px] h-[600px] flex flex-col justify-between p-10 bg-white drop-shadow-md">
            <div className="h-20 w-20 rounded-xl bg-gray-100 mb-10 p-2">
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
                    d="M8.98899 5.30778C10.169 2.90545 12.6404 1.25 15.5 1.25C19.5041 1.25 22.75 4.49594 22.75 8.5C22.75 9.57209 22.5168 10.5918 22.0977 11.5093C21.9883 11.7488 21.967 11.975 22.0156 12.1568L22.143 12.6328C22.5507 14.1566 21.1566 15.5507 19.6328 15.143L19.1568 15.0156C19.0215 14.9794 18.8616 14.982 18.6899 15.0307C18.1798 19.3775 14.4838 22.75 10 22.75C8.65003 22.75 7.36949 22.4438 6.2259 21.8963C5.99951 21.7879 5.7766 21.7659 5.59324 21.815L4.3672 22.143C2.84337 22.5507 1.44927 21.1566 1.857 19.6328L2.18504 18.4068C2.2341 18.2234 2.21211 18.0005 2.10373 17.7741C1.55623 16.6305 1.25 15.35 1.25 14C1.25 9.50945 4.63273 5.80897 8.98899 5.30778ZM10.735 5.28043C15.0598 5.64011 18.4914 9.14511 18.736 13.5016C18.9986 13.4766 19.2714 13.4935 19.5445 13.5666L20.0205 13.694C20.4293 13.8034 20.8034 13.4293 20.694 13.0205L20.5666 12.5445C20.4095 11.9571 20.5119 11.3708 20.7333 10.8861C21.0649 10.1602 21.25 9.35275 21.25 8.5C21.25 5.32436 18.6756 2.75 15.5 2.75C13.5181 2.75 11.7692 3.75284 10.735 5.28043ZM10 6.75C5.99594 6.75 2.75 9.99594 2.75 14C2.75 15.121 3.00392 16.1807 3.45667 17.1264C3.69207 17.6181 3.79079 18.2087 3.63407 18.7945L3.30602 20.0205C3.19664 20.4293 3.57066 20.8034 3.97949 20.694L5.20553 20.3659C5.79126 20.2092 6.38191 20.3079 6.87362 20.5433C7.81932 20.9961 8.87896 21.25 10 21.25C14.0041 21.25 17.25 18.0041 17.25 14C17.25 9.99594 14.0041 6.75 10 6.75Z"
                    fill="#000000"
                  ></path>
                  <path
                    d="M7.5 14C7.5 14.5523 7.05228 15 6.5 15C5.94772 15 5.5 14.5523 5.5 14C5.5 13.4477 5.94772 13 6.5 13C7.05228 13 7.5 13.4477 7.5 14Z"
                    fill="#000000"
                  ></path>
                  <path
                    d="M11 14C11 14.5523 10.5523 15 10 15C9.44772 15 9 14.5523 9 14C9 13.4477 9.44772 13 10 13C10.5523 13 11 13.4477 11 14Z"
                    fill="#000000"
                  ></path>
                  <path
                    d="M14.5 14C14.5 14.5523 14.0523 15 13.5 15C12.9477 15 12.5 14.5523 12.5 14C12.5 13.4477 12.9477 13 13.5 13C14.0523 13 14.5 13.4477 14.5 14Z"
                    fill="#000000"
                  ></path>
                </g>
              </svg>
            </div>
            <div>
              <p className="font-semibold text-lg">Chat With Me</p>
              <p>+1 (940) 464-1112</p>
              <p className=" text-pink-300 mt-2 mb-2 tracking-wide">
                Calls are answered and returned M-F between the hours of 9am-4pm
              </p>
              <a
                href="tel:1234567890"
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
