import ProjectCard from "./ProjectCard";

export default function ProjectsList() {
   const projects = ["DnD Initiative App", "Totem Webpage", "Worthwhile"];
  return (
    <div className="min-h-[300px] flex justify-center items-center border-2 border-primary">
      <ProjectCard cards={projects} />
    </div>
  );
}
