import React from "react";
import Card from "../../components/ui/Card";
import { heading, img, img2, para } from "../Electrical-Solutions/electricalSolutionsData";

function Help() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-8 px-4 py-6 sm:gap-10 sm:px-6 md:w-[85%] md:py-10 lg:w-[70%]">
      <div className="flex h-20 w-full items-center justify-center">
        <h1 className="text-2xl font-bold text-indigo-600">HOW MAY I HELP YOU </h1>
      </div>
      <div className="flex h-full w-full flex-col justify-center items-center gap-10 md:flex-row md:gap-20">
        <Card heading={heading} para={para} image={img} bg="bg-blue-600" />
        <Card heading={heading} para={para} image={img2} bg="bg-[#64A17B]" />
      </div>
    </div>
  );
}

export default Help;
