import ExhibtiosSection from "@/components/Exhibtions/ExhibtiosSection";
import HeroSections from "@/components/reusable/HeroSections";
import { ServerCogIcon } from "lucide-react";
import Head from "next/head";
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
      <Head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="yRJxt4zBwj5HVHAibjsaEKY5jV3smdQTV7bZ6FHAyGI"
        />
        <link rel="preload" as="image" href="/share2.png" />
        <meta
          property="og:image"
          content="https://novamedia-eg.com/share2.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta property="og:url" content="https://novamedia-eg.com/" />

        {/* Meta robots */}
        <meta name="robots" content="index, follow" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://novamedia-eg.com/exhibitions" />
      </Head>
      <HeroSections
        title={"نوفا ميديا ترحب بكم"}
        spanTitle={"في صفحة المعارض"}
        desc={
          "نوفا ميديا تقدم خدمات متكاملة لتنظيم المعارض والمؤتمرات، تشمل التخطيط، التصميم، والتنفيذ، لضمان تجربة مميزة تعكس هوية شركتك وتجذب جمهورك المستهدف."
        }
        BtnOfSection={"تصفح المعارض"}
        secLink={"#exhibtions"}
        BtnOfSection2={"خدماتنا"}
        secLink2={"/services?6734eb12cf3720014ac84e62"}
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
