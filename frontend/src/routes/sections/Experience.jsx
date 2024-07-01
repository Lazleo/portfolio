import { useEffect, useRef } from "react";
import Banner from "../../components/Experience/Banner";
import XPCard from "../../components/Experience/XPCard";
import { animate, motion, useMotionValue, useScroll } from "framer-motion";
import useMeasure from "react-use-measure";

export default function Experience() {
  const cards = [
    {
      title: "WCollective",
      body: ["creating", "designing", "managing"],
      subTitle: "Front End Web Developer",
      date: "2024 - present",
    },
    {
      title: "Technologies",
      body: ["HTML", "React.js", "Tailwind CSS"],
      subTitle: "Full Stack Developer",
      date: "2023 - 2024",
    },
    {
      title: "WCollective",
      body: ["creating", "designing", "managing"],
      subTitle: "Front End Web Developer",
      date: "2024 - present",
    },
    {
      title: "Technologies",
      body: ["HTML", "React.js", "Tailwind CSS"],
      subTitle: "Full Stack Developer",
      date: "2023 - 2024",
    },
  ];

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(scrollYProgress);

  useEffect(() => {
    let controls;
    let finalposition = -width / 2 - 4;

    controls = animate(xTranslation, [0, finalposition], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <div id="experience" className="flex flex-col justify-center relative">
      <div className="w-screen h-[300px] bg-lightBg">
        <Banner />
      </div>
      <motion.div
        ref={ref}
        className="flex absolute"
        style={{ x: xTranslation }}
      >
        {[...cards, ...cards].map((card) => (
          <XPCard
            title={card.title}
            body={card.body}
            subTitle={card.subTitle}
            date={card.date}
            key={card}
          />
        ))}
      </motion.div>
    </div>
  );
}
