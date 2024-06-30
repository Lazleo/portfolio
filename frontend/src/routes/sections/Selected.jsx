import ProjectCard from "../../components/Selected/ProjectCard";

export default function Selected() {
  const works = [
    {
      title: "worthwhile",
      description: "eco-friendly savings tracker app",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      {works.map((work) => (
        <ProjectCard card={work} key={work} />
      ))}
    </div>
  );
}
