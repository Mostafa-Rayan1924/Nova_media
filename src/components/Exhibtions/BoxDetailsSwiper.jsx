"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// Import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Share2 } from "lucide-react";

const BoxDetailsSwiper = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          url: window.location.href,
        });
        console.log("Shared successfully");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("مشاركة غير مدعومة على هذا الجهاز");
    }
  };

  return (
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "red",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 relative">
        {data?.media.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                onClick={handleShare}
                className="absolute top-4 grid place-items-center left-8 hover:text-primary duration-300 z-20 cursor-pointer font-bold text-white bg-black/60 backdrop-blur-md rounded-3xl py-1 px-2">
                <Share2 className="size-4 sm:size-6" />
              </div>
              {item?.includes("video") ? (
                <video
                  src={item}
                  className="w-full h-[300px] object-cover rounded-lg"
                  autoPlay
                  loop
                  muted
                />
              ) : (
                <img
                  src={item}
                  alt={`media-${index}`}
                  className="w-full h-[300px] object-cover rounded-lg"
                />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiperEx">
        {data?.media.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              {item?.includes("video") ? (
                <video
                  src={item}
                  className="w-full h-[100px] object-cover rounded-lg"
                  muted
                />
              ) : (
                <img
                  src={item}
                  alt={`media-thumb-${index}`}
                  className="w-full h-[100px] object-cover rounded-lg"
                />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default BoxDetailsSwiper;
