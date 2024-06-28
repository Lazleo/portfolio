/* eslint-disable react/prop-types */
export default function XPCard(props) {
  const { title, body, subTitle, date } = props;
  return (
    <div className="border-2 border-gray-600 flex flex-col justify-center items-center rounded-3xl h-fit w-[350px] mx-4 px-8 py-4 shadow-inner shadow-white/75 bg-lightBg/60 backdrop-blur-md">
      <div className="w-full text-2xl pb-4 font-primary font-extrabold text-accent">
        {title}
      </div>
      <ul className="text-accent w-full pl-4">
        {body.map((item) => (
          <li key={item}> • {item}</li>
        ))}
      </ul>
      <div className="w-full flex flex-col pt-4 justify-end items-end">
        <div className="font-primary font-extrabold text-accent">
          {subTitle}
        </div>
        <div className="font-primary font-extrabold text-accent">
          {date}
        </div>
      </div>
    </div>
  );
}
