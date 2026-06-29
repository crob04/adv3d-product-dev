import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Bottleneck from "@/components/Bottleneck";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import FinalCta from "@/components/FinalCta";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Bottleneck />
        <WhyUs />
        <Process />
        <FinalCta />
      </main>
    </>
  );
}