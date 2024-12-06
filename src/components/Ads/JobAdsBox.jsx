"use client";
import { Loader2, Trash2 } from "lucide-react";
import { socialLinks } from "../constants/SocialLinks";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delJobFunc } from "@/store/DashboardSlices/removeJobAds";
import { getJob } from "@/store/AdsSlices/getJobSlice";

const JobAdsBox = ({ item }) => {
  console.log(item);
  let [id, setId] = useState(null);
  let { user } = useSelector((state) => state.login);
  let { isloading } = useSelector((state) => state.delJobAds);
  let dispatch = useDispatch();
  let handleDel = async (id) => {
    let confirm = window.confirm("هل انت متاكد من الحذف ");
    if (confirm) {
      setId(id);
      const response = await dispatch(delJobFunc(id));
      if (response.meta.requestStatus === "fulfilled") {
        dispatch(getJob());
      }
    }
  };

  return (
    <div className="flex flex-col-reverse relative   even:md:flex-row-reverse even:flex-col eve md:h-[380px] bg-background    sm:overflow-y-auto  md:flex-row border-2 border-border rounded-lg overflow-hidden">
      {isloading && id == item._id && (
        <div className=" absolute z-50 top-1/2 left-1/2 bg-black/50 rounded-lg grid place-items-center -translate-x-1/2 size-[80px] -translate-y-1/2">
          <Loader2 className="size-8 animate-spin text-primary" />
        </div>
      )}
      <div className="flex-1  h-full ">
        <h2 className="bg-accent py-3 text-center font-bold ">إعلان توظيف</h2>
        <div className="px-4 py-6 space-y-4  sm:space-y-7">
          <div className="flex  flex-wrap items-start sm:items-center gap-4 justify-between">
            <h2 className="font-semibold  sm:min-w-fit text-sm">
              المسمي الوظيفة:
            </h2>
            <h3 className="text-muted-foreground font-semibold text-center sm:flex-1 text-sm">
              {item?.title}
            </h3>
          </div>
          <div className="flex  flex-wrap items-start sm:items-center gap-4 justify-between">
            <h2 className="font-semibold sm:min-w-fit  text-sm">
              وصف الوظيفة:
            </h2>
            <p className="text-muted-foreground text-center font-semibold  sm:flex-1 text-sm leading-relaxed">
              {item?.description}
            </p>
          </div>
          <div className="flex  flex-wrap items-center gap-4 justify-between">
            <h2 className="font-semibold sm:min-w-fit text-sm">
              تواصل معنا عبر:
            </h2>
            <div className="flex items-center justify-center   flex-1 gap-2">
              {socialLinks.map((item, index) => {
                return (
                  <a
                    href={item.path}
                    key={item.id}
                    target="_blank"
                    className={`size-8 sm:size-10 group icon transition-all duration-300    rounded-lg bg-accent dark:bg-accent      hover:text-white   grid place-items-center  cursor-pointer  `}>
                    <span>{item.icon}</span>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4  justify-between">
            <h2 className="font-semibold sm:min-w-fit text-sm "> للتقديم:</h2>
            <Link
              className="flex items-center sm:flex-1  sm:justify-center"
              href={"/job-ads/form"}>
              <button className="    bg-primary text-white py-2 px-8  rounded-lg     ">
                ادخل بياناتك
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-1 h-full relative sm:sticky sm:top-0">
        {user?.userData?.role == "ادارة" && (
          <div
            onClick={() => {
              handleDel(item._id);
            }}
            className="absolute top-4 hover:text-red-600 duration-300 z-20 cursor-pointer font-bold left-4  text-white bg-black/60 backdrop-blur-md  rounded-3xl py-1 px-2">
            <Trash2 className="size-4 sm:size-6" />
          </div>
        )}

        <img
          className="w-full h-[250px] sm:h-[350px] md:size-full aspect-square object-fill"
          src={item?.image}
          alt="jobImg"
        />
      </div>
    </div>
  );
};

export default JobAdsBox;
