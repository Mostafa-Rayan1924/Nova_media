import SiteAdSec from "@/components/Ads/SiteAdSec";
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
      <SiteAdSec />
    </main>
  );
};

export default SiteAd;
