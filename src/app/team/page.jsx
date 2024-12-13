import HeroSections from "@/components/reusable/HeroSections";
import TeamsSec from "@/components/Team/TeamsSec";
import { Headset } from "lucide-react";
import Head from "next/head";
export const metadata = {
  title: "نوفا ميديا - فريق العمل",
  description:
    "تعرّف على فريق نوفا ميديا المميز الذي يعمل باحترافية لتقديم خدمات الطباعة والتسويق الإلكتروني بأعلى جودة ودقة. فريقنا يتمتع بخبرة وإبداع لتحقيق رؤيتك.",
  keywords:
    "نوفا ميديا, فريق العمل, محترفون, خبراء الطباعة, التسويق الإلكتروني, فريق إبداعي, أفضل فريق عمل, خدمات مميزة, الطباعة والتسويق, فريق محترف",
};

const Team = () => {
  return (
    <main className="my-[100px]  space-y-20">
      <Head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="yRJxt4zBwj5HVHAibjsaEKY5jV3smdQTV7bZ6FHAyGI"
        />
        <meta
          property="og:image"
          content="https://novamedia-eg.com/share2.png"
        />
        <meta property="og:url" content="https://novamedia-eg.com/" />
        {/* Meta robots */}
        <meta name="robots" content="index, follow" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://novamedia-eg.com/team" />
      </Head>
      <HeroSections
        title={"نوفا ميديا ترحب بكم"}
        spanTitle={"في صفحة فريق العمل"}
        desc={
          "تعرف في هذه الصفحة على فريق عمل نوفا ميديا المميز، الذي يجمع بين الخبرة والإبداع لتقديم أفضل الخدمات في الطباعة الرقمية والتسويق وتنظيم الفعاليات."
        }
        BtnOfSection={"إعلن معانا"}
        secLink={"#"}
        BtnOfSection2={"تواصل معنا"}
        secLink2={"/contactus"}
        IconComponent={
          <Headset className="text-primary dark:text-white" size={20} />
        }
      />
      <div className="container">
        <TeamsSec />
      </div>
    </main>
  );
};

export default Team;
