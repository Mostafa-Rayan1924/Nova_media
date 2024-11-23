"use client";
import MainTitle from "../reusable/MainTitle";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { Autoplay, Scrollbar, Navigation } from "swiper/modules";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetCustomers } from "@/store/HomeSlices/HomeCustomersSlice";
const OurCustomers = () => {
  let { customers, loading } = useSelector((state) => state.homeCustomers);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCustomers());
  }, []);
  return (
    <section className="relative">
      <MainTitle title="شركاء النجاح" btnTitle="تواصل معنا" href="contactus" />
      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={{ nextEl: ".left-arrow", prevEl: ".right-arrow" }}
        scrollbar={{ el: ".progress" }}
        modules={[Navigation, Autoplay, Scrollbar]}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          430: {
            slidesPerView: 2.3,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        className="swiper3">
        {loading && (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => {
              return (
                <div
                  key={item}
                  className="size-[120px] rounded-full bg-accent animate-pulse"></div>
              );
            })}
          </div>
        )}
        {customers.map((item) => {
          return (
            <SwiperSlide
              key={item.id}
              className="w-full h-full flex items-center justify-center">
              <img
                alt={item?.name}
                className="size-[150px] object-fill "
                decoding="async"
                src={item?.image}
              />
            </SwiperSlide>
          );
        })}
        <div className="swiperOptions w-full mt-4 flex items-center justify-between">
          <div className="progress w-[70%] h-1 rounded-lg bg-gray-300"></div>
          <div className="arrows flex items-center gap-2">
            <div className="right-arrow cursor-pointer hover:text-primary transition-all">
              <CircleArrowRight className="size-8" />
            </div>
            <div className="left-arrow cursor-pointer hover:text-primary transition-all">
              <CircleArrowLeft className="size-8" />
            </div>
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default OurCustomers;
