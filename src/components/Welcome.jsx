"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const Welcome = () => {
  let [show, setShow] = useState(true);
  useEffect(() => {
    let timer = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
            className="fixed z-[1000] bg-black/90  text-foreground top-0 left-0 size-full flex flex-col items-center justify-center">
            <img src="/themeLogo.png" className="size-[200px] animate-pulse" />
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-white text-xl sm:text-2xl">
              خدمات الطباعة والتسويق الرقمي
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Welcome;
