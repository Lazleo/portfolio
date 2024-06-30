import Splash from "../../assets/svg/Splash";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";

export default function Contact() {
  return (
    <div className="mt-[400px] py-10 flex justify-center relative">
      <Splash />
      <div className="relative w-fit h-fit rounded-3xl flex justify-center items-center pt-8 pb-16 px-4">
        <div className="font-primary flex flex-col items-center mx-8 mt-16 gap-4">
          <div className="text-primary text-6xl">info</div>
          <ul className="text-3xl mb-8">
            <li className="mt-6">laszlo@belkovits.com</li>
            <li className="mt-6">+ 36 30 457 4142</li>
            <li className="mt-6">Budapest, Hu</li>
          </ul>
          <SecondaryButton text={"code"} size={"4xl"} />
          <SecondaryButton text={"resume"} size={"4xl"} />
          <PrimaryButton text={"contact"} size={"4xl"} />
        </div>
      </div>
    </div>
  );
}
