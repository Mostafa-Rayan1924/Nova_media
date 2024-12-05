"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
const FilterBox = ({ item, index, active, setActive }) => {
  return (
    <motion.div
      onClick={() => {
        setActive(item._id);
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.2 }}
      className={` w-full md:h-full border-[3px] p-2 relative rounded-lg  ${
        active === item._id ? "border-primary" : "border-border"
      } hover:border-primary transition-all duration-300 cursor-pointer  flex flex-col gap-2 justify-center items-center`}>
      <Image
        src={item?.image}
        width={100}
        height={100}
        className="size-14 md:size-20"
        alt={item?.name}
      />
      <h2 className="font-semibold max-w-32  text-[12px] md:text-[15px] text-center">
        {item?.name}
      </h2>
      {active === item._id ? (
        <div className="absolute top-3 right-3 bg-primary size-6 rounded-full grid place-items-center">
          <Check size={20} className="text-white" />
        </div>
      ) : (
        ""
      )}
    </motion.div>
  );
};

export default FilterBox;
