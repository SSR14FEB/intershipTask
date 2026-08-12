import Ratings from "../../components/common/Ratings";
import { testimonialsHeading, testimonialsSubheading, testimonials } from "./testimonialsData";

function Testimonials() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-8 px-4 py-6 sm:gap-10 sm:px-6 md:w-[85%] md:py-10 lg:w-[70%]">
      <div className="flex w-full flex-col items-center gap-3 text-center">
        <h2 className="text-2xl leading-tight font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
          {testimonialsHeading}
        </h2>
        <p className="text-base leading-7 font-normal text-gray-600 sm:text-lg">
          {testimonialsSubheading}
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="flex h-full flex-col justify-between gap-4 rounded-2xl bg-gray-100 p-6"
          >
            <div className="flex flex-col gap-3">
              <Ratings rating={t.rating} />
              <p className="text-sm leading-6 font-normal text-gray-700">“{t.quote}”</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
              <div>
                <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                <p className="text-xs font-normal text-gray-500">{t.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;