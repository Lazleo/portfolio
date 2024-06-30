import HeroCard from "../../components/Hero/HeroCard";
import Avatar from "../../components/Hero/Avatar";

export default function Hero() {
  return (
    <div id="hero" className="relative w-[50%] mx-auto flex h-[80vh] justify-center mt-[10vh]">
      <HeroCard />
      <Avatar />
    </div>
  );
}
