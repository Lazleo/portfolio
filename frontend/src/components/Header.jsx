export default function Header() {
  return (
    <div className="fixed w-full z-50 pt-4 px-12">
      <div className="border-2 border-gray-600 rounded-full bg-darkBg/5 backdrop-blur-md flex justify-between px-12 pt-1 font-primary">
        <div className="text-primary">László Belkovits</div>
        <div className="flex w-1/3 justify-between">
          <div>experience</div>
          <div>selected works</div>
          <div>info</div>
        </div>
      </div>
    </div>
  );
}
