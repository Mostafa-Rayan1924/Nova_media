"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight, Loader2, Trash2 } from "lucide-react";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryById } from "@/store/CategorySlices/filterCats";
import { useState } from "react";
import { deleteServProFunc } from "@/store/DashboardSlices/deleteServ";

const DialogBox = ({ item, active }) => {
  let dispatch = useDispatch();
  let { isLoadingDel } = useSelector((state) => state.deleteServ);
  let { user } = useSelector((state) => state.login);
  let [delId, setDelId] = useState(null);

  let handleDel = async (id) => {
    let confirm = window.confirm("هل انت متاكد من حذف الخدمة؟");
    if (confirm) {
      setDelId(id);
      const response = await dispatch(deleteServProFunc(id));
      if (response.meta.requestStatus === "fulfilled") {
        dispatch(getCategoryById(active));
      }
    }
  };

  return (
    <section>
      <div className="div">
        <Dialog>
          <DialogTrigger asChild>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
              }}
              className="h-[250px] cursor-pointer border-2 hover:border-primary transition-all duration-300 p-2 rounded-lg bg-accent relative overflow-hidden">
              {user?.userData?.role == "ادارة" && (
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDel(item._id);
                  }}
                  className="absolute top-4 hover:text-red-600 duration-300 z-20 cursor-pointer font-bold right-4 text-white bg-black/60 backdrop-blur-md rounded-3xl py-1 px-2">
                  <Trash2 className="size-4 sm:size-6" />
                </div>
              )}
              {isLoadingDel && delId == item._id && (
                <div className="absolute top-1/2 left-1/2 bg-black/50 rounded-lg grid place-items-center -translate-x-1/2 size-[80px] -translate-y-1/2">
                  <Loader2 className="size-8 animate-spin text-primary" />
                </div>
              )}
              {item?.image[0]?.url?.includes("video") ? (
                <video
                  src={item?.image[0]?.url}
                  className="size-full mx-auto object-fill"
                  alt={item?.name}
                  autoPlay
                  loop
                  muted
                />
              ) : (
                <Image
                  src={item?.image[0]?.url}
                  width={400}
                  height={400}
                  className="size-full mx-auto object-fill"
                  alt={item?.name}
                />
              )}
              <div className="absolute text-[15px] bottom-0 left-0 text-center font-semibold text-white bg-gradient-to-t from-gray-900 to-transparent w-full p-4">
                {item?.name}
              </div>
            </motion.div>
          </DialogTrigger>

          <DialogContent className="h-[400px]">
            <DialogTitle className="border-b border-gray-500 font-semibold pb-2.5 text-center md:text-2xl">
              {item.name}
            </DialogTitle>
            <Swiper
              modules={[Navigation]}
              navigation={{ nextEl: ".right", prevEl: ".left" }}
              loop={true}
              slidesPerView={1}
              className="swiper4 relative">
              {item.image.map((imageItem, index) => {
                return (
                  <SwiperSlide key={index}>
                    {imageItem?.url?.includes("video") ? (
                      <video
                        src={imageItem?.url}
                        className="w-full h-[300px] object-fill"
                        autoPlay
                        loop
                        muted
                      />
                    ) : (
                      <Image
                        src={imageItem?.url}
                        width={400}
                        height={400}
                        className="w-full h-[300px] object-fill"
                        alt={`media-${index}`}
                      />
                    )}
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="arrows w-full">
              <div className="right absolute top-1/2 z-30 right-4 cursor-pointer bg-primary text-white size-8 rounded-full grid place-items-center transition-all">
                <ArrowRight className="size-6" />
              </div>
              <div className="left cursor-pointer absolute top-1/2 bg-primary text-white size-8 rounded-full grid place-items-center z-30 left-4 transition-all">
                <ArrowLeft className="size-6" />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default DialogBox;
