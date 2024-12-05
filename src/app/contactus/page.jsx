import ContactSec from "@/components/Contactus/ContactSec";
import HeroSections from "@/components/reusable/HeroSections";
import { Eye } from "lucide-react";
export const metadata = {
  title: "نوفا ميديا - اتصل بنا",
  description:
    "تواصل مع فريق نوفا ميديا للحصول على استفساراتك حول خدمات الطباعة والتسويق الإلكتروني. نحن هنا لمساعدتك في تحقيق احتياجاتك من الطباعة الورقية، والسبلميشن، والحفر بالليزر والفايبر، والطباعة الداخلية والخارجية. اكتشف كيف يمكننا دعم علامتك التجارية اليوم.",
  keywords:
    "نوفا ميديا, اتصل بنا, استفسارات الطباعة, خدمات الطباعة, طباعة ورقية, سبلميشن, حفر بالليزر, طباعة الفايبر, الطباعة الداخلية, الطباعة الخارجية, خدمات التسويق الإلكتروني, دعم العملاء, خدمات دعاية وإعلان, التواصل مع نوفا ميديا",
};

const ContactUs = () => {
  return (
    <main className="my-[100px]  space-y-20  ">
      <div>
        <HeroSections
          title={"نوفا ميديا ترحب بكم"}
          spanTitle={"في صفحة تواصل معنا"}
          desc={
            "من خلال الصفحة التالية يمكنك التواصل معنا عن طريق مواقع التواصل الاجتماعي او البريد الالكتروني"
          }
          BtnOfSection={"تواصل معنا"}
          secLink={"#contactSec"}
          BtnOfSection2={"تصفح خدماتنا"}
          secLink2={"/services?6734eb12cf3720014ac84e62"}
          IconComponent={
            <Eye className="text-primary dark:text-white" size={20} />
          }
        />
        <h2
          id="contactSec"
          className="text-2xl mt-16 md:text-3xl lg:text-5xl text-center font-bold">
          تواصل معنا <span className="text-primary">عبر</span> الطرق التالية
        </h2>
      </div>
      <ContactSec />
    </main>
  );
};

export default ContactUs;
