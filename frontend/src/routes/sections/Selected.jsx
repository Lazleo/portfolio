import ProjectCard from "../../components/Selected/ProjectCard";

export default function Selected() {
  const works = [1, 2, 3, 4];

  return (
    <div className="flex flex-col items-center">
      {works.map((work) => (
        <ProjectCard card={work} key={work} />
      ))}
    </div>
  );
}
