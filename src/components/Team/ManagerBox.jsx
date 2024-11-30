"use client";
import { MailCheck, Phone, Signature } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
const ManagerBox = () => {
  return (
    <div className="relative">
      <div className="absolute left-0 lg:-left-40 w-[150px] h-[150px] sm:w-[320px] sm:h-[320px]    opacity-20 blur-3xl  rounded-full bg-gradient-to-r from-primary to-transparent -z-20 top-0 " />
      <div className="max-w-[700px] relative p-4 overflow-hidden  mx-auto bg-background/90 border border-border rounded-lg">
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r   from-green-300 via-blue-500 to-purple-600"></span>
        {/* box */}
        <div className="flex  flex-col-reverse md:flex-row gap-4 justify-between flex-wrap">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            className="w-full h-full md:flex-1 space-y-3 sm:space-y-5">
            <h2 className="font-semibold text-2xl sm:text-3xl text-primary">
              محمود عبد الرحمن
            </h2>
            <p className="text-muted-foreground flex items-center gap-2 text-lg ">
              <Signature size={20} />
              مدير التقنية
            </p>
            <h3 className="text-lg">دكتوراه علوم الحاسبات في التعليم </h3>
            <h4
              className="
            text-muted-foreground
            flex
            items-center
            gap-2
            text-lg
            leading-relaxed">
              <Phone size={20} />
              01156581025
            </h4>
            <h5
              className="
            flex
            items-center
            gap-2
            leading-relaxed   text-lg">
              <MailCheck size={20} />
              mr3309296@gmail.com
            </h5>
            <Link
              className="block"
              target="_blank"
              href={"https://wa.me/+201008189006"}>
              <button className="w-full font-semibold  bg-green-500 hover:bg-green-600 duration-200  text-white py-2 rounded-lg">
                WhatsApp
              </button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            className="md:flex-1">
            <img
              src={
                "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
              }
              className="object-fill size-[300px] mx-auto   rounded-lg aspect-square "
              alt={"manager"}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ManagerBox;
