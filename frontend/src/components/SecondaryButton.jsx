/* eslint-disable react/prop-types */
export default function SecondaryButton(props) {
    const {text, size} = props
  return (
    <div
      className={`font-primary border-4 border-primary hover:shadow-glow-sm hover:cursor-pointer active:border-lightBg active:shadow-none text-neutral text-${size} bg-transparent rounded-full w-full text-center py-2 px-8`}
    >
      {text}
    </div>
  );
}
