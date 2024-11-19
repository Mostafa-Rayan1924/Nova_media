import ContactSec from "@/components/Contactus/ContactSec";
import HeroSections from "@/components/reusable/HeroSections";
import { Eye } from "lucide-react";

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
          secLink2={"/services"}
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
