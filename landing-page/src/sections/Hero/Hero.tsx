import React from "react";

function Hero() {
  return (
    <div className="relative h-full w-full -z-10">
      <div className="h-full w-full bg-white">
        <video
          className="hidden h-full w-full object-cover md:block"
          src="https://res.cloudinary.com/dglbwcbch/video/upload/f_auto,q_auto/v1738779677/assets/COMPRESSED-Web-homepage_1920x1080.mp4"
          autoPlay
          loop
          muted
        />
        <video
          className="h-full w-full object-cover md:hidden"
          src="https://res.cloudinary.com/dglbwcbch/video/upload/f_auto,q_auto/v1738835630/assets/COMPRESSED-Web-homepage_1080x1920.mp4"
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
}

export default Hero;
