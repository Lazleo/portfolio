import Splash from "../../assets/svg/Splash";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";
import MailIcon from "../../assets/svg/MailIcon";
import PhoneIcon from "../../assets/svg/PhoneIcon";
import AddressIcon from "../../assets/svg/AddressIcon";
import GithubIcon from "../../assets/svg/GithubIcon";
import WebIcon from "../../assets/svg/WebIcon";

export default function Contact() {
  return (
    <div id="info" className="mt-[400px] py-10 flex justify-center relative">
      <Splash />
      <div className="relative w-fit h-fit rounded-3xl flex justify-center items-center pt-8 pb-16 px-4">
        <div className="font-primary flex flex-col items-center mx-8 mt-16 gap-4">
          <div className="text-primary text-7xl tracking-widest">
            contact info
          </div>
          <ul className="text-3xl mb-8">
            <li className="mt-6 flex justify-start items-center gap-4">
              <PhoneIcon />
              <span>+36 30 457 4142</span>
            </li>
            <li className="mt-6 flex justify-start items-center gap-4">
              <MailIcon />
              <span>laszlo@belkovits.com</span>
            </li>
            <li className="mt-6 flex justify-start items-center gap-4">
              <AddressIcon />
              <span>Budapest, HU</span>
            </li>
            <li className="mt-6 flex justify-start items-center gap-4">
              <GithubIcon />
              <a href="">github/Lazleo</a>
            </li>
            <li className="mt-6 flex justify-start items-center gap-4">
              <WebIcon />
              <span>linkedin/in/laszlobelkovits</span>
            </li>
          </ul>
          <SecondaryButton text={"code"} size={"4xl"} />
          <PrimaryButton text={"resume"} size={"4xl"} />
        </div>
      </div>
    </div>
  );
}
