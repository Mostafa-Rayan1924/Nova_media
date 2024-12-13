import ContactSec from "@/components/Contactus/ContactSec";
import HeroSections from "@/components/reusable/HeroSections";
import { Eye } from "lucide-react";
import Head from "next/head";

export const metadata = {
  title: "نوفا ميديا - اتصل بنا",
  description:
    "تواصل مع فريق نوفا ميديا للحصول على استفساراتك حول خدمات الطباعة والتسويق الإلكتروني. نحن هنا لمساعدتك في تحقيق احتياجاتك من الطباعة الورقية، والسبلميشن، والحفر بالليزر والفايبر، والطباعة الداخلية والخارجية. اكتشف كيف يمكننا دعم علامتك التجارية اليوم.",
  keywords:
    "نوفا ميديا, اتصل بنا, استفسارات الطباعة, خدمات الطباعة, طباعة ورقية, سبلميشن, حفر بالليزر, طباعة الفايبر, الطباعة الداخلية, الطباعة الخارجية, خدمات التسويق الإلكتروني, دعم العملاء, خدمات دعاية وإعلان, التواصل مع نوفا ميديا",
};

const ContactUs = () => {
  return (
    <main className="my-[100px] space-y-20">
      <Head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="yRJxt4zBwj5HVHAibjsaEKY5jV3smdQTV7bZ6FHAyGI"
        />
        <meta property="og:image" content="https://novamedia-eg.com/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="preload" as="image" href="/logo.png" />
        <link rel="icon" href="./favicon.ico" sizes="any" />
        <meta property="og:url" content="https://novamedia-eg.com/" />
        <meta name="robots" content="index, follow" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://novamedia-eg.com/contactus" />
      </Head>

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
