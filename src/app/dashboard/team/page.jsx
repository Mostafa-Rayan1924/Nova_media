"use client";

import TeamPersonBox from "@/components/Team/TeamPersonBox";
import { getTeam } from "@/store/TeamSlices/teamSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
const page = () => {
  let { data, loading, error } = useSelector((state) => state.teamData);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTeam());
  }, []);
  return (
    <section className="my-[120px] container">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {loading &&
          Array.from({ length: 6 }).map((item, index) => (
            <div
              key={index}
              className="h-[200px] mt-10  bg-accent animate-pulse rounded-lg relative">
              <div className="size-20 absolute -top-10 left-4 rounded-full bg-gray-300 dark:bg-black/40 animate-pulse"></div>
              <div className="space-y-4 mt-4 p-4">
                <div className="   w-36 h-4 bg-gray-300 dark:bg-black/40 animate-pulse rounded-lg"></div>
                <div className="   w-40 h-3 bg-gray-300 dark:bg-black/40 animate-pulse rounded-lg"></div>
                <div className="  w-20 h-2 bg-gray-300 dark:bg-black/40 animate-pulse rounded-lg"></div>
                <div className="  w-44 h-3 bg-gray-300 dark:bg-black/40 animate-pulse rounded-lg"></div>
                <div className="  w-28 h-4 bg-gray-300 dark:bg-black/40 animate-pulse rounded-lg"></div>
              </div>
            </div>
          ))}
        {data.slice(1).map((person, index) => (
          <TeamPersonBox key={person?._id} person={person} index={index} />
        ))}
      </div>
      <div className="text-center mt-10">
        <Link className="w-full mx-auto block" href={"/dashboard/team/add"}>
          <Button className={cn(buttonVariants({ size: "lg" }), "w-[200px] ")}>
            اضف الي الفريق
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default page;
