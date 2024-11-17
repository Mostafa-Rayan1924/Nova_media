"use client";
import { useDispatch, useSelector } from "react-redux";
import ServiceItem from "../Home/ServiceItem";
import { useEffect } from "react";
import { GetCats } from "@/store/HomeSlices/CategoriesSlice";
import CategorySkeleton from "../Home/CategorySkeleton";
import FilterBox from "./FilterBox";

const FilterTabs = () => {
  let { categories, loading, error } = useSelector((state) => state.categories);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCats());
  }, []);
  return (
    <section>
      <div className="grid grid-cols-2  lg:grid-cols-4 gap-4  mt-10 ">
        {loading && (
          <>
            <CategorySkeleton />
            <CategorySkeleton />
            <CategorySkeleton />
            <CategorySkeleton />
          </>
        )}
        {categories.map((item, index) => {
          return <FilterBox key={item.id} item={item} index={index} />;
        })}
      </div>
    </section>
  );
};

export default FilterTabs;
