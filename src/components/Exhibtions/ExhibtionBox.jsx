"use client";
import { motion } from "framer-motion";
import { CircleArrowLeft } from "lucide-react";
import Link from "next/link";

const ExhibtionBox = () => {
  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{
        scale: 1,
        transition: {
          duration: 0.2,
          type: "spring",
          stiffness: 320,
          mass: 2,
        },
      }}
      className=" text-right bg-background  rounded-lg overflow-hidden duration-200 border border-border hover:shadow  ">
      <img src="/banner.jpg" className="max-w-full" alt="" />
      <div className="p-3 space-y-2">
        <h2 className="text-lg">المعارض والمعلومات اسماهيلية ثان</h2>
        <p className="line-clamp-2 text-sm mb-2 text-muted-foreground">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit maxime
          commodi qui, quidem animi asperiores quam, eum magni aut earum, fugiat
          cum ipsum laborum quisquam possimus voluptatibus molestias porro at a
          impedit. Corrupti nesciunt similique explicabo maiores ex autem
          cumque.
        </p>
        <div className="flex items-center justify-between ">
          <Link href={"/exhibitions/1"} className="flex items-center gap-1">
            <CircleArrowLeft
              className="animate-pulse text-primary mt-1"
              size={20}
            />
            المزيد
          </Link>
          <h3 className="text-primary">اسم المكتبة</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default ExhibtionBox;
