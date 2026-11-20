"use client";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
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

      // استدعاء API لتحديث الإعجاب في الخادم
      try {
        let headers = {
          Authorization: `Bearer ${user?.token}`,
        };
        await axios.patch(
          `${process.env.API_BASE_URL}nova/api/exhibition/like/${data._id}`,
          {},
          { headers },
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
            {data?.mention}
          </dd>
        </div>
        <div className="grid grid-cols-2 gap-1 p-3 even:bg-accent/45 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium  text-foreground">الوصف</dt>
          <dd className="text-muted-foreground text-[12px] sm:text-sm sm:col-span-2">
            {data?.description}
          </dd>
        </div>

        <div className="grid grid-cols-2 gap-1 p-3 even:bg-accent/45 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-foreground">
            اخرون اعجبهم هذا المعرض
          </dt>
          <dd className="text-muted-foreground sm:col-span-2">
            <span className="bg-primary size-8 rounded-full text-white grid place-items-center text-sm">
              125
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
