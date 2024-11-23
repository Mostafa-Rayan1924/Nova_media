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
        <div className="w-full h-full">
          <motion.iframe
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full h-[350px] sm:size-full rounded-lg object-cover"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.3729691913036!2d32.27196800000001!3d30.595241599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f859007470d085%3A0xc7f3dbf8249e5bca!2z2LTYsdmD2Kkg2YbZiNmB2Kcg2YXZitiv2YrYpyDZhNmE2K7Yr9mF2KfYqiDYp9mE2KfYudmE2KfZhtmK2Kkg2YjYp9mE2LfYqNin2LnYqSDYp9mE2LHZgtmF2YrYqQ!5e0!3m2!1sar!2seg!4v1731935039981!5m2!1sar!2seg"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></motion.iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
