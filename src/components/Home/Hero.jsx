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
            {banner?.image?.includes("image") ? (
              <Image
                alt={banner?.name}
                src={banner?.image}
                layout="fill"
                objectFit="fill"
                priority={index === 0}
              />
            ) : banner?.image?.includes("video") ? (
              <video
                src={banner?.image}
                className="object-fill"
                autoPlay
                muted
                loop
              />
            ) : null}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
