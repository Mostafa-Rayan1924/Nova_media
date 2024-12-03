"use client";
import Link from "next/link";
import LatestProBox from "./LatestProBox";
import { Button, buttonVariants } from "../ui/button";
import { Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProjects } from "@/store/HomeSlices/LatestProjectsSlice";
import ProjectSkeleton from "./ProjectSkeleton";
import SquareIcon from "../reusable/SquareIcon";
import CircleIcon from "../reusable/CircleIcon";

const LatestProjects = () => {
  let { projects, loading, error } = useSelector((state) => state.homeProjects);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetProjects());
  }, []);
  return (
    <section id="latestPro" className="relative">
      <div className="hidden md:block">
        <SquareIcon y={"top-10"} x={"left-0"} color={"primary"} />
        <CircleIcon y={"bottom-0"} x={"right-0"} color={"muted-foreground"} />
      </div>

      <div className="flex flex-col gap-4 justify-center text-center items-center mb-10">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold">
          قم بزيارة
          <Link
            target="_blank"
            href={"https://www.instagram.com/Nova.media.eg"}
            style={{
              backgroundImage:
                "linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4)",
            }}
            className="text-clip mx-1 bg-clip-text text-transparent capitalize">
            @novamedia
          </Link>
          علي Instagram
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base max-w-[600px] leading-relaxed ">
          زوروا حسابنا على إنستاجرام Nova Media لتشاهدوا أحدث مشاريعنا في
          الإعلانات والطباعة الرقمية وتنظيم الفعاليات. انضموا إلينا واستلهموا من
          أفكارنا الإبداعية وخدماتنا المتميزة!
        </p>
      </div>
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ProjectSkeleton />
          <ProjectSkeleton />
          <ProjectSkeleton />
          <ProjectSkeleton />
        </div>
      )}
      <Swiper
        slidesPerView={3.4}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2.3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3.4,
            spaceBetween: 30,
          },
        }}
        className="swiper2">
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="swiper-slide2">
            <LatestProBox project={project} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center justify-center mt-10 gap-2">
        <Link href={"https://www.instagram.com/Nova.media.eg"} target="_blank">
          <Button className={buttonVariants({ size: "lg" })}>
            عرض المزيد على instagram
            <Instagram className="size-8" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default LatestProjects;
