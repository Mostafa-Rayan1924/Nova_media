"use client";
import FilterTabs from "./FilterTabs";
import DialogBox from "./DialogBox";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { getCategoryById } from "@/store/CategorySlices/filterCats";
import SquareIcon from "../reusable/SquareIcon";
import CircleIcon from "../reusable/CircleIcon";
import { useSearchParams } from "next/navigation";
const ServicesItems = () => {
  const id = useSearchParams();
  const myRef = useRef(null);

  const [active, setActive] = useState(() => {
    if (id !== "") {
      return Array.from(id)[0]?.join("");
    } else {
      return "6734eb12cf3720014ac84e62";
    }
  });
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.filterCatsById);
  useEffect(() => {
    if (id !== "") {
      myRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);
  useEffect(() => {
    dispatch(getCategoryById(active));
  }, [active]);
  return (
    <section ref={myRef} id="servFilter" className="container relative ">
      <SquareIcon y="top-10 md:top-0" x="left-4 md:left-0" color="primary" />

      <h2 className="text-2xl md:text-3xl lg:text-5xl text-center font-semibold">
        هنا يمكنك العثور <span className="text-primary">على</span> الخدمات
        المناسبة
      </h2>
      <FilterTabs active={active} setActive={setActive} />
      {loading && (
        <div className="grid grid-cols-1 mt-10  md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 9 }).map((item, index) => {
            return (
              <div className="bg-accent h-[250px] w-full   rounded-lg animate-pulse"></div>
            );
          })}
        </div>
      )}
      <div className="grid grid-cols-1 mt-10  md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.length > 0 ? (
          data.map((item, index) => {
            return <DialogBox key={item._id} item={item} active={active} />;
          })
        ) : (
          <h2 className="text-center  col-span-4  text-3xl lg:text-5xl font-semibold">
            لا يوجد خدمات حتي الان
          </h2>
        )}
      </div>
    </section>
  );
};

export default ServicesItems;
