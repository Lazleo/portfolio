import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* eslint-disable react/prop-types */
export default function XPCard(props) {
  const { title, body, subTitle, date } = props;
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <motion.div
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
      className={`relative ${
        showOverlay ? "shadow-glow" : ""
      } rounded-3xl h-fit w-fit mx-4`}
    >
      <AnimatePresence>
        <motion.div
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // exit={{ opacity: 0 }}
          className={`relative overflow-hidden border-2 border-gray-600 flex flex-col justify-center items-center rounded-3xl h-fit w-[350px] px-8 py-4 shadow-inner shadow-white/75 ${
            showOverlay ? "bg-primary/90" : "bg-lightBg/70"
          }  backdrop-blur-md`}
        >
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
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
