import Head from "next/head";
import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import LatestProjects from "@/components/Home/LatestProjects";
import OurCustomers from "@/components/Home/OurCustomers";
import Services from "@/components/Home/Services";

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
        <meta property="og:image" content="https://novamedia-eg.com/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="preload" as="image" href="/logo.png" />
        <link rel="icon" href="./favicon.ico" sizes="any" />
        <meta property="og:url" content="https://novamedia-eg.com/" />
        <meta property="og:type" content="website" />
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
