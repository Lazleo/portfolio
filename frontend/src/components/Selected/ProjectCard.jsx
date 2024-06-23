/* eslint-disable react/prop-types */
export default function ProjectCard(props) {
  const { card } = props;
  return <div className="border-2 w-[45vw] h-[200px] rounded-3xl my-12 flex justify-center items-center text-4xl text-slate-200 font-black">{card}</div>;
}
