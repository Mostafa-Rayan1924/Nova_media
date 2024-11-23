"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getBanners } from "@/store/HomeSlices/bannerSlice";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const BannersDashboard = () => {
  let router = useRouter();
  let { user } = useSelector((state) => state.login);
  let { banners, error, loading } = useSelector((state) => state.banners);
  console.log(banners);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBanners());
  }, []);
  let handleDelete = (id) => {
    alert(id);
  };
  if (user?.userData?.role !== "ادارة") router.push("/");
  return (
    <div className="mt-[120px] mb-10 container">
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-4 my-[50px]">
        {loading &&
          Array.from({ length: 6 }).map((item, index) => {
            return (
              <div
                key={index}
                className="bg-accent h-[200px] w-full   rounded-lg animate-pulse"></div>
            );
          })}
        {banners.map((item, index) => {
          return (
            <div key={index} className="relative">
              <Image
                src={item?.image}
                alt={item?.name}
                width={400}
                height={400}
                className="w-full h-full object-fill rounded-lg"
              />
              <div
                onClick={() => handleDelete(item._id)}
                className="absolute top-4 hover:text-red-600 duration-300 z-10 cursor-pointer font-bold left-4 text-white bg-black/60 backdrop-blur-md  rounded-3xl py-1 px-2">
                <Trash2 className="size-4 sm:size-6" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center">
        <Link className="w-full mx-auto block" href={"/dashboard/banners/add"}>
          <Button
            className={cn(
              buttonVariants({ size: "lg" }),
              "w-[200px] sm:w-[200px]"
            )}>
            اضف بانر
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BannersDashboard;
