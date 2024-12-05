"use client";
import { deleteInstaProFunc } from "@/store/DashboardSlices/deleteInstaPro";
import { GetProjects } from "@/store/HomeSlices/LatestProjectsSlice";
import {
  Bookmark,
  CircleX,
  Ellipsis,
  Heart,
  Loader2,
  MessageCircle,
  Send,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const LatestProBox = ({ project, index }) => {
  let pathname = usePathname();
  let dispatch = useDispatch();
  let [id, setId] = useState(null);
  let { isLoading } = useSelector((state) => state.delProInsta);
  let handleDelFromDashboard = async (id) => {
    let confirm = window.confirm("هل انت متاكد من حذف المشروع؟");
    if (confirm) {
      await setId(id);
      let response = await dispatch(deleteInstaProFunc(id));
      if (response.meta.requestStatus === "fulfilled") {
        dispatch(GetProjects());
      }
    }
  };
  return (
    <div className="border-border border relative">
      {isLoading && id == project?._id && (
        <div className="absolute top-1/2 z-20 left-1/2 bg-black/50 rounded-lg grid place-items-center -translate-x-1/2 size-[80px] -translate-y-1/2">
          <Loader2 className="size-8 animate-spin text-primary" />
        </div>
      )}
      <div className="flex items-center justify-between p-3">
        <h2 className="text-3xl">
          {pathname == "/dashboard/instProjects" ? (
            <CircleX
              onClick={() => handleDelFromDashboard(project?._id)}
              className="text-red-500 cursor-pointer size-8 sm:size-6"
            />
          ) : (
            "..."
          )}
        </h2>
        <div className="flex items-center gap-2">
          <div className="text-left">
            <div className="flex items-center gap-1">
              <Image
                src={"/HomeImg/verified.png"}
                width={15}
                height={15}
                alt={"verified"}
              />
              <h2>.Novamedia</h2>
            </div>
            <h3 className="text-sm text-muted-foreground">Egypt, ismailia</h3>
          </div>
          <Image
            src={"/whitelogo.png"}
            width={50}
            height={50}
            className="rounded-full aspect-square object-fill"
            alt={"logo"}
          />
        </div>
      </div>
      <div className="h-[350px] relative ">
        <div className="absolute top-4 z-10 right-4 text-white bg-black/60 backdrop-blur-md text-sm  rounded-3xl py-1 px-2  grid place-items-center ">
          1/3
        </div>
        <Image
          alt={project?.name}
          src={project?.image}
          className="size-[350px]"
          layout="fill"
          objectFit="fill"
          priority={index === 0}
        />
      </div>
      <div className="flex flex-col p-3 gap-2">
        <div className="flex items-center justify-between">
          <Bookmark className="size-6" />
          <Ellipsis className="text-muted-foreground mr-[40px]" />
          <div className="flex items-center  gap-4">
            <Heart className="size-5  " />
            <MessageCircle className="size-5" />
            <Send className="size-5" />
          </div>
        </div>
        <div className="flex items-center gap-2 flex-row-reverse">
          <Image
            src={project?.userImage ? project?.userImage : "/logo.png"}
            className="rounded-full object-cover"
            width={20}
            alt="user-image"
            height={20}
          />
          <h2 className="capitalize text-muted-foreground text-sm">
            liked by <span className="text-foreground"> {project.name} </span>{" "}
            and
            <span className="text-foreground"> {project.number} </span>
          </h2>
        </div>
        <div className="text-sm flex-row-reverse line-clamp-1  flex items-center gap-1 ">
          <span className="font-semibold">.Novamedia</span>
          <p>{"..." + project?.description?.split("").slice(0, 20).join("")}</p>
        </div>
      </div>
    </div>
  );
};

export default LatestProBox;
