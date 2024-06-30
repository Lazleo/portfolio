import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { useState } from "react";

export default function MotionTest() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="border-2 flex flex-col justify-center items-center gap-4 py-[150px] m-5 rounded-xl">
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="border-2 rounded-xl bg-accent py-2 px-4 h-fit font-primary text-xl"
        layout
      >
        Show/Hide
      </motion.button>
      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            initial={{
              rotate: "0deg",
              scale: 0,
              y: 0,
              x: -150,
            }}
            animate={{
              rotate: "180deg",
              scale: 1,
              y: [0, -150, -300, -150, 0],
              x: [-150, 0, 150, 150, -150],
            }}
            exit={{
              rotate: "0deg",
              scale: 0,
              y: 0,
              x: -150,
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
              times: [0, 0.25, 0.65, 0.85, 1],
            }}
            className="w-[150px] h-[150px] bg-primary rounded-xl"
          ></motion.div>
        )}
      </AnimatePresence>
      <MotionConfig
        transition={{
          duration: 0.25,
          ease: "easeInOut",
        }}
      >
        <motion.button
          whileHover={{ scale: 1.15, rotate: "2.85deg" }}
          whileTap={{ backgroundColor: "red" }}
          className="border-2 rounded-xl bg-primary/50 py-2 px-4 h-fit font-primary text-xl"
        >
          click me!
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.15, rotate: "-5deg" }}
          whileTap={{ backgroundColor: "red" }}
          className="border-2 rounded-xl bg-accent py-2 px-4 h-fit font-primary text-xl"
        >
          click me!
        </motion.button>
      </MotionConfig>
    </div>
  );
}
