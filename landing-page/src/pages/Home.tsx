import Hero from "../sections/Hero/Hero";
import HomeSections from "../sections/HomeSections";

function Home() {
  return (
    <div className="min-h-screen w-full bg-white">
      <Hero />
      <HomeSections />
    </div>
  );
}

export default Home;
