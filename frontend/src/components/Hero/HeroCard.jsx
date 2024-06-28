import PrimaryButton from "../PrimaryButton";

export default function HeroCard() {
  return (
    <div className="absolute top-[40%] left-[33%] -translate-x-[50%] -translate-y-[50%] z-10 flex flex-col items-center border-2 border-gray-600 bg-primary/15 backdrop-blur-md shadow-glow rounded-3xl p-8">
      <div className="w-full">
        <div className="flex gap-4 font-primary font-extrabold text-4xl pt-4">
          <div>{`Hi! I'm`}</div>
          <div className="text-primary">László</div>
        </div>
        <div className="font-primary text-xl">{`i'm a front end web developer`}</div>
      </div>
      <div className="text-sm pt-2 pb-8 w-[400px]">
        i like blobs and grids, glassmorphism and interactive design with a
        background in engineering and architecture
      </div>
      <PrimaryButton text={`let's collaborate!`} />
    </div>
  );
}
