"use client";
import { deleteExhProFunc } from "@/store/DashboardSlices/deleteExh";
import { getFilter } from "@/store/ExhibthionsSlice/FilterSlice";
import { motion } from "framer-motion";
import { CircleArrowLeft, Loader2, Pen, Trash2 } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ExhibtionBox = ({ item, active }) => {
  let { user } = useSelector((state) => state.login);
  let { isLoading } = useSelector((state) => state.deleteExh);
  let dispatch = useDispatch();
  let [id, setId] = useState(null);
  let image = useMemo(() => {
    return item?.media.find((mediaItem) => mediaItem.includes("image"));
  }, [item?.media]);

  let handleDel = async (id) => {
    let confirm = window.confirm("هل انت متاكد من الحذف ");
    if (confirm) {
      setId(id);
      const response = await dispatch(deleteExhProFunc(id));
      if (response.meta.requestStatus === "fulfilled") {
        dispatch(getFilter(active));
      }
    }
  };
  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{
        scale: 1,
        transition: {
          duration: 0.2,
          type: "spring",
          stiffness: 320,
          mass: 2,
        },
      }}
      className=" text-right bg-background relative  rounded-lg overflow-hidden duration-200 border border-border hover:shadow  ">
      <img src={image} className="w-full h-[230px] object-fill" alt="" />
      {user?.userData?.role == "ادارة" && (
        <div>
          <div
            onClick={() => {
              handleDel(item._id);
            }}
            className="absolute top-4 hover:text-red-600 duration-300 z-20 cursor-pointer font-bold right-4 text-white bg-black/60 backdrop-blur-md  rounded-3xl py-1 px-2">
            <Trash2 className="size-4 sm:size-6" />
          </div>
          <Link
            className="bg-black/50 py-1 px-2 rounded-full grid place-items-center absolute top-4 right-16"
            href={`/dashboard/exhibtions?id=${item?._id}`}>
            <Pen className="text-white    " />
          </Link>
        </div>
      )}
      {isLoading && id == item._id && (
        <div className="absolute top-1/2 left-1/2 bg-black/50 rounded-lg grid place-items-center -translate-x-1/2 size-[80px] -translate-y-1/2">
          <Loader2 className="size-8 animate-spin text-primary" />
        </div>
      )}
      <div className="p-3 space-y-2">
        <h2 className="text-lg">{item?.name}</h2>
        <p className="line-clamp-2 text-sm mb-2 text-muted-foreground">
          {item?.description}
        </p>
        <div className="flex items-center justify-between ">
          <h3 className="text-primary">{item?.mention}</h3>
          <Link
            href={`/exhibitions/${item?._id}`}
            className="flex items-center gap-1">
            <CircleArrowLeft
              className="animate-pulse text-primary mt-1"
              size={20}
            />
            المزيد
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ExhibtionBox;
