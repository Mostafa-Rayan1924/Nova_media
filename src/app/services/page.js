import HeroSections from "@/components/reusable/HeroSections";
import ServicesItems from "@/components/Services/ServicesItems";
import { Headset } from "lucide-react";

const Services = () => {
  return (
    <main className="my-[100px]  space-y-28 ">
      <HeroSections
        title={"نوفا ميديا ترحب بكم"}
        spanTitle={"في صفحة خدماتنا"}
        desc={
          "تقدم Nova Media خدمات الطباعة الورقية والقماشية، والطباعة بالليزر والفايبر، بالإضافة إلى الطباعة الداخلية والخارجية بجودة عالية تناسب جميع الاحتياجات."
        }
        BtnOfSection={"تصفح الخدمات"}
        secLink={"#servFilter"}
        BtnOfSection2={"تواصل معنا"}
        secLink2={"/contactus"}
        IconComponent={
          <Headset className="text-primary dark:text-white" size={20} />
        }
      />
      <ServicesItems />
    </main>
  );
};

export default Services;
