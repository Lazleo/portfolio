import Lines from "../assets/svg/Lines";
import Contact from "../components/sections/Contact";
import Experience from "../components/sections/Experience";
import Hero from "../components/sections/Hero";
import Selected from "../components/sections/Selected";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <div className="relative z-20">
        <Hero />
        <Experience />
        <Selected />
        <Contact />
      </div>
      <Lines />
    </div>
  );
}
