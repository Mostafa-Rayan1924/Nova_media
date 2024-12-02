"use client";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { baseUrl } from "../constants/api";
import axios from "axios";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const InfoBox = ({ data }) => {
  let { user } = useSelector((state) => state.login);
  let router = useRouter();
  const [like, setLike] = useState(() => {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem(`like_${data?._id}`) || "no like";
    }
    return "no like";
  });

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      setLike(localStorage.getItem(`like_${data?._id}`) || "no like");
    }
  }, [data?._id]);

  const makeLike = async () => {
    if (user.token) {
      const newLikeStatus = like === "add like" ? "remove like" : "add like";
      setLike(newLikeStatus);

      if (typeof localStorage !== "undefined") {
        localStorage.setItem(`like_${data?._id}`, newLikeStatus);
      }

      try {
        let headers = {
          Authorization: `Bearer ${user?.token}`,
        };
        await axios.patch(
          `${baseUrl}nova/api/exhibition/like/${data._id}`,
          {},
          { headers }
        );
      } catch (error) {
        console.error("Error while liking:", error);

        const prevLikeStatus = like;
        setLike(prevLikeStatus);

        if (typeof localStorage !== "undefined") {
          localStorage.setItem(`like_${data?._id}`, prevLikeStatus);
        }
      }
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="flow-root sm:mt-5 rounded-lg h-fit  border border-border  sm:mb-0 py-5 shadow-sm">
      <dl className="-my-3 divide-y divide-border text-sm">
        <div className="grid grid-cols-2 gap-1 p-3 even:bg-accent/45 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-foreground">العنوان</dt>
          <dd className="text-muted-foreground sm:col-span-2">{data?.name}</dd>
        </div>

        <div className="grid grid-cols-2 gap-1 p-3 even:bg-accent/45 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-foreground">بالتعاون مع</dt>
          <dd className="text-muted-foreground sm:col-span-2">
            {data?.mention[0]}
          </dd>
        </div>
        <div className="grid grid-cols-2 gap-1 p-3 even:bg-accent/45 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium  text-foreground">الوصف</dt>
          <dd className="text-muted-foreground text-[12px] sm:text-sm sm:col-span-2">
            {data?.description}
          </dd>
        </div>
        <div className="grid grid-cols-2 gap-1 p-3 even:bg-accent/45 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-foreground mt-2">ما رايك؟</dt>
          <dd className="text-muted-foreground sm:col-span-2">
            <button
              onClick={makeLike}
              className={`border flex items-center px-6 justify-center gap-1 ${
                like === "add like"
                  ? "bg-primary"
                  : "bg-background border-primary"
              } rounded-lg  py-2`}>
              {like === "add like" ? (
                <span className="ml-2 text-white">اعجبني</span>
              ) : (
                <span className="ml-2 text-primary">قم بالاعجاب</span>
              )}
              <Heart
                size={20}
                className={`${
                  like === "add like" ? "text-white" : "text-primary"
                }`}
              />
            </button>
          </dd>
        </div>

        <div className="grid grid-cols-2 gap-1 p-3 even:bg-accent/45 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-foreground">
            اخرون اعجبهم هذا المعرض
          </dt>
          <dd className="text-muted-foreground sm:col-span-2">
            <span className="bg-primary size-8 rounded-full text-white grid place-items-center text-sm">
              {data?.like > 99 ? "99+" : data?.like}
            </span>
          </dd>
        </div>
        <div className="grid grid-cols-2 gap-1 p-5 even:bg-accent/45 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-foreground">قم بالتقييم</dt>
          <dd className="text-muted-foreground sm:col-span-2">
            <a
              href="#review"
              className="bg-blue-600 px-8 text-center rounded-lg py-2 text-white">
              قم بالتقييم
            </a>
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default InfoBox;
