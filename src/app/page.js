import Head from "next/head"; // تأكد من استيراد Head هنا
import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import LatestProjects from "@/components/Home/LatestProjects";
import OurCustomers from "@/components/Home/OurCustomers";
import Services from "@/components/Home/Services";

// في ملف الصفحة الرئيسية، مثل page.js
export const metadata = {
  title: "نوفا ميديا - الصفحة الرئيسية",
  description:
    "نوفا ميديا تقدم مجموعة شاملة من خدمات الطباعة الورقية والأقمشة، وتقنيات الليزر والفايبر، بالإضافة إلى الطباعة الداخلية والخارجية، والتسويق الإلكتروني لجعل أفكارك حقيقة.",
  keywords:
    "نوفا ميديا,nova,novamedia,novmedia-eg,شركة دعايا واعلان, خدمات الطباعة, طباعة ورقية, طباعة الأقمشة, تقنيات الليزر, تقنيات الفايبر, الطباعة الداخلية, الطباعة الخارجية, التسويق الإلكتروني, أفضل خدمات الطباعة",
};

export default function Home() {
  return (
    <main className="my-[140px] container space-y-28 md:space-y-36">
      <Head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="yRJxt4zBwj5HVHAibjsaEKY5jV3smdQTV7bZ6FHAyGI"
        />

        {/* Meta robots */}
        <meta name="robots" content="index, follow" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://novamedia-eg.com/" />
      </Head>
      <Hero />
      <About />
      <Services />
      <LatestProjects />
      <OurCustomers />
    </main>
  );
}
