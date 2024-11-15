import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import LatestProjects from "@/components/Home/LatestProjects";
import OurCustomers from "@/components/Home/OurCustomers";
import Services from "@/components/Home/Services";

export default function Home() {
  return (
    <main className="my-[140px] container space-y-28">
      <Hero />
      <About />
      <Services />
      <LatestProjects />
      <OurCustomers />
    </main>
  );
}
