import Banner from "../Experience/Banner";
import XPCard from "../Experience/XPCard";

export default function Experience() {
  const cards = [1, 2, 3, 4];
  return (
    <div className="flex absolute left-0 top-[60vh]">
      <div className="w-screen h-[25vh] bg-teal-400">
        <Banner />
      </div>
      <div className="flex absolute">
        {cards.map((card) => (
          <XPCard card={card} key={card} />
        ))}
      </div>
    </div>
  );
}
