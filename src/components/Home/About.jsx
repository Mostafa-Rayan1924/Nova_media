"use client";
import { ArrowRight } from "lucide-react";
import React from "react";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import SquareIcon from "../reusable/SquareIcon";
import CircleIcon from "../reusable/CircleIcon";
import { motion } from "framer-motion";
import Link from "next/link";
const About = () => {
  return (
    <section className="relative my-[50px] ">
      <div className="absolute left-0 lg:-left-40 w-[150px] h-[150px] sm:w-[320px] sm:h-[320px]    opacity-40 blur-3xl  rounded-full bg-gradient-to-r from-primary to-transparent -z-20 top-0 " />
      <div className="max-w-[700px] relative p-4 sm:p-6 mx-auto bg-background/90 border border-border rounded-lg">
        <SquareIcon y={"-top-5"} x={"left-0 sm:right-0"} color={"primary"} />
        <CircleIcon
          y={"-bottom-10 sm:bottom-5"}
          x={"right-0 lg:-right-20"}
          color={"muted-foreground"}
        />

        <div className="flex flex-col gap-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-semibold text-xl text-primary">
            من نحن
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-foreground">
            تعرف اكثر عنا
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className=" text-muted-foreground text-sm leading-relaxed">
            Nova Media هي شركة متخصصة في خدمات الدعاية والإعلان والطباعة الرقمية
            وتنظيم الفعاليات. تقدم الشركة مجموعة شاملة من حلول الطباعة تشمل
            طباعة الكتب والملازم التعليمية وكافة أنواع المطبوعات الورقية
            والقماشية والهدايا التذكارية، إضافة إلى خدمات ما بعد الطباعة مثل
            التقطيع والتغليف. كما تقدم تصميم الأختام، والدروع، والمواد
            الإعلانية، وتوفر حلولًا مبتكرة تشمل التصوير وإنتاج الاختبارات
            الإلكترونية وعروض تقديمية وفيديوهات.
          </motion.p>
          <div className="grid grid-cols-2  lg:grid-cols-3 gap-x-4  ">
            <div className="flex flex-col gap-y-1">
              <h4 className="text-4xl font-bold">2+</h4>
              <p className=" whitespace-nowrap text-sm sm:text-main  text-muted-foreground">
                سنوات من الخبره
              </p>
            </div>
            <div className="flex flex-col gap-y-1">
              <h4 className="text-4xl font-bold">20+</h4>
              <p className="whitespace-nowrap text-sm sm:text-main text-muted-foreground">
                عملاء وثقوا بنا
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-4 col-span-3 lg:col-span-1"
              )}>
              <ArrowRight className="size-4" />
              <a href="#latestPro">نظره علي بعض اعمالنا</a>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
