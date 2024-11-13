import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";

export default function Home() {
  return (
    <main className="my-[140px] container space-y-28">
      <Hero />
      <About />
      <Services />
    </main>
  );
}
