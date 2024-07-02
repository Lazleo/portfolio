export default function Header() {
  return (
    <div className="fixed w-full z-50 pt-4 px-12">
      <div className="border-2 border-gray-600 rounded-full h-[4.5rem] bg-darkBg/5 backdrop-blur-md flex items-center justify-between px-12 font-primary text-2xl">
        <a
          href="#hero"
          className="text-primary hover:border-b-4 border-primary hover:cursor-pointer active:text-lightBg active:border-lightBg"
        >
          László Belkovits
        </a>
        <div className="flex w-1/3 justify-between">
          <a
            href="#experience"
            className="hover:text-primary hover:border-b-4 border-primary hover:cursor-pointer active:text-lightBg active:border-lightBg"
          >
            experience
          </a>
          <a
            href="#selected"
            className="hover:text-primary hover:border-b-4 border-primary hover:cursor-pointer active:text-lightBg active:border-lightBg"
          >
            selected works
          </a>
          <a
            href="#info"
            className="hover:text-primary hover:border-b-4 border-primary hover:cursor-pointer active:text-lightBg active:border-lightBg"
          >
            info
          </a>
        </div>
      </div>
    </div>
  );
}
