import JobAdsSec from "@/components/Ads/JobAdsSec";
import Head from "next/head";
export const metadata = {
  title: "نوفا ميديا - إعلانات الوظائف",
  description:
    "انضم إلى فريق عمل نوفا ميديا الرائد في مجال الطباعة والتسويق الإلكتروني. اكتشف فرص العمل المتاحة لدينا، وحقق طموحاتك المهنية مع بيئة عمل مبتكرة تدعم الإبداع والتطور. تصفح أحدث الوظائف في مجالات التصميم، التسويق، الإدارة، والمزيد.",
  keywords:
    "نوفا ميديا, إعلانات الوظائف, فرص عمل, وظائف شاغرة, وظائف تصميم, وظائف تسويق, وظائف إدارية, فرص عمل في الطباعة, وظائف التسويق الإلكتروني, وظائف نوفا ميديا, بيئة عمل إبداعية, تطوير مهني, فريق عمل متميز",
};

const JobAd = () => {
  return (
    <main className="my-[140px] container  ">
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
        {/* Meta robots */}
        <meta name="robots" content="index, follow" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://novamedia-eg.com/job-ads" />
      </Head>
      <JobAdsSec />
    </main>
  );
};

export default JobAd;
