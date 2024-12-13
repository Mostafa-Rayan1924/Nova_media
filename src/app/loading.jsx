"use client";
import React from "react";
import { motion } from "framer-motion";
const Loading = () => {
  return (
    <div className="fixed  flex-col  inset-0 bg-black/80 w-full z-[100] h-full flex items-center justify-center">
      <img src="/themeLogo.png" className="size-[200px] animate-pulse" />
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="text-white text-xl sm:text-2xl">
        خدمات الطباعة والتسويق الرقمي
      </motion.h2>
    </div>
  );
};

export default Loading;
