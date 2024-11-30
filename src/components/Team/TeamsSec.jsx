import MainTitle from "../reusable/MainTitle";
import ManagerBox from "./ManagerBox";
import TeamPersonBox from "@/components/Team/TeamPersonBox";
import ManagerSkeleton from "./ManagerSkeleton";

const TeamsSec = () => {
  return (
    <section className="space-y-10">
      <ManagerBox />
      <ManagerSkeleton />
      <MainTitle title="فريق العمل" btnTitle="تواصل معنا" href="contactus" />
      <div className="grid grid-cols-4 gap-2 mt-10">
        <div className="div col-span-4  lg:col-span-2 ">
          <h2 className="mb-3 text-lg font-semibold">section.title</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div>
              <TeamPersonBox />
              {/* skeleton */}
              <div className="h-[350px]  bg-accent animate-pulse rounded-lg relative">
                <div className="absolute top-4 right-4 w-36 h-4 bg-gray-300 dark:bg-black/40 animate-pulse rounded-lg"></div>
                <div className="absolute top-12 right-4 w-40 h-3 bg-gray-300 dark:bg-black/40 animate-pulse rounded-lg"></div>
              </div>
            </div>
            <div>
              <TeamPersonBox />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamsSec;
