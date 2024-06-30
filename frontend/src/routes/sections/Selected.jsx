import ProjectCard from "../../components/Selected/ProjectCard";
// TODO: automate mapping odd and pair cards

export default function Selected() {
  const works = [
    {
      title: "worthwhile",
      description: "eco-friendly savings tracker app",
      isOdd: true,
    },
    {
      title: "battleScore",
      description: "D&D 5e tabletop RPG tool",
      isOdd: false,
    },
    {
      title: "TOTEM",
      description: "interactive tribute to a kinetic light art installation",
      isOdd: true,
    },
    {
      title: "CineMania",
      description: "movie ticket vendor webshop",
      isOdd: false,
    },
  ];

  return (
    <div className="flex flex-col items-center">
      {works.map((work) => {
        return <ProjectCard card={work} key={work} />;
      })}
    </div>
  );
}
