"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MainTitle from "../reusable/MainTitle";
import { useEffect, useState } from "react";
import { BtnsFilter } from "../constants/BtnsFilterInExh";
import ExhibtionBox from "./ExhibtionBox";
import ExhibtionBoxSkeleton from "./ExhibtionBoxSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "@/store/ExhibthionsSlice/FilterSlice";
const ExhibtiosSection = () => {
  let [active, setActive] = useState("حفلات تخرج");
  let { data, loading } = useSelector((state) => state.exhibtionsFilter);
  let dispatch = useDispatch();
  let handleFilter = async (item) => {
    setActive(item.title);
  };
  useEffect(() => {
    dispatch(getFilter(active));
  }, [, active]);
  return (
    <section id="exhibtions" className="relative  ">
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
                  onClick={() => handleFilter(item)}
                  key={item.id}
                  className="sm:w-full"
                  value={item.title}>
                  {item.title}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </div>
        <div
          style={{ direction: "rtl" }}
          className="grid col-span-3 md:col-span-2   ">
          <div className="flex flex-col col-span-3 gap-2 w-full ">
            <TabsContent value={active}>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {loading &&
                  Array.from({ length: 6 }).map((item, index) => {
                    return <ExhibtionBoxSkeleton key={index} />;
                  })}
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {data?.length > 0 ? (
                  data?.map((item) => (
                    <ExhibtionBox key={item._id} item={item} active={active} />
                  ))
                ) : (
                  <h2 className="text-center text-2xl font-semibold sm:mt-10 col-span-3">
                    لا يوجد معارض حتي الان
                  </h2>
                )}
              </div>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </section>
  );
};

export default ExhibtiosSection;
