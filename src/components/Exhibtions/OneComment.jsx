import { ThumbsDown, ThumbsUp } from "lucide-react";
import Image from "next/image";

const OneComment = () => {
  return (
    <div className="flex flex-row relative  justify-start  text-start items-center gap-2 py-4 border-b-2 border-border ">
      <Image
        src={"/person.png"}
        width={50}
        height={50}
        className="rounded-full  aspect-square object-cover"
        alt="profile img"
      />
      <div>
        <h3 className="text-lg mb-1 font-bold ">مصطفي بشير</h3>
        <h2 className=" text-wrap">يسك طليكت لي كيم سلست طيك تيكم ستل كيسمل</h2>
      </div>
      <div className=" absolute top-4 left-4">
        <div className="flex items-center gap-2">
          <ThumbsDown className="cursor-pointer" size={20} />
          <ThumbsUp className="cursor-pointer" size={20} />
        </div>
      </div>
    </div>
  );
};

export default OneComment;
