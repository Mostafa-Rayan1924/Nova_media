import ExhibtiosSection from "@/components/Exhibtions/ExhibtiosSection";
import HeroSections from "@/components/reusable/HeroSections";
import { ServerCogIcon } from "lucide-react";
export const metadata = {
  title: "نوفا ميديا - المعارض والمؤتمرات",
  description:
    "اكتشف خدمات نوفا ميديا المتخصصة في تنظيم المعارض والمؤتمرات، من التخطيط والتصميم إلى التنفيذ الاحترافي، لضمان تجربة فريدة تعكس هوية شركتك وتحقق أهدافك.",
  keywords:
    "نوفا ميديا, المعارض, المؤتمرات, تنظيم معارض, تخطيط المؤتمرات, تصميم الفعاليات, خدمات المعارض, تنفيذ احترافي, تجربة فريدة, هوية الشركة, فعاليات مميزة",
};

const Exhibitions = () => {
  return (
    <main className="my-[100px]  space-y-20">
      <HeroSections
        title={"نوفا ميديا ترحب بكم"}
        spanTitle={"في صفحة المعارض"}
        desc={
          "نوفا ميديا تقدم خدمات متكاملة لتنظيم المعارض والمؤتمرات، تشمل التخطيط، التصميم، والتنفيذ، لضمان تجربة مميزة تعكس هوية شركتك وتجذب جمهورك المستهدف."
        }
        BtnOfSection={"تصفح المعارض"}
        secLink={"#exhibtions"}
        BtnOfSection2={"خدماتنا"}
        secLink2={"/services"}
        IconComponent={
          <ServerCogIcon className="text-primary dark:text-white" size={20} />
        }
      />
      <div className="container">
        <ExhibtiosSection />
      </div>
    </main>
  );
};

export default Exhibitions;
