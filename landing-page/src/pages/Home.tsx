import Electrical_Solutions from "../sections/Electrical-Solutions/Electrical_Solutions";
import Hero from "../sections/Hero/Hero";
import Help from "../sections/how-may-i-help-you/Help";
function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-10 bg-white">
      <Hero />
      <Electrical_Solutions />
      <Help/>
    </div>
  );
}

export default Home;
