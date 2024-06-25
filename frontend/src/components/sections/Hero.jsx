import HeroCard from "../Hero/HeroCard";
import Avatar from "../Hero/Avatar";

export default function Hero() {
  return (
    <div className="relative flex h-[80vh] justify-center mt-[10vh]">
        <HeroCard />
        <Avatar />
    </div>
  )
}
