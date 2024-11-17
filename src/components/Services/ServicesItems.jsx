"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import {
  ArrowLeft,
  ArrowRight,
  CircleArrowLeft,
  CircleArrowRight,
} from "lucide-react";
import FilterTabs from "./FilterTabs";
const ServicesItems = () => {
  return (
    <section id="servFilter" className="container ">
      <h2 className="text-2xl md:text-3xl lg:text-5xl text-center font-semibold">
        هنا يمكنك العثور <span className="text-primary">على</span> الخدمات
        المناسبة
      </h2>
      <FilterTabs />
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Dialog>
          <DialogTrigger asChild></DialogTrigger>
          <DialogContent className="h-[400px]">
            <Swiper
              modules={[Navigation]}
              navigation={{ nextEl: ".right", prevEl: ".left" }}
              loop={true}
              slidesPerView={1}
              className="swiper4 relative ">
              <SwiperSlide>
                <img src="/banner.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/banner.jpg" alt="" />
              </SwiperSlide>
            </Swiper>
            <div className=" arrows w-full  ">
              <div className="right absolute  top-[45%]   z-30 right-4 cursor-pointer bg-primary text-white size-8 rounded-full grid place-items-center  transition-all">
                <ArrowRight className="size-6" />
              </div>
              <div className="left  cursor-pointer absolute top-[45%] bg-primary text-white size-8 rounded-full grid place-items-center   z-30 left-4   transition-all">
                <ArrowLeft className="size-6" />
              </div>
            </div>
            <DialogFooter>sasa</DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ServicesItems;
