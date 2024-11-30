import BoxDetailsSwiper from "@/components/Exhibtions/BoxDetailsSwiper";
import InfoBox from "@/components/Exhibtions/InfoBox";
import ReviewsSection from "@/components/Exhibtions/ReviewsSection";

const DetailsExhibtions = () => {
  return (
    <main className="my-[150px] container space-y-16">
      <div className="grid grid-cols-1  gap-4 md:grid-cols-2">
        <InfoBox />
        <BoxDetailsSwiper />
      </div>
      {/* reviews */}
      <ReviewsSection />
    </main>
  );
};

export default DetailsExhibtions;
