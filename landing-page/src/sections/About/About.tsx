import { aboutHeading, aboutParagraph, aboutStats, aboutImage } from "./aboutData";

function About() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-8 px-4 py-6 sm:gap-10 sm:px-6 md:w-[85%] md:py-10 lg:w-screen">
      <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl bg-gray-100 py-6 sm:py-8 md:flex-row-reverse">
        {/* Text */}
        <div className="flex w-full items-center md:w-3/5">
          <div className="flex w-full flex-col gap-5 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl leading-tight font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
              {aboutHeading}
            </h2>
            <p className="text-[15px] leading-7 font-normal text-gray-600 sm:text-base">
              {aboutParagraph}
            </p>

            <div className="mt-4 flex w-full flex-wrap gap-8">
              {aboutStats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <b className="text-3xl font-bold tracking-tight text-blue-600 sm:text-4xl">
                    {stat.value}
                  </b>
                  <p className="max-w-40 text-sm leading-6 font-medium text-gray-700">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative h-64 w-full shrink-2 sm:h-80 md:h-auto md:w-2/5">
          <img className="h-full w-full object-cover" src={aboutImage} alt="Off-grid engineer" />
        </div>
      </div>
    </div>
  );
}

export default About;