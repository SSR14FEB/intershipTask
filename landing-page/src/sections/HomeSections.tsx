import { FaArrowRight, FaCheck, FaStar } from "react-icons/fa";

const image = (id: string, width = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

const articles = [
  ["How to wire a campervan electrical system", "Charlie & Dale", "photo-1501706362039-c6e80948b2a4"],
  ["How much does it cost to convert a camper van?", "Charlie & Dale", "photo-1533104816931-20fa691ff6ca"],
  ["Electric campervans – is an EV the right choice?", "Mhairi McInnes", "photo-1504215680853-026ed2a45def"],
];

const kitTypes = ["Full system kits", "Solar kits", "Inverter kits", "Battery kits", "DC-DC kits", "Hook-up kits"];

function Action({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <button className={`inline-flex w-fit items-center gap-3 rounded-full px-6 py-3 text-xs font-extrabold tracking-[0.12em] transition hover:-translate-y-0.5 ${light ? "bg-white text-stone-900" : "bg-[#ef8638] text-white"}`}>{children}<FaArrowRight /></button>;
}

function HomeSections() {
  return (
    <div className="overflow-hidden bg-[#fffdfa] text-[#272321]">
      <section className="bg-[#f4ad48] px-5 py-14 sm:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[.18em]">Electrical design, made simple</p>
            <h2 className="max-w-xl text-4xl font-black leading-[.98] tracking-tight sm:text-5xl lg:text-6xl">Let the industry experts design your electrical system.</h2>
            <p className="mt-6 max-w-lg text-base leading-7">We’ll turn your adventure into a safe, complete electrical system, designed by engineers and delivered to your door.</p>
            <div className="mt-8 flex flex-wrap items-center gap-5"><Action>FIND OUT MORE</Action><span className="text-sm font-semibold">🛡️ 5 year full system warranty</span></div>
          </div>
          <div className="relative mx-auto w-full max-w-md rounded-[2.25rem] bg-[#f6d083] p-5 shadow-xl shadow-amber-900/15">
            <img className="h-[310px] w-full rounded-[1.5rem] object-cover" src={image("photo-1504215680853-026ed2a45def")} alt="Campervan beside a mountain lake" />
            <div className="absolute -bottom-5 -left-3 rounded-2xl bg-white px-5 py-4 shadow-lg"><p className="text-2xl font-black">4,000+</p><p className="text-xs font-semibold">systems designed each year</p></div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-sm font-bold uppercase tracking-[.18em] text-[#e97d35]">How can we help?</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-center text-4xl font-black leading-tight sm:text-5xl">Everything you need to make your van feel like home.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="group overflow-hidden rounded-[2rem] bg-[#f4ad48]">
              <img className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" src={image("photo-1521334884684-d80222895322")} alt="Campervan in the outdoors" />
              <div className="p-7 sm:p-9"><p className="text-sm font-bold">BUILD YOUR BESPOKE SYSTEM</p><h3 className="mt-2 text-3xl font-black">Power your next adventure ⚡</h3><p className="mt-4 max-w-md leading-7">Award-winning campervan electrical systems, designed around the way you travel.</p><div className="mt-7"><Action light>BUILD YOUR SYSTEM</Action></div></div>
            </article>
            <article className="group overflow-hidden rounded-[2rem] bg-[#dbe7d4]">
              <img className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" src={image("photo-1520440229-6469a149a7f7")} alt="Book and campervan tools" />
              <div className="p-7 sm:p-9"><p className="text-sm font-bold">THE VAN CONVERSION BIBLE</p><h3 className="mt-2 text-3xl font-black">The ultimate guide to converting a campervan.</h3><p className="mt-4 max-w-md leading-7">A trusted, practical guide with 1,000+ five-star reviews from van builders.</p><div className="mt-7"><Action light>BUY YOUR COPY</Action></div></div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#252c28] px-5 py-16 text-white sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-6xl"><div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]"><div><p className="text-sm font-bold uppercase tracking-[.18em] text-[#f4ad48]">Ready-to-go electrical kits</p><h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">Designed by experts. Built for the wild. 🔧</h2><p className="mt-6 max-w-md leading-7 text-stone-300">Safe, robust kits with a free wiring diagram and installation guide included with every order.</p><div className="mt-8"><Action>SHOP NOW</Action></div></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-3">{kitTypes.map((kit, index) => <div key={kit} className={`flex min-h-36 flex-col justify-between rounded-2xl p-5 ${index % 2 ? "bg-[#3a443e]" : "bg-[#354f47]"}`}><span className="text-3xl">{["⚡", "☀️", "🔌", "🔋", "↔️", "🏕️"][index]}</span><p className="font-bold leading-tight">{kit}</p><span className="text-xs font-bold text-[#f4ad48]">FIND OUT MORE →</span></div>)}</div></div></div>
      </section>

      <section id="shop" className="scroll-mt-28 px-5 py-16 sm:px-10 lg:px-16 lg:py-24"><div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2"><img className="h-[380px] w-full rounded-[2rem] object-cover" src={image("photo-1464822759023-fed622ff2c3b")} alt="Mountain landscape" /><div><p className="text-sm font-bold uppercase tracking-[.18em] text-[#e97d35]">One stop electrical shop</p><h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">The good stuff, all in one place.</h2><p className="mt-6 max-w-lg leading-7 text-stone-600">From batteries to solar panels, Nohma has everything you need to supercharge your adventures—carefully selected by people who know campervans.</p><div className="mt-8"><Action>SHOP NOW</Action></div></div></div></section>

      <section className="bg-[#f2e9dc] px-5 py-16 sm:px-10 lg:px-16 lg:py-24"><div className="mx-auto max-w-6xl"><div className="max-w-xl"><p className="text-sm font-bold uppercase tracking-[.18em] text-[#e97d35]">Insider knowledge</p><h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">Nerdy tips & how-to's.</h2><p className="mt-5 leading-7 text-stone-600">Get the inside scoop on building your own van, kitting it out, and living the adventure.</p></div><div className="mt-10 grid gap-5 md:grid-cols-3">{articles.map(([title, author, photo]) => <article key={title} className="overflow-hidden rounded-2xl bg-white"><img className="h-48 w-full object-cover" src={image(photo, 700)} alt="Campervan article" /><div className="p-6"><p className="text-xs font-bold uppercase tracking-wider text-[#e97d35]">Guides & advice</p><h3 className="mt-3 min-h-16 text-xl font-black leading-snug">{title}</h3><div className="mt-5 flex items-center justify-between text-sm"><span className="text-stone-500">{author}</span><span className="font-bold">Read now →</span></div></div></article>)}</div><button className="mt-8 text-sm font-extrabold tracking-[.1em] underline underline-offset-4">EXPLORE ALL ARTICLES</button></div></section>

      <section id="about" className="scroll-mt-28 px-5 py-16 sm:px-10 lg:px-16 lg:py-24"><div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2"><div><p className="text-sm font-bold uppercase tracking-[.18em] text-[#e97d35]">Our story</p><h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">From two climbers to electrical experts 👋</h2><p className="mt-6 leading-7 text-stone-600">Nohma started life as Climbingvan: Charlie & Dale travelling the world in their bright yellow campervan, Ringo. Today, our engineers and technical support team help thousands of people build safer, more bespoke electrical systems.</p><div className="mt-8"><Action>ABOUT US</Action></div></div><img className="h-[370px] w-full rounded-[2rem] object-cover" src={image("photo-1478827387698-1527781a4887")} alt="Friends on an outdoor adventure" /></div></section>

      <section className="bg-[#b9d5c5] px-5 py-16 sm:px-10 lg:px-16 lg:py-24"><div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2"><div><p className="text-sm font-bold uppercase tracking-[.18em] text-[#466d5a]">Nohma, a power for good</p><h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">Better adventures. Better planet.</h2></div><div className="space-y-6">{["We plant a tree for every order of our book. Over 30,000 trees and counting.", "For every Nohma system sold, we donate to increase solar accessibility worldwide.", "We are proud members of the Living Wage Foundation."].map(text => <p key={text} className="flex gap-4 leading-7"><span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#466d5a] text-xs text-white"><FaCheck /></span>{text}</p>)}<button className="pt-2 text-sm font-extrabold tracking-[.1em] underline underline-offset-4">FIND OUT MORE</button></div></div></section>

      <section id="testimonials" className="scroll-mt-28 bg-[#252c28] px-5 py-16 text-white sm:px-10 lg:px-16 lg:py-24"><div className="mx-auto max-w-6xl text-center"><p className="mx-auto max-w-3xl text-3xl font-black leading-tight sm:text-5xl">“A Nohma electrical system provides power for good.”</p><p className="mt-6 font-semibold text-[#f4ad48]">Alex Honnold, pro climber & van lifer</p><div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row"><div className="flex gap-1 text-[#f4ad48]">{Array.from({ length: 5 }, (_, i) => <FaStar key={i} />)}</div><strong>4.9 out of 2219 reviews</strong><span className="text-stone-300">across all platforms 💪</span></div></div></section>

      <section className="px-5 py-16 sm:px-10 lg:px-16"><div className="mx-auto max-w-4xl rounded-[2rem] bg-[#f4ad48] px-6 py-12 text-center sm:px-12"><p className="text-sm font-bold uppercase tracking-[.18em]">Super secret insider info ↓</p><h2 className="mt-3 text-3xl font-black sm:text-5xl">Sign up to our newsletter</h2><p className="mx-auto mt-4 max-w-xl">Learn from our team of engineers, digital nomads and travel gurus, and unlock your next adventure.</p><form className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row"><input aria-label="Email address" type="email" placeholder="Email address" className="min-h-12 flex-1 rounded-full border-0 px-5 text-stone-900 outline-none" /><button className="min-h-12 rounded-full bg-[#252c28] px-7 text-xs font-extrabold tracking-[.1em] text-white">SUBSCRIBE</button></form><p className="mt-4 text-xs">By clicking, you agree to our Terms and Conditions & Privacy Policy.</p></div></section>
    </div>
  );
}

export default HomeSections;
