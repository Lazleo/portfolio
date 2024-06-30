import ProjectCard from "../../components/Selected/ProjectCard";
// TODO: automate mapping odd and pair cards

export default function Selected() {
  const works = [
    {
      title: "worthwhile",
      description: {
        header: "eco-friendly inventory tracker app",
        body: "small-scale personal investment and maintenance assistant",
      },
      isOdd: true,
    },
    {
      title: "battleScore",
      description: {
        header: "D&D 5e tabletop RPG tool",
        body: "combat phase helper tracking initiative order, hp, and other stats or effects",
      },
      isOdd: false,
    },
    {
      title: "TOTEM",
      description: {
        header: "interactive 3D web portfolio",
        body: "portfolio presenting an interactive tribute to the only work of an art installation duo",
      },
      isOdd: true,
    },
    {
      title: "CineMania",
      description: {
        header: "movie ticket vendor webshop",
        body: "team project within Progmatic Academy FS '23-'24",
      },
      isOdd: false,
    },
    {
      title: "PoMoLeGo",
      description: {
        header: "architectural facade pattern generator",
        body: "build post-modernist facades with random building blocks",
      },
      isOdd: true,
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
