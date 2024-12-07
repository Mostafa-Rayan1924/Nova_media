"use client";
import { useDispatch, useSelector } from "react-redux";
import SiteAdBox from "./SiteAdBox";
import { useEffect } from "react";
import { getAd } from "@/store/AdsSlices/getAdSlice";

const SiteAdSec = () => {
  let { data, loading } = useSelector((state) => state.getAd);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAd());
  }, []);
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading &&
          Array.from({ length: 6 }).map((item, index) => (
            <div className=" rounded-lg overflow-hidden border-2">
              <div className="h-[200px] w-full bg-accent animate-pulse " />
              <div className="p-2 text-right space-y-2 ">
                <div className="w-[100px] h-2 bg-accent animate-pulse rounded-md"></div>
                <div className="w-[80%] h-4 bg-accent animate-pulse rounded-md"></div>
                <div className="flex items-center justify-between flex-wrap">
                  <div className="w-[20%] h-2 bg-accent animate-pulse rounded-md"></div>
                  <div className="w-[20%] h-2 bg-accent animate-pulse rounded-md"></div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.length > 0 ? (
          data.map((item) => <SiteAdBox item={item} />)
        ) : (
          <div className="text-center col-span-3 bg-accent py-8 rounded-lg text-4xl font-bold">
            لا يوجد اعلانات الان
          </div>
        )}
      </div>
    </>
  );
};

export default SiteAdSec;
