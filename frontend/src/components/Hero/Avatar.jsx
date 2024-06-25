export default function Avatar() {
  return (
    <div className="absolute top-[30%] left-[75%] -translate-x-[50%] -translate-y-[50%]">
      <div className="py-10 pl-12 rounded-full bg-gradient-to-bl from-darkBg to-primary shadow-glow h-[350px] w-[350px] overflow-clip">
        <img className="scale-x-[-1] saturate-0 contrast-125" src="./img/full.png" />
      </div>
    </div>
  );
}
