"use client";
import { ChartBarStacked, MailCheck, Phone } from "lucide-react";
import { motion } from "framer-motion";
const TeamPersonBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      className="group relative block h-[350px] rounded-lg overflow-hidden  bg-black">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />

      <div className="relative px-4 py-4 sm:py-6 ">
        <p className="text-lg font-semibold uppercase tracking-widest text-primary">
          مارينا رأفت
        </p>

        <p className="text-[15px] whitespace-nowrap  font-bold text-white ">
          بكالريوس التربيه وتكنولوجيا التعليم
        </p>

        <div className="mt-40  ">
          <div className="translate-y-8 space-y-2 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <h4
              className="
            flex
            items-center
            gap-2
            
            text-white
            leading-relaxed">
              <Phone className="text-primary" size={20} />
              01156581025
            </h4>
            <h5
              className="
            text-white
            flex
            items-center
            gap-2
            leading-relaxed   ">
              <MailCheck className="text-primary" size={20} />
              mr3309296@gmail.com
            </h5>
            <h6
              className="
            text-white
            flex
            items-center
            gap-2
            leading-relaxed  ">
              <ChartBarStacked className="text-primary" size={20} />
              قسم الديجيتال والسمبليمشن
            </h6>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamPersonBox;
