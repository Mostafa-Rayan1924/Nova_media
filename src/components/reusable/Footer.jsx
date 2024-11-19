"use client";
import { motion } from "framer-motion";
import { ArrowLeftCircle } from "lucide-react";
import { dropdownLinks } from "../constants/dropDownLinks";
import { socialLinks } from "../constants/SocialLinks";
import { bussinessInfo } from "../constants/BussinesInfoFooter";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className=" bg-background border-t border-border  py-[50px]">
      <div className="container grid grid-cols-1 place-items-center text-center md:text-start  md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
        <div className="flex flex-col gap-4 md:gap-2">
          <h2 className="text-[50px] font-bold">نوفا ميديا</h2>
          <div className="flex items-center justify-center md:justify-start gap-2">
            {socialLinks.map((item, index) => {
              return (
                <motion.a
                  href={item.path}
                  key={item.id}
                  target="_blank"
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                    transition: {
                      delay: index * 0.2,
                    },
                  }}
                  className={`size-10 group icon transition-all duration-300    rounded-lg bg-accent dark:bg-accent      hover:text-white   grid place-items-center  cursor-pointer  `}>
                  <span>{item.icon}</span>
                </motion.a>
              );
            })}
          </div>
          <p className="text-muted-foreground max-w-full">
            شركه نوفا ميديا للخدمات الدعايه والاعلان والطباعه الرقمية وتنظيم
            الفعاليات والمؤتمرات والمعارض
          </p>
        </div>
        <ul className="flex flex-col   gap-3  w-full ">
          {dropdownLinks.map((item) => {
            return (
              <li
                key={item.id}
                className="border-b relative border-border  text-muted-foreground  hover:text-foreground  hover:pr-[10px] transition-all duration-300 w-full ">
                <a
                  className=" flex items-center justify-center  md:justify-start gap-2 mb-3 "
                  href={item.path}>
                  <ArrowLeftCircle
                    size={20}
                    className="text-primary font-bold"
                  />
                  {item.title}
                  {item.soon && (
                    <h3 className="absolute left-2 top-0 bg-primary text-[13px] text-white p-1 rounded">
                      قريباً
                    </h3>
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex flex-col gap-6">
          {bussinessInfo.map((item) => {
            return (
              <div className="flex items-center  md:flex-row flex-col gap-2 md:gap-4">
                {item.icon}
                <p className="text-muted-foreground  ">{item.title}</p>
              </div>
            );
          })}
        </div>
        <div className="w-full">
          <Image
            className="size-[300px] mx-auto md:w-full md:h-full object-cover"
            src="/footerImg.svg"
            width={300}
            height={300}
            alt="footerImg"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
