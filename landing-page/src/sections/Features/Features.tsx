import { featuresHeading, featuresSubheading, features } from "./featuresData";

function Features() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-8 px-4 py-6 sm:gap-10 sm:px-6 md:w-[85%] md:py-10 lg:w-[70%]">
      <div className="flex w-full flex-col items-center gap-3 text-center">
        <h2 className="text-2xl leading-tight font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
          {featuresHeading}
        </h2>
        <p className="max-w-2xl text-base leading-7 font-normal text-gray-600 sm:text-lg">
          {featuresSubheading}
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="flex flex-col items-center gap-3 rounded-2xl bg-gray-100 p-6 text-center transition-transform hover:-translate-y-1"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
              <Icon size={20} />
            </div>
            <h3 className="text-base font-semibold text-gray-900">{title}</h3>
            <p className="text-sm leading-6 font-normal text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
