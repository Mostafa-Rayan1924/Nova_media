"use client";
import Image from "next/image";
import { motion } from "framer-motion";
const ServiceItem = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.2 }}
      style={{
        background: `linear-gradient(to top, #CC261B1A 0%, transparent 100%)`,
      }}
      className="bg-gradient-to-t h-[140px]  relative rounded-[30px] mt-10  flex flex-col  justify-center  items-center">
      <Image
        src={item?.image}
        width={100}
        height={100}
        className="size-[80px] sm:size-[100px] absolute top-[-25%]"
        alt={item?.name}
      />
      <h2 className="font-semibold mt-8 md:mt-14 text-lg md:text-[15px] text-center">
        {item?.name}
      </h2>
      {item.status == "قريبا" && (
        <div className="ribbon-2 text-white">قريباً</div>
      )}
    </motion.div>
  );
};

export default ServiceItem;
