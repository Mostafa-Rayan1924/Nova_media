import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import LatestProjects from "@/components/Home/LatestProjects";
import OurCustomers from "@/components/Home/OurCustomers";
import Services from "@/components/Home/Services";
import Loading from "./loading";
export const metadata = {
  title: "نوفا ميديا - الصفحة الرئيسية",
  description:
    "نوفا ميديا تقدم مجموعة شاملة من خدمات الطباعة الورقية والأقمشة، وتقنيات الليزر والفايبر، بالإضافة إلى الطباعة الداخلية والخارجية، والتسويق الإلكتروني لجعل أفكارك حقيقة.",
  keywords:
    "نوفا ميديا, خدمات الطباعة, طباعة ورقية, طباعة الأقمشة, تقنيات الليزر, تقنيات الفايبر, الطباعة الداخلية, الطباعة الخارجية, التسويق الإلكتروني, أفضل خدمات الطباعة",
};
export default function Home() {
  return (
    <main className="my-[140px] container space-y-28 md:space-y-36">
      <Hero />
      <About />
      <Services />
      <LatestProjects />
      <OurCustomers />
    </main>
  );
}
