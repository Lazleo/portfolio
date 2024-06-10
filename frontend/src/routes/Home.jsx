import Hero from "../components/Hero";
import RobotPlayground from "../components/RobotPlayground";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <RobotPlayground />
    </div>
  );
}
