import React from "react";

function Hero() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="h-full w-full bg-white">
        {/* hero page for ground  */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="flex h-full w-full flex-col justify-around gap-28 px-6 sm:px-10 md:ml-16 md:w-2/3 md:justify-center md:gap-0 lg:ml-24 lg:w-1/2">
            {/* Hero text */}
            <div className="relative">
              <h1 className="max-w-xl text-3xl leading-tight font-extrabold text-white sm:text-4xl md:text-5xl lg:text-6xl">
                The Van Conversion Bible
              </h1>

              <div className="mt-2 flex w-fit min-w-[200px] items-center gap-2 rounded-l bg-yellow-400 px-5 py-1 text-2xl font-bold sm:text-3xl md:text-4xl">
                <span>2025</span>
                <span>edition</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center md:flex-row">
              <button className="rounded-3xl bg-amber-700 px-5 py-3 font-bold text-white">
                BUY THE BOOK
              </button>

              <button className="font-semibold text-white">Available now 🎉</button>
            </div>
          </div>
        </div>
        <video
          className="hidden h-165 w-full object-cover md:block"
          src="https://res.cloudinary.com/dglbwcbch/video/upload/f_auto,q_auto/v1738779677/assets/COMPRESSED-Web-homepage_1920x1080.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <video
          className="h-screen w-full object-fill md:hidden"
          src="https://res.cloudinary.com/dglbwcbch/video/upload/f_auto,q_auto/v1738835630/assets/COMPRESSED-Web-homepage_1080x1920.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
}

export default Hero;
