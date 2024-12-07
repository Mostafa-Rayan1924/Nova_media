"use client";
import { getOneAd } from "@/store/AdsSlices/getOneAd";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const GetOneAd = () => {
  let { id } = useParams();
  let { data, loading, error } = useSelector((state) => state.getOneAd);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneAd(id));
  }, [id]);
  return (
    <main className="my-[120px] container   space-y-10">
      {loading && (
        <div className="max-w-2xl mx-auto space-y-4   rounded-lg p-4">
          <div className="h-[350px] w-full rounded-lg bg-accent animate-pulse"></div>
          <div className="h-6 w-[50%] mx-auto rounded-lg bg-accent animate-pulse"></div>
          <div className="h-10 w-[80%] mx-auto rounded-lg bg-accent animate-pulse"></div>
        </div>
      )}

      {data && !loading && (
        <div className="max-w-2xl mx-auto space-y-4   rounded-lg p-4">
          <img
            src={data?.doc?.media[0]}
            className="w-full rounded-lg object-fill h-[250px] md:h-[350px] "
            alt={data?.doc?.title}
          />
          <h2 className="text-xl sm:text-2xl text-center text-primary font-bold">
            {data?.doc?.title}
          </h2>
          <p className="text-base sm:text-lg text-center text-muted-foreground  ">
            {data?.doc?.description}
          </p>
        </div>
      )}
    </main>
  );
};

export default GetOneAd;