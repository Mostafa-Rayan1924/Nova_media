"use client";
import { getJob } from "@/store/AdsSlices/getJobSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import JobAdsBox from "./JobAdsBox";
const JobAdsSec = () => {
  let { data, loading } = useSelector((state) => state.getJobs);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getJob());
  }, []);
  return (
    <div className="space-y-8">
      {loading &&
        Array.from({ length: 2 }).map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:h-[350px] overflow-hidden bg-accent rounded-lg md:flex-row w-full">
            <div className=" p-8 space-y-8 h-full  md:w-[50%] animate-pulse">
              <div className="w-[120px] h-2 bg-background/80 animate-pulse"></div>
              <div className="w-[220px] h-3 bg-background/80 animate-pulse"></div>
              <div className="max-w-[420px] h-5 bg-background/80 animate-pulse"></div>
              <div className="w-[100px] h-2 bg-background/80 animate-pulse"></div>
              <div className="w-[220px] h-3 bg-background/80 animate-pulse"></div>
              <div className="max-w-[520px] h-5 bg-background/80 animate-pulse"></div>
            </div>
            <div className="bg-background/80 h-full md:w-[50%]  animate-pulse"></div>
          </div>
        ))}
      {data.length > 0 ? (
        data.map((item) => {
          return <JobAdsBox item={item} />;
        })
      ) : (
        <div className="text-center bg-accent py-8 rounded-lg text-4xl font-bold">
          لا يوجد اعلانات الان
        </div>
      )}
    </div>
  );
};

export default JobAdsSec;
