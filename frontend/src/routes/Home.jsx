import Hero from "../components/Hero";
import ProjectsList from "../components/ProjectsList";

export default function Home() {
  return (
    <div className="flex flex-col">
        <Hero />
        <ProjectsList />
    </div>
  )
}
