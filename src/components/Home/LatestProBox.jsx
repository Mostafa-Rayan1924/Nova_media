import { Bookmark, Ellipsis, Heart, MessageCircle, Send } from "lucide-react";
import Image from "next/image";
import { object } from "yup";

const LatestProBox = ({ project }) => {
  return (
    <div className="border-border border">
      <div className="flex items-center justify-between p-3">
        <h2 className="text-3xl">...</h2>
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
            src={"/logo white.png"}
            width={50}
            height={50}
            className="rounded-full aspect-square object-fill"
            alt={"logo"}
          />
        </div>
      </div>
      <div className="h-[350px] relative ">
        <div className="absolute top-4 right-4 text-white bg-black/60 backdrop-blur-md text-sm  rounded-3xl py-1 px-2  grid place-items-center ">
          1/3
        </div>
        <img
          alt={project?.name}
          className="object-fill w-[350px] h-[350px] "
          decoding="async"
          src={project?.image}
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
          <p>{"..." + project.description.split("").slice(0, 20).join("")}</p>
        </div>
      </div>
    </div>
  );
};

export default LatestProBox;
