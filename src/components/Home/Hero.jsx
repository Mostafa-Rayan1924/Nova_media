"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBanners } from "@/store/HomeSlices/bannerSlice";
const Hero = () => {
  let { banners, error, loading } = useSelector((state) => state.banners);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBanners());
  }, []);
  return (
    <div className="container w-full h-full  overflow-hidden">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[EffectCards, Autoplay]}
        className="mySwiper ">
        {loading && (
          <SwiperSlide className="w-full h-[400px] sm:h-[calc(100vh-200px)] rounded-[20px] bg-gray-300 dark:bg-accent animate-pulse"></SwiperSlide>
        )}
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <img
              alt={banner?.name}
              className="object-fill h-full w-full"
              decoding="async"
              src={banner?.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
