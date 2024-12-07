"use client";
import { getAd } from "@/store/AdsSlices/getAdSlice";
import { delAdFunc } from "@/store/DashboardSlices/RemoveAd";
import { ArrowLeftCircle, Calendar, Loader2, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SiteAdBox = ({ item }) => {
  let [id, setId] = useState(null);
  let { user } = useSelector((state) => state.login);
  let { isloading } = useSelector((state) => state.removeAd);
  let dispatch = useDispatch();
  let handleDel = async (id) => {
    let confirm = window.confirm("هل انت متاكد من الحذف ");
    if (confirm) {
      setId(id);
      const response = await dispatch(delAdFunc(id));
      if (response.meta.requestStatus === "fulfilled") {
        dispatch(getAd());
      }
    }
  };

  return (
    <div className=" rounded-lg overflow-hidden relative border-2">
      {isloading && id == item._id && (
        <div className=" absolute z-50 top-1/2 left-1/2 bg-black/50 rounded-lg grid place-items-center -translate-x-1/2 size-[80px] -translate-y-1/2">
          <Loader2 className="size-8 animate-spin text-primary" />
        </div>
      )}
      {user?.userData?.role == "ادارة" && (
        <div
          onClick={() => {
            handleDel(item._id);
          }}
          className="absolute top-4 hover:text-red-600 duration-300 z-20 cursor-pointer font-bold left-4  text-white bg-black/60 backdrop-blur-md  rounded-3xl py-1 px-2">
          <Trash2 className="size-4 sm:size-6" />
        </div>
      )}

      <Image
        src={item?.media[0]}
        width={450}
        height={450}
        className="h-[250px] w-full object-fill"
        alt="adImg"
      />
      <div className="p-2 text-right space-y-2 bg-background ">
        <h2 className="text-lg">{item?.title}</h2>
        <p className="line-clamp-2 text-muted-foreground text-sm">
          {item?.description}
        </p>
        <div className="flex items-center justify-between flex-wrap">
          <small className="flex items-center gap-1">
            <Calendar className="text-primary" size={15} />
            <h4> {item?.createdAt.slice(0, 10)}</h4>
          </small>
          <Link
            className="flex items-center gap-1 "
            href={`/site-ads/${item?._id}`}>
            اقرأ المزيد
            <ArrowLeftCircle className="text-primary" size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SiteAdBox;
