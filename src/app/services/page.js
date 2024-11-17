import HeroSections from "@/components/reusable/HeroSections";
import ServicesItems from "@/components/Services/ServicesItems";

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
      />
      <ServicesItems />
    </main>
  );
};

export default Services;
