import Electrical_Solutions from "../sections/Electrical-Solutions/Electrical_Solutions";
import Hero from "../sections/Hero/Hero";
function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-10 bg-white">
      <Hero />
      <Electrical_Solutions />
    </div>
  );
}

export default Home;
