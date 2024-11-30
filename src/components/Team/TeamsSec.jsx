"use client";
import MainTitle from "../reusable/MainTitle";
import ManagerBox from "./ManagerBox";
import TeamPersonBox from "@/components/Team/TeamPersonBox";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTeam } from "@/store/TeamSlices/teamSlice";
import ManagerSkeleton from "./ManagerSkeleton";

const TeamsSec = () => {
  let { data, loading, error } = useSelector((state) => state.teamData);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTeam());
  }, []);

  return (
    <section className="space-y-10">
      {loading ? <ManagerSkeleton /> : <ManagerBox data={data[0]} />}
      <MainTitle title="فريق العمل" btnTitle="تواصل معنا" href="contactus" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {loading &&
          Array.from({ length: 6 }).map((item, index) => (
            <div
              key={index}
              className="h-[350px]  bg-accent animate-pulse rounded-lg relative">
              <div className="absolute top-4 right-4 w-36 h-4 bg-gray-300 dark:bg-black/40 animate-pulse rounded-lg"></div>
              <div className="absolute top-12 right-4 w-40 h-3 bg-gray-300 dark:bg-black/40 animate-pulse rounded-lg"></div>
            </div>
          ))}
        {data.slice(1).map((person) => (
          <TeamPersonBox key={person?._id} person={person} />
        ))}
      </div>
    </section>
  );
};

export default TeamsSec;
