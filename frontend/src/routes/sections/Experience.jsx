import Banner from "../../components/Experience/Banner";
import XPCard from "../../components/Experience/XPCard";

export default function Experience() {
  const cards = [
    {
      title: "WCollective",
      body: ["creating", "designing", "managing"],
      subTitle: "Front End Web Developer",
      date: "2024 - present",
    },
    {
      title: "Technologies",
      body: ["HTML", "React.js", "Tailwind CSS"],
      subTitle: "Full Stack Developer",
      date: "2023 - 2024",
    },
  ];
  return (
    <div className="flex absolute left-0 top-[60vh]">
      <div className="w-screen h-[25vh] bg-teal-400">
        <Banner />
      </div>
      <div className="flex absolute">
        {cards.map((card) => (
          <XPCard title={card.title} body={card.body} subTitle={card.subTitle} date={card.date} key={card} />
        ))}
      </div>
    </div>
  );
}
