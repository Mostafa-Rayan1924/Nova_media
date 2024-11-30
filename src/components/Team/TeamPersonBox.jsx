"use client";
import { ChartBarStacked, MailCheck, Phone } from "lucide-react";
import { motion } from "framer-motion";
const TeamPersonBox = ({ person, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, delay: index * 0.2 },
      }}
      className="group relative block mt-10  border border-border hover:border-primary duration-200 rounded-lg   bg-black">
      <img
        alt={person?.name}
        src={person?.image}
        className="size-20 absolute -top-10 left-4 rounded-full object-cover "
      />

      <div className="relative space-y-2  p-4 ">
        <p className="text-lg  font-semibold uppercase tracking-widest text-primary">
          {person?.name}
        </p>
        <p className=" whitespace-nowrap  font-bold text-foreground ">
          {person?.qualification}
        </p>
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
    </motion.div>
  );
};

export default TeamPersonBox;
