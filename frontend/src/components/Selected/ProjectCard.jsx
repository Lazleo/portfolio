import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";

/* eslint-disable react/prop-types */
export default function ProjectCard(props) {
  const { card } = props;
  return (
    <div className="border-2 border-gray-400 w-fit h-fit rounded-3xl my-12 flex px-12 pt-8 pb-16 bg-lightBg/20 backdrop-blur-md">
      <div className="w-[200px] border-2 border-dashed"></div>
      <div className="flex flex-col justify-center items-center font-primary gap-2 ml-16">
        <div className="flex flex-col">
          <div className="text-4xl font-extrabold tracking-wider">
            {card.title}
          </div>
          <div className="text-sm">{card.description}</div>
        </div>
        <div className="w-[300px] flex flex-col gap-2 mt-4">
          <SecondaryButton text={`view code`} size={"lg"} />
          <PrimaryButton text={`let's collaborate!`} size={"lg"} />
        </div>
      </div>
    </div>
  );
}
