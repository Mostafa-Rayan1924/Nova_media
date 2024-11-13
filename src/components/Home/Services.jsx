"use client";
import { useDispatch, useSelector } from "react-redux";
import MainTitle from "../reusable/MainTitle";
import ServiceItem from "./ServiceItem";
import { useEffect } from "react";
import { GetCats } from "@/store/HomeSlices/CategoriesSlice";
import CategorySkeleton from "./CategorySkeleton";

const Services = () => {
  let { categories, loading, error } = useSelector((state) => state.categories);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCats());
  }, []);
  return (
    <section>
      <MainTitle title="خدماتنا" btnTitle="عرض جميع الخدمات" href="services" />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10 ">
        {loading && (
          <>
            <CategorySkeleton />
            <CategorySkeleton />
            <CategorySkeleton />
            <CategorySkeleton />
          </>
        )}
        {categories.map((item, index) => {
          return <ServiceItem key={item.id} item={item} index={index} />;
        })}
      </div>
    </section>
  );
};

export default Services;
