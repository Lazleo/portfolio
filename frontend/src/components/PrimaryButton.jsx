/* eslint-disable react/prop-types */
export default function PrimaryButton(props) {
    const {text} = props
  return (
    <div className="font-primary font-extrabold text-accent text-4xl bg-primary rounded-full w-full text-center py-2 px-8">{text}</div>
  )
}
