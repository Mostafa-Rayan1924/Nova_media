"use client";
import { CircleArrowDown, Headset } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
const HeroSections = ({
  title,
  spanTitle,
  desc,
  BtnOfSection,
  secLink,
  BtnOfSection2,
  secLink2,
  IconComponent,
}) => {
  return (
    <section className="relative heroBg  bg-cover bg-bottom bg-no-repeat">
      <div className="absolute inset-0 bg-background/50 dark:bg-background/75  sm:from-background/95 sm:to-background/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 flex lg:h-[86vh] items-center justify-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}>
            <h2 className="text-3xl font-semibold sm:text-5xl">{title}</h2>
            <strong className="block font-semibold text-3xl  sm:text-5xl mt-3  text-primary">
              {spanTitle}
            </strong>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-4 max-w-lg text-foreground/85   sm:text-xl/relaxed">
            {desc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mt-8 flex  justify-center gap-4 text-center">
            <Link
              href={secLink}
              className="flex items-center justify-center text-white gap-2 w-full rounded bg-primary  px-4  md:px-12 py-3 text-sm  shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
              {BtnOfSection}
              <CircleArrowDown
                size={20}
                className="text-white animate-bounce"
              />
            </Link>

            <Link
              href={secLink2}
              className=" w-full flex items-center justify-center  gap-2 rounded bg-background px-4  md:px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 dark:text-white focus:outline-none focus:ring active:text-rose-500 sm:w-auto">
              {BtnOfSection2}
              {IconComponent}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSections;
