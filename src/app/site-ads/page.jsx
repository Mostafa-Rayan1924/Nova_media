import SiteAdSec from "@/components/Ads/SiteAdSec";
import Head from "next/head";
export const metadata = {
  title: "نوفا ميديا - عروض وخصومات حصرية",
  description:
    "اكتشف أفضل العروض والخصومات الحصرية من نوفا ميديا في مجالات الطباعة والتسويق الإلكتروني. احصل على صفقات مميزة على الطباعة الورقية، الطباعة على القماش، طباعة الليزر، وأكثر. لا تفوّت فرصة توفير المال مع خدماتنا الاحترافية والجودة العالية.",
  keywords:
    "نوفا ميديا, عروض نوفا ميديا, خصومات نوفا ميديا, عروض الطباعة, خصومات الطباعة, طباعة ورقية, طباعة على القماش, طباعة الليزر, تسويق إلكتروني, عروض تسويق, خدمات احترافية, جودة عالية, توفير المال, عروض وخصومات, خدمات طباعة",
};

const SiteAd = () => {
  return (
    <main className="my-[140px] container  space-y-10">
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
        <link rel="canonical" href="https://novamedia-eg.com/site-ads" />
      </Head>
      <SiteAdSec />
    </main>
  );
};

export default SiteAd;
