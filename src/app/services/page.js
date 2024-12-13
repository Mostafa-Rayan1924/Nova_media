import HeroSections from "@/components/reusable/HeroSections";
import ServicesItems from "@/components/Services/ServicesItems";
import { Headset } from "lucide-react";
import Head from "next/head";
export const metadata = {
  title: "نوفا ميديا - خدماتنا",
  description:
    "اكتشف مجموعة خدمات نوفا ميديا الشاملة: الطباعة الورقية عالية الجودة، وتقنيات السبلميشن للطباعة على الأقمشة، والحفر باستخدام الليزر والفايبر، بالإضافة إلى الطباعة الداخلية (Indoor) والخارجية (Outdoor). نوفر أيضًا حلول التسويق الإلكتروني لرفع مستوى علامتك التجارية.",
  keywords:
    "نوفا ميديا, خدمات الطباعة, طباعة ورقية, سبلميشن, طباعة الأقمشة, ليزر, فايبر, الطباعة الداخلية, الطباعة الخارجية, التسويق الإلكتروني, خدمات الحفر بالليزر, تصميم شعارات, طباعة كروت شخصية, طباعة لوحات إعلانية, طباعة ستickers, خدمات الدعاية والإعلان",
};
const Services = () => {
  return (
    <main className="my-[100px]  space-y-28 ">
      <Head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="yRJxt4zBwj5HVHAibjsaEKY5jV3smdQTV7bZ6FHAyGI"
        />
        <meta
          property="og:image"
          content="https://novamedia-eg.com/HeadLogo.png"
        />
        <meta property="og:url" content="https://novamedia-eg.com/" />
        {/* Meta robots */}
        <meta name="robots" content="index, follow" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://novamedia-eg.com/services" />
      </Head>
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
