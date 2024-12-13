"use client";
import {
  ChartBarStacked,
  CircleX,
  Loader2,
  MailCheck,
  Pen,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { delTeamFunc } from "@/store/DashboardSlices/removeTeam";
import { useDispatch, useSelector } from "react-redux";
import { getTeam } from "@/store/TeamSlices/teamSlice";
import Link from "next/link";
const TeamPersonBox = ({ person, index }) => {
  let pathname = usePathname();
  let [delId, setDelId] = useState(null);
  let { Isloading } = useSelector((state) => state.delTeam);

  let dispatch = useDispatch();
  let handleDelete = async (id) => {
    let confirmDelete = window.confirm("هل أنت متأكد من الحذف");
    if (confirmDelete) {
      setDelId(id);
      const response = await dispatch(delTeamFunc(id));
      if (response.meta.requestStatus === "fulfilled") {
        dispatch(getTeam());
      }
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, delay: index * 0.2 },
      }}
      className="group relative block mt-10  border border-border hover:border-primary duration-200 rounded-lg   bg-background">
      {Isloading && delId == person._id && (
        <div className="absolute top-1/2 left-1/2 bg-black/50 rounded-lg grid place-items-center -translate-x-1/2 size-[80px] -translate-y-1/2">
          <Loader2 className="size-8 animate-spin text-primary" />
        </div>
      )}
      <img
        alt={person?.name}
        src={person?.image}
        className="size-20 absolute -top-10 left-4 rounded-full object-fill "
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
            text-foreground
            leading-relaxed">
          <Phone className="text-primary" size={20} />
          {person?.phone}
        </h4>
        <h5
          className="
            text-muted-foreground
            flex
            items-center
            gap-2
            leading-relaxed   ">
          <MailCheck className="text-primary" size={20} />
          {person?.email}
        </h5>
        <h6
          className="
            text-foreground
            flex
            items-center
            gap-2
            leading-relaxed  ">
          <ChartBarStacked className="text-primary" size={20} />
          {person?.department}
        </h6>
      </div>
      {pathname === "/dashboard/team" && (
        <div className="flex items-center gap-2">
          <CircleX
            onClick={() => handleDelete(person?._id)}
            className="text-red-500 absolute bottom-4 left-4 cursor-pointer size-6"
          />
          <Link href={`/dashboard/team/add?id=${person?._id}`}>
            <Pen className="text-blue-500 absolute bottom-4 left-12 cursor-pointer size-6" />
          </Link>
        </div>
      )}
    </motion.div>
  );
};

export default TeamPersonBox;
