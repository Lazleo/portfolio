import Lines from "../assets/svg/Lines";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Selected from "./sections/Selected";

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
