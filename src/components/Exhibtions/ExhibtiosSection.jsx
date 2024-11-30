"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MainTitle from "../reusable/MainTitle";
import { useState } from "react";
import { BtnsFilter } from "../constants/BtnsFilterInExh";
import ExhibtionBox from "./ExhibtionBox";
import ExhibtionBoxSkeleton from "./ExhibtionBoxSkeleton";
const ExhibtiosSection = () => {
  let [active, setActive] = useState("حفلات تخرج");
  return (
    <section className="relative  ">
      <div className="text-center mb-10">
        <MainTitle
          title={"المعارض"}
          btnTitle={"تصفح جميع خدماتنا"}
          href={"services"}
        />
      </div>
      <div className="absolute left-0 w-[150px] h-[150px] sm:w-[220px] bottom-0 sm:h-[220px]    opacity-50 blur-3xl  rounded-full bg-gradient-to-r from-primary to-transparent -z-20 " />
      <Tabs
        defaultValue={active}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        <div className="grid col-span-3  md:col-span-1 ">
          <TabsList className="flex mt-2 flex-row sm:sticky sm:top-[120px] flex-wrap  items-center  justify-center md:flex-col gap-1 w-full h-fit ">
            {BtnsFilter.map((item) => {
              return (
                <TabsTrigger
                  key={item.id}
                  className="sm:w-full"
                  value={item.title}>
                  {item.title}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </div>
        <div className="grid col-span-3 md:col-span-2 ">
          <div className="flex flex-col col-span-3 gap-2 w-full ">
            <TabsContent value={active}>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <ExhibtionBox />
                <ExhibtionBox />
                <ExhibtionBox />
                <ExhibtionBox />
                <ExhibtionBox />
                <ExhibtionBoxSkeleton />
              </div>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </section>
  );
};

export default ExhibtiosSection;
