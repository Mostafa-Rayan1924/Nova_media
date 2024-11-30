import MainTitle from "../reusable/MainTitle";
import ManagerBox from "./ManagerBox";
import TeamPersonBox from "@/components/Team/TeamPersonBox";

const TeamsSec = () => {
  return (
    <section className="space-y-10">
      <ManagerBox />
      <MainTitle title="فريق العمل" btnTitle="تواصل معنا" href="contactus" />
      <div className="grid grid-cols-4 gap-2 mt-10">
        <div className="div col-span-4  lg:col-span-2 ">
          <h2 className="mb-3 text-lg font-semibold">section.title</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div>
              <TeamPersonBox />
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
