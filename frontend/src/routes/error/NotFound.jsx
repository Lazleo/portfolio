import PrimaryButton from "../../components/PrimaryButton";

export default function NotFound() {
  return (
    <div>
      <div className="bg-[url('./img/pomo404.png')] bg-cover w-screen h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center border-2 border-gray-400 w-fit h-fit rounded-3xl my-12 px-12 pt-8 pb-16 bg-primary/35 backdrop-blur-md">
          <div className="font-primary text-accent text-[10rem] font-extrabold">
            404
          </div>
          <div className="font-primary text-accent text-[2.5rem] font-extrabold tracking-widest">
            ... not found ...
          </div>
          <div className="mt-[100px]">
            <PrimaryButton text={`back to main`} size={"6xl"} />
          </div>
        </div>
      </div>
    </div>
  );
}
