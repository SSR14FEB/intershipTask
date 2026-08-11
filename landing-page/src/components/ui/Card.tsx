import React from "react";
interface CardProp {
  image: string;
  heading: string;
  para: string;
  bg: string;
}
function Card({ image, heading, para, bg }: CardProp) {
  return (
    <div className={`flex h-140 w-92 flex-col justify-between rounded-2xl ${bg} `}>
      <div className="flex h-full flex-col justify-center gap-4 p-4">
        <h1 className="text-2xl font-bold text-white">{heading}</h1>
        <p className="text-md font-light text-white">{para}⚡</p>
      </div>
      <div className="relative flex h-full w-full items-end justify-center">
        <img className="h-80 w-full object-cover" src={image} alt="" />
        <button className="absolute bottom-7 z-10 rounded-4xl bg-white p-2 text-xs hover:bg-red-500 hover:text-white">
          BUILD YOUR SYSTEM
        </button>
      </div>
    </div>
  );
}

export default Card;

