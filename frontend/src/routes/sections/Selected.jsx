import BattleScoreIcon from "../../assets/svg/BattleScoreIcon";
import WcolIcon from "../../assets/svg/WcolIcon";
import TotemIcon from "../../assets/svg/TotemIcon"
import CineIcon from "../../assets/svg/CineIcon"
import PomoIcon from "../../assets/svg/PomoIcon";
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
      icon: <WcolIcon />,
    },
    {
      title: "battleScore",
      description: {
        header: "D&D 5e tabletop RPG tool",
        body: "combat phase helper tracking initiative order, hp, and other stats or effects",
      },
      isOdd: false,
      icon: <BattleScoreIcon />,
    },
    {
      title: "TOTEM",
      description: {
        header: "interactive 3D web portfolio",
        body: "portfolio presenting an interactive tribute to the only work of an art installation duo",
      },
      isOdd: true,
      icon: <TotemIcon />,
    },
    {
      title: "CineMania",
      description: {
        header: "movie ticket vendor webshop",
        body: "team project within Progmatic Academy FS '23-'24",
      },
      isOdd: false,
      icon: <CineIcon />
    },
    {
      title: "PoMoLeGo",
      description: {
        header: "architectural facade pattern generator",
        body: "build post-modernist facades with random building blocks",
      },
      isOdd: true,
      icon: <PomoIcon />
    },
  ];

  return (
    <div id="selected" className="flex flex-col items-center mt-[300px]">
      {works.map((work) => {
        return <ProjectCard card={work} key={work} />;
      })}
    </div>
  );
}
