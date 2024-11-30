"use client";
import { ChartBarStacked, MailCheck, Phone } from "lucide-react";
import { motion } from "framer-motion";
const TeamPersonBox = ({ person }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      className="group relative block h-[350px] rounded-lg overflow-hidden  bg-black">
      <img
        alt={person?.name}
        src={person?.image}
        className="absolute  inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />

      <div className="relative px-4 py-4 ">
        <div className="bg-accent/50 p-1 rounded-sm">
          <p className="text-lg  font-semibold uppercase tracking-widest text-primary">
            {person?.name}
          </p>

          <p className=" whitespace-nowrap  font-bold text-foreground ">
            {person?.qualification}
          </p>
        </div>
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
              {person?.phone}
            </h4>
            <h5
              className="
            text-white
            flex
            items-center
            gap-2
            leading-relaxed   ">
              <MailCheck className="text-primary" size={20} />
              {person?.email}
            </h5>
            <h6
              className="
            text-white
            flex
            items-center
            gap-2
            leading-relaxed  ">
              <ChartBarStacked className="text-primary" size={20} />
              {person?.department}
            </h6>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamPersonBox;
