import react, { PropsWithChildren } from "react";

export const TopicButton:react.FC<PropsWithChildren> = (props, {onClick}) => {
  return (
    <div className="bg-gray-200 rounded-full h-14 flex text-xl">
      <svg
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className="h-14"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path fill="#9e9e9e" d="M8 3a5 5 0 100 10A5 5 0 008 3z"></path>
        </g>
      </svg>
      <button onClick={onClick} className="font-semibold pl-16">{props.children}</button>
    </div>
  );
}
