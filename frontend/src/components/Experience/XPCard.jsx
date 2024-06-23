/* eslint-disable react/prop-types */
export default function XPCard(props) {
  const { card } = props;
  return (
    <div className="border-2 flex justify-center items-center rounded-xl h-[150px] w-[300px] mx-4 my-12 bg-green-400/50 backdrop-blur-md">
      <div className="flex flex-col mx-4 my-2 text-3xl font-bold text-indigo-900">{card}</div>
    </div>
  );
}
