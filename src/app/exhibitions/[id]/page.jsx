"use client";
import BoxDetailsSwiper from "@/components/Exhibtions/BoxDetailsSwiper";
import InfoBox from "@/components/Exhibtions/InfoBox";
import ReviewsSection from "@/components/Exhibtions/ReviewsSection";
import { getByIdFunc } from "@/store/ExhibthionsSlice/getById";
import { Loader2, Share2 } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const DetailsExhibtions = () => {
  let { id } = useParams();
  let { data, loading } = useSelector((state) => state.getOneExhibtion);
  let [num, setNum] = useState(0);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getByIdFunc(id));
  }, [id, num]);

  return (
    <main className="my-[150px]  container space-y-16">
      <div className="grid grid-cols-1 relative   gap-8 md:grid-cols-2">
        {loading && (
          <div className="fixed z-50 bg-background/70 inset-0 grid place-items-center">
            <Loader2 className="size-10 text-primary animate-spin" />
          </div>
        )}

        <InfoBox data={data?.doc} />
        <BoxDetailsSwiper data={data?.doc} />
      </div>
      <ReviewsSection setNum={setNum} />
    </main>
  );
};

export default DetailsExhibtions;
