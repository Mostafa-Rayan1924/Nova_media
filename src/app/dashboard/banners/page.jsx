"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { delBannerFunc } from "@/store/DashboardSlices/removeBanner";
import { getBanners } from "@/store/HomeSlices/bannerSlice";
import { Loader2, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const BannersDashboard = () => {
  let router = useRouter();
  let { user } = useSelector((state) => state.login);
  let { banners, error, loading } = useSelector((state) => state.banners);
  let [delId, setDelId] = useState(null);
  let { Isloading } = useSelector((state) => state.deleteBanner);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBanners());
  }, []);
  let handleDelete = async (id) => {
    let confirmDelete = window.confirm("هل أنت متأكد من حذف البانر؟");
    if (confirmDelete) {
      setDelId(id);
      const response = await dispatch(delBannerFunc(id));
      if (response.meta.requestStatus === "fulfilled") {
        dispatch(getBanners());
      }
    }
  };
  if (user?.userData?.role !== "ادارة") router.push("/");
  return (
    <section className="mt-[120px] mb-10 container">
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-4 my-[50px]">
        {loading && (
          <>
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-accent h-[200px] w-full rounded-lg animate-pulse"></div>
            ))}
          </>
        )}

        {banners.map((item, index) => {
          return (
            <div
              key={index}
              className="relative border border-border rounded-lg">
              {item?.image?.includes("image") ? (
                <Image
                  src={item?.image}
                  alt={item?.name}
                  width={400}
                  height={400}
                  className="w-full h-[250px] object-fill rounded-lg"
                />
              ) : item?.image?.includes("video") ? (
                <video
                  src={item?.image}
                  className="w-full h-[250px] object-fill rounded-lg "
                  autoPlay
                  loop
                  muted
                />
              ) : null}

              <div
                onClick={() => handleDelete(item._id)}
                className="absolute top-4 hover:text-red-600 duration-300 z-10 cursor-pointer font-bold left-4 text-white bg-black/60 backdrop-blur-md  rounded-3xl py-1 px-2">
                <Trash2 className="size-4 sm:size-6" />
              </div>
              {delId == item._id && (
                <div className="absolute top-1/2 left-1/2 bg-black/50 rounded-lg grid place-items-center -translate-x-1/2 size-[80px] -translate-y-1/2">
                  <Loader2 className="size-8 animate-spin text-primary" />
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="text-center">
        <Link className="w-full mx-auto block" href={"/dashboard/banners/add"}>
          <Button className={cn(buttonVariants({ size: "lg" }), "w-[200px] ")}>
            اضف بانر
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default BannersDashboard;
