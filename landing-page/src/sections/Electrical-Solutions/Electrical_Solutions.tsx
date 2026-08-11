import TypeWriter from "../../components/common/TypeWriter";
import { electricalSolutionsURl } from "../../components/common/images";

function Electrical_Solutions() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-8 px-4 py-6 sm:gap-10 sm:px-6 md:w-[85%] md:py-10 lg:w-[70%]">
      {/* Main Section */}
      <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl bg-gray-100 py-6 sm:py-8 md:flex-row">
        {/* Text section */}
        <div className="flex w-full items-center md:w-4/5">
          <div className="flex w-full flex-col gap-5 p-6 sm:p-8 md:p-10">
            {/* Heading */}
            <div className="flex w-full items-center gap-2 text-xl leading-tight font-semibold tracking-tight whitespace-nowrap text-gray-900 sm:text-2xl md:text-3xl lg:text-4xl">
              <h1>Converting a</h1>

              <TypeWriter words={["MOBILE BUSINESS", "CAMPER VAN", "RV/MOTOR HOMES"]} />
            </div>

            {/* Paragraph */}
            <div className="text-[15px] leading-7 font-normal text-gray-600 sm:text-base">
              <p>Let the industry experts design your electrical system.</p>

              <p className="mt-1 font-medium text-gray-800">💰 Price match guarantee</p>
            </div>

            {/* Buttons */}
            <div className="mt-4 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <button className="w-fit shrink-0 rounded-full bg-amber-700 px-6 py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-amber-800">
                FIND OUT MORE
              </button>

              <button className="min-w-0 text-left text-sm leading-6 font-normal text-gray-500 transition-colors hover:text-gray-800 sm:text-base">
                Use our clever enquiry form and an engineer will reply ASAP 🎉
              </button>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className="relative mt-4 h-64 w-full shrink-2 sm:h-80 md:top-10 md:mt-0 md:h-auto md:w-2/5">
          <img
            className="h-full w-full object-cover"
            src={electricalSolutionsURl}
            alt="Electrical solutions"
          />
        </div>
      </div>

      {/* Description */}
      <div className="w-full">
        <p className="mx-auto w-full max-w-2xl text-center text-base leading-7 font-normal tracking-wide text-gray-600 sm:text-lg sm:leading-8 md:text-xl">
          Nohma empowers people to put experiences ahead of possessions, and live a more sustainable
          and fulfilling life 🌎
        </p>
      </div>

      {/* Stats */}
      <div className="flex w-full flex-col items-center justify-around gap-10 sm:flex-row sm:flex-wrap sm:gap-8">
        {/* Stat 1 */}
        <div className="flex w-full max-w-48 flex-col justify-center gap-2 text-center sm:w-48">
          <b className="text-4xl font-bold tracking-tight text-blue-600 sm:text-5xl">4,000+</b>

          <p className="text-sm leading-6 font-medium text-gray-700 sm:text-base">
            Bespoke systems designed each year
          </p>
        </div>

        {/* Stat 2 */}
        <div className="flex w-full max-w-48 flex-col justify-center gap-2 text-center sm:w-48">
          <b className="text-4xl font-bold tracking-tight text-blue-600 sm:text-5xl">#1</b>

          <p className="text-sm leading-6 font-medium text-gray-700 sm:text-base">
            Authority on campervan electrics*
          </p>
        </div>

        {/* Stat 3 */}
        <div className="flex w-full max-w-55 flex-col justify-center gap-2 text-center sm:w-55">
          <b className="text-4xl font-bold tracking-tight text-blue-600 sm:text-5xl">#1</b>

          <p className="text-sm leading-6 font-medium text-gray-700 sm:text-base">
            Service of the Year! GBEA Awards 2x winner
          </p>
        </div>
      </div>
    </div>
  );
}

export default Electrical_Solutions;
