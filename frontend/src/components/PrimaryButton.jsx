/* eslint-disable react/prop-types */
export default function PrimaryButton(props) {
    const {text, size} = props
  return (
    <div className={`font-primary font-extrabold text-accent text-${size} bg-primary hover:shadow-glow-sm hover:cursor-pointer active:bg-lightBg active:shadow-none rounded-full w-full text-center py-2 px-8`}>{text}</div>
  )
}
