"use client";
import Image from "next/image";
import { motion } from "framer-motion";
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
import { ArrowLeft, ArrowRight } from "lucide-react";
import { DialogTitle } from "@radix-ui/react-dialog";
const DialogBox = ({ item }) => {
  return (
    <section>
      <Dialog>
        <DialogTrigger asChild>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
            }}
            className="h-[250px] cursor-pointer   border-2 hover:border-primary  transition-all duration-300    p-2 rounded-lg bg-accent relative overflow-hidden  ">
            <Image
              src={item?.image[0]?.url}
              width={400}
              height={400}
              className="size-full mx-auto object-fill "
              alt={item?.name}
            />
            <div className="absolute  text-[15px] bottom-0 left-0 text-center font-semibold text-white  bg-gradient-to-t from-gray-900 to-transparent w-full p-4 ">
              {item?.name}
            </div>
          </motion.div>
        </DialogTrigger>

        <DialogContent className="h-[400px]">
          <DialogTitle className="border-b border-gray-500 font-semibold pb-2.5 text-center md:text-2xl ">
            {item.name}
          </DialogTitle>
          <Swiper
            modules={[Navigation]}
            navigation={{ nextEl: ".right", prevEl: ".left" }}
            loop={true}
            slidesPerView={1}
            className="swiper4 relative ">
            {item.image.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <Image
                    src={item?.url}
                    width={400}
                    height={400}
                    className="size-full mx-auto object-cover "
                    alt={item?.name}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className=" arrows w-full  ">
            <div className="right absolute  top-1/2   z-30 right-4 cursor-pointer bg-primary text-white size-8 rounded-full grid place-items-center  transition-all">
              <ArrowRight className="size-6" />
            </div>
            <div className="left  cursor-pointer absolute  top-1/2 bg-primary text-white size-8 rounded-full grid place-items-center   z-30 left-4   transition-all">
              <ArrowLeft className="size-6" />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default DialogBox;
