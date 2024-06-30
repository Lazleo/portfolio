import Glow from "../../assets/svg/Glow";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";

/* eslint-disable react/prop-types */
export default function OddCard(props) {
  const { card } = props;
  return (
    <div className="ml-[550px] border-2 border-gray-400 w-fit h-fit rounded-3xl my-12 flex px-12 pt-8 pb-16 bg-lightBg/20 backdrop-blur-md">
      <div className="w-[350px] flex justify-center relative">
        <div className="absolute">{card.icon}</div>
        <div className="mt-[50px]">
          <Glow />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center font-primary gap-2 ml-16">
        <div className="w-[350px] flex flex-col justify-center items-center">
          <div className="text-4xl font-extrabold tracking-wider">
            {card.title}
          </div>
          <div className="text-lg text-center mt-2">
            {card.description.header}
          </div>
          <div className="text-center mt-4 px-6 w-[100%] font-text">
            {card.description.body}
          </div>
        </div>
        <div className="w-[300px] flex flex-col gap-2 mt-6">
          <div className="flex gap-2">
            <SecondaryButton text={`webpage`} size={"lg"} />
            <SecondaryButton text={`code`} size={"lg"} />
          </div>
          <PrimaryButton text={`let's collaborate!`} size={"lg"} />
        </div>
      </div>
    </div>
  );
}
